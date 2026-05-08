import { navigation } from "@/data";
import Link from "next/link";

import { LogoSVG } from "../icons";

export default function Header() {
  return (
    <header className="header-blur sticky top-0 z-10 mb-12 flex items-center justify-between px-6 text-xs leading-none font-normal text-white md:text-base">
      <Link href="/">
        <LogoSVG className="w-full max-w-20 md:max-w-44" />
      </Link>
      <nav aria-label="Header">
        <ul className="flex items-center gap-6">
          {navigation.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.route}
                  className="transition-all duration-300 hover:underline hover:text-shadow-[0.5px_0_0_currentColor]"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
