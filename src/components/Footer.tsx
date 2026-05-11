import { SHOP } from "@/config/shop";

export default function Footer() {
  const f = SHOP.footer;
  const c = SHOP.contact;
  return (
    <footer className="bg-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="inline-block h-6 w-6 rounded-sm bg-accent-red" />
              <span className="display text-2xl tracking-wider">{SHOP.brand.name}</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-fg-muted">{f.tagline}</p>
          </div>

          <div>
            <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">ERKEND</div>
            <ul className="mt-4 space-y-2 text-sm">
              {f.erkend.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </div>

          <div>
            <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">CONTACT</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{c.phoneDisplay}</li>
              <li>{c.address.line1}</li>
              <li>{c.address.line2}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs md:flex-row md:items-center">
          <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">
            © 2026 · {SHOP.brand.name} · KVK {f.kvk}
          </div>
          <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">
            ALGEMENE VOORWAARDEN · PRIVACY
          </div>
        </div>
      </div>
    </footer>
  );
}
