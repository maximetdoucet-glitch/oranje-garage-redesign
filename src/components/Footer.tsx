import { SHOP } from "@/config/shop";
import Link from "next/link";

export default function Footer() {
  const f = SHOP.footer;
  const c = SHOP.contact;
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10">
        {/* Top CTA */}
        <div className="grid grid-cols-1 items-end gap-10 border-b border-border pb-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="label">— Klaar voor onderhoud?</div>
            <h3 className="display mt-5 text-4xl leading-[0.95] md:text-6xl">
              Loop binnen of <span className="text-accent">boek online.</span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:col-span-4 md:justify-end">
            <a
              href={c.phoneHref}
              className="inline-flex items-center gap-3 border border-border-strong px-6 py-3 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {c.phoneDisplay}
            </a>
            <Link
              href="/#boek"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              APK boeken
              <span aria-hidden className="cta-arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-block h-6 w-6 rounded-sm bg-accent" />
              <span className="display text-2xl tracking-wider">
                ORANJE GARAGE
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
              {f.tagline}
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="label">— Sitemap</div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["Diensten", "/diensten"],
                ["APK Volvo", "/apk"],
                ["Werkplaats", "/werkplaats"],
                ["Reviews", "/reviews"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-fg-muted transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="label">— Erkend</div>
            <ul className="mt-5 space-y-3 text-sm text-fg-muted">
              {f.erkend.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="label">— Contact</div>
            <address className="mt-5 not-italic space-y-3 text-sm text-fg-muted">
              <div>{c.address.line1}</div>
              <div>{c.address.line2}</div>
              <div className="pt-2">
                <a href={c.phoneHref} className="hover:text-accent">
                  {c.phoneDisplay}
                </a>
              </div>
              <div>
                <a href={`mailto:${c.email}`} className="hover:text-accent">
                  {c.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-8 md:flex-row md:items-center">
          <div className="label flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>© 2026 · ORANJE GARAGE VAN DER PEIJL</span>
            <span>· KVK {f.kvk}</span>
          </div>
          <div className="label flex items-center gap-5">
            <a href="#" className="hover:text-fg">Algemene voorwaarden</a>
            <a href="#" className="hover:text-fg">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
