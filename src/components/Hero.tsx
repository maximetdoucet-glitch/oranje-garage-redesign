import { SHOP } from "@/config/shop";

const ACCENT_HEX: Record<string, string> = {
  red: "#e63327",
  gold: "#c9a961",
  blue: "#2b6bd6",
};

export default function Hero({ accent }: { accent?: "red" | "gold" | "blue" } = {}) {
  const a = ACCENT_HEX[accent ?? SHOP.brand.accent];
  const h = SHOP.hero;
  return (
    <section
      className="grain relative isolate overflow-hidden border-b border-border bg-bg"
      style={{ ["--accent" as string]: a }}
    >
      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-10 md:px-10">
        <div className="flex items-center gap-3">
          <span className="inline-block h-6 w-6 rounded-sm" style={{ background: "var(--accent)" }} />
          <span className="display text-2xl tracking-wider">{SHOP.brand.name}</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-fg-muted md:flex">
          <a className="hover:text-fg" href="#diensten">Diensten</a>
          <a className="hover:text-fg" href="#werkplaats">Werkplaats</a>
          <a className="hover:text-fg" href="#reviews">Reviews</a>
          <a className="hover:text-fg" href="#contact">Contact</a>
        </nav>
        <a
          href="#boek"
          className="rounded-full px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
          style={{ background: "var(--accent)" }}
        >
          APK boeken →
        </a>
      </header>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 pb-28 pt-20 md:grid-cols-12 md:px-10 md:pt-32">
        <div className="md:col-span-7">
          <div className="mono mb-8 flex items-center gap-3 text-[11px] tracking-[0.25em] text-fg-muted">
            <span className="inline-block h-px w-10" style={{ background: "var(--accent)" }} />
            {h.eyebrow}
          </div>

          <h1 className="display text-[clamp(3.5rem,9vw,8rem)] leading-[0.88]">
            {h.headlineLines[0]}
            <br />
            {h.headlineLines[1]}
            <br />
            <span style={{ color: "var(--accent)" }}>{h.headlineLines[2]}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted">{h.sub}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={h.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
              style={{ background: "var(--accent)" }}
            >
              {h.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a
              href={h.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm text-fg hover:border-fg"
            >
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
              {h.secondaryCta.label}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-y-4 text-xs sm:grid-cols-4">
            {h.trustBadges.map((b) => (
              <div key={b.k}>
                <div className="display text-xl tracking-wider">{b.k}</div>
                <div className="mono mt-1 text-[10px] tracking-[0.15em] text-fg-muted">{b.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={h.image}
              alt="Werkplaats interieur"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-110"
            />
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{ background: "linear-gradient(180deg, rgba(10,11,13,0.2) 0%, rgba(10,11,13,0.85) 100%)" }}
            />
            <div
              className="absolute -left-12 -top-12 h-40 w-40 rounded-full blur-3xl"
              style={{ background: "var(--accent)", opacity: 0.35 }}
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-sm border border-border bg-bg/85 p-5 backdrop-blur">
              <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">{h.statCard.label}</div>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <div className="display text-5xl leading-none">{h.statCard.leftNum}</div>
                  <div
                    className="mono mt-1 text-[10px] tracking-[0.15em] text-fg-muted"
                    dangerouslySetInnerHTML={{ __html: h.statCard.leftLabel }}
                  />
                </div>
                <div className="text-right">
                  <div className="display text-5xl leading-none" style={{ color: "var(--accent)" }}>
                    {h.statCard.rightNum}
                  </div>
                  <div className="mono mt-1 text-[10px] tracking-[0.15em] text-fg-muted">
                    {h.statCard.rightLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mono absolute -right-2 top-4 hidden rotate-90 text-[10px] tracking-[0.25em] text-fg-muted md:block">
            {h.coordinates}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">{h.ticker}</div>
          <div className="mono text-[10px] tracking-[0.25em]" style={{ color: "var(--accent)" }}>
            {h.openingShort}
          </div>
        </div>
      </div>
    </section>
  );
}
