import { SHOP } from "@/config/shop";
import Wordmark from "./Wordmark";

export default function Footer() {
  const f = SHOP.footer;
  const c = SHOP.contact;
  return (
    <footer className="relative overflow-hidden bg-bg pt-32 pb-12">
      {/* Massive editorial background type */}
      <div
        className="pointer-events-none absolute -bottom-4 left-0 right-0 select-none text-center"
        aria-hidden
      >
        <span
          className="display block tracking-[-0.04em]"
          style={{
            fontSize: "clamp(6rem, 22vw, 24rem)",
            lineHeight: "0.85",
            color: "transparent",
            WebkitTextStroke: "1px var(--line-strong)",
          }}
        >
          ORANJE
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-12">
        {/* Top CTA strip */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 border-y border-line-strong py-12 md:flex-row md:items-center">
          <div>
            <div className="mono mb-3 flex items-center gap-3 text-[10px] tracking-[0.3em] text-fg-muted">
              <span className="stripe-sig" aria-hidden>
                <span />
              </span>
              · LAATSTE STAP ·
            </div>
            <h3 className="display text-3xl tracking-tight md:text-5xl">
              Klaar voor eerlijk vakwerk?
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={c.phoneHref}
              className="inline-flex items-center gap-3 border border-line-strong px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {c.phoneDisplay}
            </a>
            <a
              href="#boek"
              className="btn-magnetic inline-flex items-center gap-3 border border-accent bg-accent px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black"
            >
              APK boeken <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark size="lg" />
            <p className="mt-8 max-w-md text-sm leading-relaxed text-fg-body">
              {f.tagline}
            </p>
            <div className="mono mt-10 flex items-center gap-4 text-[10px] tracking-[0.3em] text-fg-muted">
              <span className="stripe-sig" aria-hidden>
                <span />
              </span>
              {c.coordinates}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mono mb-5 text-[10px] tracking-[0.3em] text-fg-muted">
              / SITEMAP
            </div>
            <ul className="space-y-3 text-sm">
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
                    className="text-fg-body transition-colors hover:text-accent"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="mono mb-5 text-[10px] tracking-[0.3em] text-fg-muted">
              / ERKEND
            </div>
            <ul className="space-y-3 text-sm">
              {f.erkend.map((e) => (
                <li key={e} className="flex items-center gap-2 text-fg-body">
                  <span
                    className="inline-block h-1 w-1"
                    style={{ background: "var(--accent)" }}
                    aria-hidden
                  />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="mono mb-5 text-[10px] tracking-[0.3em] text-fg-muted">
              / CONTACT
            </div>
            <address className="not-italic space-y-3 text-sm text-fg-body">
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
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-line-strong pt-8 md:flex-row md:items-center">
          <div className="mono flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] tracking-[0.3em] text-fg-muted">
            <span>© 2026 · ORANJE GARAGE VAN DER PEIJL</span>
            <span>· KVK {f.kvk}</span>
            <span>· NIJMEGEN-OOST</span>
          </div>
          <div className="mono flex items-center gap-6 text-[10px] tracking-[0.3em] text-fg-muted">
            <a href="#" className="hover:text-fg">
              ALGEMENE VOORWAARDEN
            </a>
            <a href="#" className="hover:text-fg">
              PRIVACY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
