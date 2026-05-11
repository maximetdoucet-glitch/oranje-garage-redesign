import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Transparency() {
  const t = SHOP.transparency;
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="03"
          eyebrow="HOE WIJ WERKEN"
          line1={t.headlineLines[0]}
          line2={t.headlineLines[1]}
          aside={t.intro}
        />

        {/* Process timeline */}
        <div className="relative mt-24 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line on desktop */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent lg:block"
          />
          {t.steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="mb-8 flex items-center gap-4">
                <span
                  className="display flex h-14 w-14 items-center justify-center bg-bg-card text-2xl text-accent ring-1 ring-line-strong"
                  style={{ color: "var(--accent)" }}
                >
                  {s.step}
                </span>
                <span className="stripe-sig" aria-hidden>
                  <span />
                </span>
              </div>
              <h3 className="display text-2xl md:text-3xl tracking-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-fg-body">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee card */}
        <div className="relative mt-24 overflow-hidden border border-line-strong bg-bg-card">
          <div
            aria-hidden
            className="absolute -right-32 -top-32 h-80 w-80 rounded-full blur-[100px]"
            style={{ background: "var(--accent)", opacity: 0.12 }}
          />
          <div className="relative flex flex-col items-start justify-between gap-8 p-10 md:flex-row md:items-center md:p-14">
            <div className="max-w-2xl">
              <div className="mono mb-4 flex items-center gap-3 text-[10px] tracking-[0.3em] text-accent">
                <span className="stripe-sig" aria-hidden>
                  <span />
                </span>
                {t.guarantee.label}
              </div>
              <h3 className="display text-3xl md:text-5xl tracking-tight leading-[1]">
                {t.guarantee.title}
              </h3>
              <p className="mt-5 text-base text-fg-body md:max-w-xl">
                {t.guarantee.desc}
              </p>
            </div>
            <a
              href={t.guarantee.ctaHref}
              className="btn-magnetic inline-flex items-center gap-3 rounded-none border border-accent bg-accent px-8 py-5 text-[12px] font-bold uppercase tracking-[0.15em] text-black"
            >
              {t.guarantee.ctaLabel.replace(" →", "")}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
