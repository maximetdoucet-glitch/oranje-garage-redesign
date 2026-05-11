import { SHOP } from "@/config/shop";

function Stars({ n }: { n: number }) {
  return (
    <div className="mono flex gap-0.5 text-sm" aria-label={`${n} sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "text-accent-red" : "text-border"}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const r = SHOP.reviews;
  return (
    <section id="reviews" className="border-b border-border bg-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mono mb-4 flex items-center gap-3 text-[11px] tracking-[0.25em] text-fg-muted">
              <span className="inline-block h-px w-10 bg-accent-red" />
              {r.eyebrow}
            </div>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              {r.headlineLines[0]}
              <br />
              <span className="text-accent-red">{r.headlineLines[1]}</span>
            </h2>
          </div>
          <a
            href={r.googleUrl}
            target="_blank"
            rel="noopener"
            className="mono text-[11px] tracking-[0.2em] text-fg-muted underline-offset-4 hover:text-fg hover:underline"
          >
            ALLE REVIEWS OP GOOGLE →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
          {r.items.map((rev) => (
            <article key={rev.name} className="flex flex-col gap-5 bg-bg p-7">
              <Stars n={rev.rating} />
              <p className="text-sm leading-relaxed text-fg">&ldquo;{rev.text}&rdquo;</p>
              <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
                <div className="display text-xl">{rev.name}</div>
                <div className="mono text-[10px] tracking-[0.2em] text-fg-muted">
                  {rev.when.toUpperCase()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
