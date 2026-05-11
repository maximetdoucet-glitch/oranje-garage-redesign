import { SHOP } from "@/config/shop";
import Wordmark from "./Wordmark";

export default function Hero() {
  const h = SHOP.hero;
  return (
    <section className="grain relative isolate min-h-screen overflow-hidden border-b border-line bg-bg">
      {/* Background image — full bleed, treated */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={h.image}
          alt=""
          className="h-full w-full object-cover opacity-[0.35] grayscale contrast-125"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.85) 60%, #000 100%)",
          }}
        />
        {/* Orange edge glow */}
        <div
          className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-[0.18] blur-[120px]"
          style={{ background: "var(--accent)" }}
        />
      </div>

      {/* Top nav */}
      <header className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 pt-8 md:px-12">
        <Wordmark size="md" />
        <nav className="hidden items-center gap-10 text-sm text-fg-body md:flex">
          <a className="transition-colors hover:text-fg" href="#diensten">Diensten</a>
          <a className="transition-colors hover:text-fg" href="#werkplaats">Werkplaats</a>
          <a className="transition-colors hover:text-fg" href="#reviews">Reviews</a>
          <a className="transition-colors hover:text-fg" href="#contact">Contact</a>
        </nav>
        <a
          href="#boek"
          className="btn-magnetic inline-flex items-center gap-2 rounded-none border border-accent bg-accent px-5 py-3 text-[12px] font-bold uppercase tracking-[0.15em] text-black"
        >
          APK boeken
          <span aria-hidden>→</span>
        </a>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-200px)] w-full max-w-[1400px] flex-col justify-center px-6 pb-24 pt-20 md:px-12 md:pt-32">
        {/* Eyebrow */}
        <div className="mono mb-10 flex items-center gap-4 text-[11px] tracking-[0.3em] text-fg-muted rise">
          <span className="stripe-sig" aria-hidden>
            <span />
          </span>
          {h.eyebrow}
        </div>

        {/* Massive display headline */}
        <h1
          className="display text-[clamp(4rem,12vw,12rem)] leading-[0.86] tracking-[-0.04em] rise"
          style={{ animationDelay: "0.1s" }}
        >
          {h.headlineLines[0]}
          <br />
          {h.headlineLines[1]}
          <br />
          <span className="text-accent">{h.headlineLines[2]}</span>
        </h1>

        {/* Lower row: copy left, stat card right */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div
            className="md:col-span-5 rise"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg leading-relaxed text-fg-body md:text-xl">
              {h.sub}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={h.primaryCta.href}
                className="btn-magnetic inline-flex items-center gap-3 rounded-none border border-accent bg-accent px-8 py-5 text-[12px] font-bold uppercase tracking-[0.15em] text-black"
              >
                {h.primaryCta.label}
                <span aria-hidden>→</span>
              </a>
              <a
                href={h.secondaryCta.href}
                className="inline-flex items-center gap-3 rounded-none border border-line-strong px-8 py-5 text-[12px] font-bold uppercase tracking-[0.15em] text-fg transition-colors hover:border-accent hover:text-accent"
              >
                <span
                  className="inline-block h-2 w-2"
                  style={{ background: "var(--accent)" }}
                />
                {h.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Stat card — right side */}
          <div
            className="md:col-span-7 md:flex md:items-end md:justify-end rise"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-full max-w-md border-l border-accent bg-bg-card/40 p-8 backdrop-blur-md">
              <div className="mono mb-6 flex items-center justify-between text-[10px] tracking-[0.3em] text-fg-muted">
                <span>{h.statCard.label}</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  LIVE
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="display text-6xl leading-none tracking-tight">
                    {h.statCard.leftNum}
                  </div>
                  <div
                    className="mono mt-3 text-[10px] tracking-[0.25em] text-fg-muted"
                    dangerouslySetInnerHTML={{ __html: h.statCard.leftLabel }}
                  />
                </div>
                <div>
                  <div
                    className="display text-6xl leading-none tracking-tight"
                    style={{ color: "var(--accent)" }}
                  >
                    {h.statCard.rightNum}
                  </div>
                  <div className="mono mt-3 text-[10px] tracking-[0.25em] text-fg-muted">
                    {h.statCard.rightLabel}
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-line-strong pt-6">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
                  {h.trustBadges.map((b) => (
                    <div key={b.k} className="flex items-baseline gap-2">
                      <span className="display text-sm tracking-[0.1em]">
                        {b.k}
                      </span>
                      <span className="mono text-[9px] tracking-[0.15em] text-fg-muted">
                        {b.v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side coordinates — vertical right edge */}
      <div className="mono pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 text-[10px] tracking-[0.4em] text-fg-dim md:block">
        {h.coordinates}
      </div>
    </section>
  );
}
