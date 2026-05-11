import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1 text-xs" aria-label={`${n} sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < n ? "var(--accent)" : "var(--line-strong)" }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const r = SHOP.reviews;
  return (
    <section
      id="reviews"
      className="relative overflow-hidden border-b border-line bg-bg-soft"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="04"
          eyebrow="REVIEWS · KLANTEN"
          line1={r.headlineLines[0]}
          line2={r.headlineLines[1]}
          aside="Wij doen geen reclame. Onze klanten doen dat voor ons — al jaren, op elk platform waar wij genoemd worden."
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden bg-line md:grid-cols-2 lg:grid-cols-3">
          {r.items.map((rev, i) => (
            <article
              key={rev.name}
              className="group relative flex flex-col gap-6 bg-bg p-8 md:p-10"
            >
              <div className="flex items-center justify-between">
                <Stars n={rev.rating} />
                <span className="mono text-[9px] tracking-[0.3em] text-fg-muted">
                  / 0{i + 1}
                </span>
              </div>
              <p className="text-base leading-relaxed text-fg-strong">
                &ldquo;{rev.text}&rdquo;
              </p>
              <div className="mt-auto flex items-end justify-between border-t border-line-strong pt-5">
                <div>
                  <div className="display text-xl tracking-tight">{rev.name}</div>
                  <div className="mono mt-1 text-[10px] tracking-[0.2em] text-fg-muted">
                    {rev.when.toUpperCase()}
                  </div>
                </div>
                <span
                  className="mono text-fg-dim transition-colors group-hover:text-accent"
                  aria-hidden
                >
                  ★
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={r.googleUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 border border-line-strong px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-fg transition-colors hover:border-accent hover:text-accent"
          >
            Alle 33 reviews bekijken
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
