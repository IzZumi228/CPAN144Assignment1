"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/counter", label: "Counter" },
  { href: "/todos", label: "Todos" },
];

export default function Navbar() {
  const pathname = usePathname(); // to highlight current page

  return (
    <nav className="border-b border-neutral-200">
      <div className="mx-auto max-w-xl px-6 py-3 flex gap-6 text-sm">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? "font-semibold" : "text-neutral-500 hover:text-neutral-900"}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}