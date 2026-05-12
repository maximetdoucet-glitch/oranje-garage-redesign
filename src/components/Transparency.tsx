import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Transparency() {
  const t = SHOP.transparency;
  return (
    <section className="bg-bg">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="03"
          eyebrow="Hoe wij werken"
          line1={t.headlineLines[0]}
          line2={t.headlineLines[1]}
          aside={t.intro}
        />

        {/* Process steps */}
        <div className="mt-24 grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          {t.steps.map((s) => (
            <div key={s.step} className="border-t border-line-strong pt-8">
              <div
                className="serif text-6xl leading-none"
                style={{ color: "var(--accent)" }}
              >
                {s.step}
              </div>
              <h3 className="serif mt-8 text-2xl tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-fg-body">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee callout — dark inverted card */}
        <div
          className="mt-24 grid grid-cols-1 items-center gap-10 px-10 py-14 md:grid-cols-12 md:gap-16 md:px-16 md:py-20"
          style={{ background: "var(--bg-deep)" }}
        >
          <div className="md:col-span-7">
            <div
              className="label"
              style={{ color: "rgba(245,243,238,0.5)" }}
            >
              {t.guarantee.label}
            </div>
            <h3
              className="serif mt-6 text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl"
              style={{ color: "var(--bg)" }}
            >
              {t.guarantee.title}
            </h3>
            <p
              className="mt-6 max-w-xl text-base font-light"
              style={{ color: "rgba(245,243,238,0.7)" }}
            >
              {t.guarantee.desc}
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <a
              href={t.guarantee.ctaHref}
              className="inline-flex items-center gap-3 border border-bg/30 px-8 py-4 text-sm font-medium transition-colors hover:bg-bg hover:text-fg"
              style={{ color: "var(--bg)" }}
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
