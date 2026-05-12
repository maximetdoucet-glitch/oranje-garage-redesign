import { SHOP } from "@/config/shop";
import Wordmark from "./Wordmark";

export default function Footer() {
  const f = SHOP.footer;
  const c = SHOP.contact;
  return (
    <footer style={{ background: "var(--bg-deep)", color: "var(--bg)" }}>
      <div className="mx-auto w-full max-w-[1500px] px-6 pt-28 pb-10 md:px-12 md:pt-36">
        {/* CTA strip */}
        <div className="grid grid-cols-1 items-end gap-12 border-b pb-20 md:grid-cols-12 md:gap-16"
             style={{ borderColor: "rgba(245,243,238,0.18)" }}>
          <div className="md:col-span-8">
            <div className="label" style={{ color: "rgba(245,243,238,0.5)" }}>
              — Laatste stap
            </div>
            <h3
              className="serif mt-6 text-4xl leading-[1.05] tracking-[-0.025em] md:text-6xl"
              style={{ color: "var(--bg)" }}
            >
              Klaar voor{" "}
              <span className="serif-italic" style={{ color: "var(--accent)" }}>
                eerlijk
              </span>{" "}
              vakwerk?
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-8 md:col-span-4 md:justify-end">
            <a
              href={c.phoneHref}
              className="serif-italic text-2xl"
              style={{ color: "var(--bg)" }}
            >
              {c.phoneDisplay}
            </a>
            <a
              href="#boek"
              className="inline-flex items-center gap-3 border px-7 py-4 text-sm font-medium transition-colors hover:bg-bg hover:text-fg"
              style={{
                borderColor: "rgba(245,243,238,0.3)",
                color: "var(--bg)",
              }}
            >
              APK boeken <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark size="lg" inverted />
            <p
              className="mt-10 max-w-md text-sm font-light leading-relaxed"
              style={{ color: "rgba(245,243,238,0.7)" }}
            >
              {f.tagline}
            </p>
          </div>

          <div className="md:col-span-2">
            <div
              className="label"
              style={{ color: "rgba(245,243,238,0.5)" }}
            >
              — Sitemap
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["Diensten", "#diensten"],
                ["Werkplaats", "#werkplaats"],
                ["Reviews", "#reviews"],
                ["Boeken", "#boek"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-light transition-colors hover:text-accent"
                    style={{ color: "rgba(245,243,238,0.8)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div
              className="label"
              style={{ color: "rgba(245,243,238,0.5)" }}
            >
              — Erkend
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              {f.erkend.map((e) => (
                <li
                  key={e}
                  className="font-light"
                  style={{ color: "rgba(245,243,238,0.8)" }}
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div
              className="label"
              style={{ color: "rgba(245,243,238,0.5)" }}
            >
              — Contact
            </div>
            <address
              className="mt-6 not-italic space-y-3 text-sm font-light"
              style={{ color: "rgba(245,243,238,0.8)" }}
            >
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

        {/* Bottom bar */}
        <div
          className="flex flex-col items-start justify-between gap-6 border-t pt-8 md:flex-row md:items-center"
          style={{ borderColor: "rgba(245,243,238,0.18)" }}
        >
          <div
            className="label flex flex-wrap items-center gap-x-6 gap-y-2"
            style={{ color: "rgba(245,243,238,0.5)" }}
          >
            <span>© 2026 · Oranje Garage van der Peijl</span>
            <span>· KvK {f.kvk}</span>
            <span>· Nijmegen-Oost</span>
          </div>
          <div
            className="flex items-center gap-8 text-xs"
            style={{ color: "rgba(245,243,238,0.5)" }}
          >
            <a href="#" className="hover:opacity-100 opacity-70 font-light">
              Algemene voorwaarden
            </a>
            <a href="#" className="hover:opacity-100 opacity-70 font-light">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
