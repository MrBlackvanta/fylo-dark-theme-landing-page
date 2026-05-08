import { footer } from "@/data";
import { cn } from "@/lib";
import Link from "next/link";

export default function Footer() {
  const { information, navigation, social } = footer;
  return (
    <footer className="bg-primary-dark-blue-3 px-7 pt-64.75">
      <nav className="mx-auto max-w-310" aria-label="Footer">
        <footer.logo className="w-full max-w-27" />
        <div className="mt-8.75 flex flex-col items-start justify-between gap-14 sm:mt-13 lg:flex-row">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-20">
            {information.map((item, index) => {
              const row = (
                <div className="flex gap-4">
                  <item.icon
                    className="mt-1 size-5 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="font-open-sans text-base leading-6">
                    {item.value}
                  </p>
                </div>
              );
              return (
                <li
                  key={item.value}
                  className={cn({ "sm:row-span-2": index === 0 })}
                >
                  {item.href ? <a href={item.href}>{row}</a> : row}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-12 sm:flex-row sm:gap-20">
            {navigation.map((column) => (
              <ul
                key={column.map((link) => link.name).join("|")}
                className="flex flex-col gap-4"
              >
                {column.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.route}
                      className="whitespace-nowrap transition-all duration-300 hover:text-shadow-[0.5px_0_0_currentColor]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <ul className="flex items-center gap-4 self-center lg:self-start">
            {social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="hover:text-accent-cyan grid size-7.75 place-items-center rounded-full border border-current text-current transition-all duration-300"
                >
                  <item.icon className="mt-0.25 size-3.75" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="z-1 mt-15 w-full px-9 pb-4 text-center text-xs text-white sm:text-sm lg:p-0">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </div>
    </footer>
  );
}
