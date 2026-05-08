"use client";

import { navigation } from "@/data";
import { cn } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoSVG } from "../icons";

export default function Header() {
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  return (
    <header className="mx-6 mb-12 flex items-center justify-between text-xs leading-none font-normal text-white md:mb-18.75 md:text-base">
      <Link href="/">
        <LogoSVG className="w-full max-w-20 md:max-w-44" />
      </Link>
      <nav>
        <ul className="flex items-center gap-6">
          {navigation.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.route}
                  className={cn(
                    "transition-all duration-300 hover:underline hover:text-shadow-[0.5px_0_0_currentColor]",
                    isActive(item.route) &&
                      "underline text-shadow-[0.5px_0_0_currentColor]",
                  )}
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
