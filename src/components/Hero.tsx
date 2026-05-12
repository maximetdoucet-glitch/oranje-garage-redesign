import Link from "next/link";
import { SHOP } from "@/config/shop";

export default function Hero() {
  const h = SHOP.hero;
  return (
    <section className="grain relative isolate overflow-hidden border-b border-border bg-bg">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 pb-24 pt-16 md:grid-cols-12 md:px-10 md:pt-24">
        {/* Left col */}
        <div className="md:col-span-7">
          <div className="rise label flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-accent" />
            {h.eyebrow}
          </div>

          <h1
            className="rise display mt-8 text-[clamp(3.5rem,9vw,8rem)] leading-[0.88]"
            style={{ animationDelay: "0.1s" }}
          >
            {h.headlineLines[0]}
            <br />
            {h.headlineLines[1]}
            <br />
            <span className="text-accent">{h.headlineLines[2]}</span>
          </h1>

          <p
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-fg-muted"
            style={{ animationDelay: "0.2s" }}
          >
            {h.sub}
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/#boek"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              {h.primaryCta.label}
              <span aria-hidden className="cta-arrow">→</span>
            </Link>
            <a
              href={h.secondaryCta.href}
              className="inline-flex items-center gap-3 rounded-full border border-border-strong px-7 py-4 text-sm text-fg transition-colors hover:border-accent"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              {h.secondaryCta.label}
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="rise mt-14 grid max-w-2xl grid-cols-2 gap-y-5 border-t border-border pt-8 sm:grid-cols-4"
            style={{ animationDelay: "0.4s" }}
          >
            {h.trustBadges.map((b) => (
              <div key={b.k}>
                <div className="display text-xl tracking-wider">{b.k}</div>
                <div className="mono mt-1 text-[10px] tracking-[0.15em] text-fg-muted">
                  {b.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right col — photo */}
        <div className="relative md:col-span-5">
          <div
            className="img-hover relative aspect-[4/5] overflow-hidden rounded-sm border border-border"
            style={{ animationDelay: "0.2s" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={h.image}
              alt="Werkplaats Oranje Garage"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-110"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,11,13,0.15) 0%, rgba(10,11,13,0.85) 100%)",
              }}
            />
            <div
              className="absolute -left-12 -top-12 h-40 w-40 rounded-full blur-3xl"
              style={{ background: "var(--accent)", opacity: 0.35 }}
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-sm border border-border-strong bg-bg/85 p-5 backdrop-blur">
              <div className="label">{h.statCard.label}</div>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <div className="display text-4xl leading-none">
                    {h.statCard.leftNum}
                  </div>
                  <div
                    className="mono mt-1 text-[10px] tracking-[0.15em] text-fg-muted"
                    dangerouslySetInnerHTML={{ __html: h.statCard.leftLabel }}
                  />
                </div>
                <div className="text-right">
                  <div className="display text-4xl leading-none text-accent">
                    {h.statCard.rightNum}
                  </div>
                  <div className="mono mt-1 text-[10px] tracking-[0.15em] text-fg-muted">
                    {h.statCard.rightLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="relative z-10 border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="label">{h.ticker}</div>
          <div className="label" style={{ color: "var(--accent)" }}>
            {h.openingShort}
          </div>
        </div>
      </div>
    </section>
  );
}
