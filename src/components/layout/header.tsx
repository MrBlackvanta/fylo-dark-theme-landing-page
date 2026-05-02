import { navigation } from "@/data";
import Link from "next/link";
import { LogoSVG } from "../icons";

export default function Header() {
  return (
    <header>
      <LogoSVG />
      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.name}>
              <Link href={item.route}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
