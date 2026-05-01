#!/usr/bin/env node
/**
 * import-svgs — find every .svg in the project tree, generate a TSX
 * component per file in src/components/icons/, regenerate the barrel
 * index.ts, then chain to scope-svg-ids.mjs so internal id="..." values
 * are scoped per-render via useId().
 *
 * Usage:
 *   node scripts/import-svgs.mjs
 *
 * Behaviour:
 *   - Walks the project tree, skipping node_modules / .next / .git / dist /
 *     build / out / coverage / .turbo / .vercel / .cache and the output dir
 *     itself.
 *   - For each .svg found:
 *       - filename → PascalCase + "SVG" suffix
 *         (background-pattern.svg → BackgroundPatternSVG.tsx)
 *       - emits a default-exported function component
 *       - drops inline width/height; synthesises viewBox from them if
 *         absent so the consumer sizes the icon via className
 *       - spreads React.SVGProps<SVGSVGElement> after declared attrs so
 *         props can override
 *   - Regenerates src/components/icons/index.ts as a sorted barrel of
 *     every .tsx in that directory.
 *   - Runs scripts/scope-svg-ids.mjs on the generated files (spawned as a
 *     child process — leaves the existing script untouched and still
 *     usable standalone).
 *
 * Source .svg files are never modified or moved.
 *
 * Caveats:
 *   - Regex-based, not a real XML parser. Standard FrontendMentor icons
 *     are simple enough that this is fine, but exotic SVGs (CDATA,
 *     <style>, <foreignObject>, inline style="...") may need manual
 *     cleanup afterwards.
 *   - Existing TSX in src/components/icons is overwritten on each run.
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'src', 'components', 'icons');
const SCOPE_SCRIPT = path.join(ROOT, 'scripts', 'scope-svg-ids.mjs');

const IGNORED_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  '.turbo',
  '.vercel',
  '.cache',
  'dist',
  'build',
  'out',
  'coverage',
]);

function* walkSvgs(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (IGNORED_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (full === OUT_DIR) continue;
    if (entry.isDirectory()) {
      yield* walkSvgs(full);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.svg')) {
      yield full;
    }
  }
}

function pascalCase(name) {
  return name
    .replace(/\.svg$/i, '')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('');
}

const SPECIAL_ATTR_MAP = {
  class: 'className',
  for: 'htmlFor',
  'xlink:href': 'xlinkHref',
  'xlink:title': 'xlinkTitle',
  'xml:lang': 'xmlLang',
  'xml:space': 'xmlSpace',
};

function attrToJSX(name) {
  if (SPECIAL_ATTR_MAP[name]) return SPECIAL_ATTR_MAP[name];
  if (/^(data|aria)-/.test(name)) return name;
  if (!name.includes('-')) return name;
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function svgToJSX(source) {
  let body = source
    .replace(/<\?xml[^?]*\?>/g, '')
    .replace(/<!DOCTYPE[^>]*>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();

  const openMatch = body.match(/<svg\b([\s\S]*?)>/);
  if (!openMatch) throw new Error('no <svg> root tag found');

  const attrRe = /([a-zA-Z_][a-zA-Z0-9_:-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
  const attrs = {};
  let m;
  while ((m = attrRe.exec(openMatch[1]))) {
    attrs[m[1]] = m[2] ?? m[3];
  }

  const w = attrs.width;
  const h = attrs.height;
  delete attrs.width;
  delete attrs.height;

  if (!attrs.viewBox && w && h) {
    const wn = parseFloat(w);
    const hn = parseFloat(h);
    if (!Number.isNaN(wn) && !Number.isNaN(hn)) {
      attrs.viewBox = `0 0 ${wn} ${hn}`;
    }
  }

  if (!attrs.xmlns) attrs.xmlns = 'http://www.w3.org/2000/svg';

  const attrLines = Object.entries(attrs)
    .map(([k, v]) => `      ${attrToJSX(k)}="${v}"`)
    .join('\n');

  const newOpen = `<svg\n${attrLines}\n      {...props}\n    >`;
  body = body.replace(openMatch[0], newOpen);

  body = body.replace(
    /(\s)([a-zA-Z_][a-zA-Z0-9_]*(?::[a-zA-Z][a-zA-Z0-9]*|(?:-[a-zA-Z][a-zA-Z0-9]*)+))(\s*=\s*("[^"]*"|'[^']*'))/g,
    (_, ws, name, rest) => `${ws}${attrToJSX(name)}${rest}`,
  );

  body = body.replace(/(\s)class(\s*=\s*("[^"]*"|'[^']*'))/g, '$1className$2');

  return body;
}

function buildComponent(componentName, jsxBody) {
  return `export default function ${componentName}(props: React.SVGProps<SVGSVGElement>) {
  return (
    ${jsxBody}
  );
}
`;
}

function regenerateIndex() {
  const files = fs
    .readdirSync(OUT_DIR)
    .filter((f) => f.endsWith('.tsx'))
    .sort();
  const lines = files.map((f) => {
    const name = path.basename(f, '.tsx');
    return `export { default as ${name} } from './${name}';`;
  });
  return lines.join('\n') + '\n';
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const svgs = [...walkSvgs(ROOT)];
  if (svgs.length === 0) {
    console.log('No .svg files found.');
    return;
  }

  const generated = [];
  for (const svgPath of svgs) {
    const baseName = path.basename(svgPath);
    const componentName = pascalCase(baseName) + 'SVG';
    const outPath = path.join(OUT_DIR, `${componentName}.tsx`);
    const rel = path.relative(ROOT, svgPath);

    let source;
    try {
      source = fs.readFileSync(svgPath, 'utf8');
    } catch (e) {
      console.error(`✗ ${rel} — read failed: ${e.message}`);
      continue;
    }

    let jsx;
    try {
      jsx = svgToJSX(source);
    } catch (e) {
      console.error(`✗ ${rel} — ${e.message}`);
      continue;
    }

    fs.writeFileSync(outPath, buildComponent(componentName, jsx));
    generated.push(outPath);
    console.log(`✓ ${rel} → src/components/icons/${componentName}.tsx`);
  }

  fs.writeFileSync(path.join(OUT_DIR, 'index.ts'), regenerateIndex());
  console.log('✓ src/components/icons/index.ts regenerated');

  if (generated.length === 0) return;

  const result = spawnSync(
    process.execPath,
    [SCOPE_SCRIPT, ...generated],
    { stdio: 'inherit', cwd: ROOT },
  );

  if (result.status !== 0) {
    console.error('✗ scope-svg-ids.mjs exited with non-zero status');
    process.exit(result.status ?? 1);
  }
}

main();
