import { SHOP } from "@/config/shop";

export default function Transparency() {
  const t = SHOP.transparency;
  return (
    <section className="relative border-b border-border bg-bg-elevated">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-20 max-w-3xl">
          <div className="mono mb-4 flex items-center gap-3 text-[11px] tracking-[0.25em] text-fg-muted">
            <span className="inline-block h-px w-10 bg-accent-red" />
            {t.eyebrow}
          </div>
          <h2 className="display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            {t.headlineLines[0]}
            <br />
            <span className="text-accent-red">{t.headlineLines[1]}</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-fg-muted">{t.intro}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < t.steps.length - 1 && (
                <span className="absolute right-0 top-6 hidden h-px w-1/2 bg-border lg:block" />
              )}
              <div className="display text-7xl text-accent-red">{s.step}</div>
              <h3 className="display mt-6 text-2xl tracking-wide">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-sm border border-accent-red/30 bg-bg p-8 md:flex-row md:items-center md:p-12">
          <div>
            <div className="mono text-[11px] tracking-[0.25em] text-accent-red">{t.guarantee.label}</div>
            <h3 className="display mt-3 text-3xl md:text-4xl">{t.guarantee.title}</h3>
            <p className="mt-3 text-sm text-fg-muted md:max-w-xl">{t.guarantee.desc}</p>
          </div>
          <a
            href={t.guarantee.ctaHref}
            className="shrink-0 rounded-full bg-accent-red px-7 py-4 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
          >
            {t.guarantee.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
