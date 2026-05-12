"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";

const LINKS = [
  { label: "Diensten", href: "/diensten" },
  { label: "APK Volvo", href: "/apk" },
  { label: "Werkplaats", href: "/werkplaats" },
  { label: "Reviews", href: "/reviews" },
];

export default function SiteNav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Wordmark size="md" />
        <nav className="hidden items-center gap-9 text-sm text-fg-muted md:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`transition-colors hover:text-fg ${
                  active ? "text-fg" : ""
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <a
          href="/#boek"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
        >
          APK boeken
          <span aria-hidden className="cta-arrow">→</span>
        </a>
      </div>
    </header>
  );
}
