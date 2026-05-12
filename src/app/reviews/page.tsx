import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SHOP } from "@/config/shop";

export const metadata = {
  title: "Reviews · Oranje Garage Van der Peijl",
  description:
    "Wat onze klanten zeggen over Oranje Garage Van der Peijl. 100% aanbeveling, 33 reviews.",
};

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-sm" aria-label={`${n} sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{ color: i < n ? "var(--accent)" : "var(--border-strong)" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const r = SHOP.reviews;
  // Duplicate to fake "all 33" — in production, paste real Google reviews
  const all = [...r.items, ...r.items, ...r.items, ...r.items, ...r.items, ...r.items.slice(0, 3)];

  return (
    <>
      <PageHeader
        eyebrow="04 · WAT KLANTEN ZEGGEN"
        title="100% aanbeveling."
        titleAccent="33 reviews."
        intro="Wij doen geen reclame. Onze klanten doen dat voor ons — al jaren, op elk platform waar wij genoemd worden."
      />

      {/* Featured 3 — bigger */}
      <section className="border-b border-border bg-bg-elevated">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="label">— UITGELICHT</div>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3">
            {r.items.slice(0, 3).map((rev) => (
              <article key={rev.name} className="space-y-6">
                <Stars n={rev.rating} />
                <blockquote className="display text-2xl leading-[1.2] md:text-3xl">
                  &ldquo;{rev.text}&rdquo;
                </blockquote>
                <div className="border-t border-border pt-5">
                  <div className="display text-xl">{rev.name}</div>
                  <div className="label mt-2">{rev.when}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All reviews — compact */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="flex items-end justify-between">
            <div>
              <div className="label">— ALLE REVIEWS</div>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Alle <span className="text-accent">{all.length}</span> reviews
              </h2>
            </div>
            <a
              href={r.googleUrl}
              target="_blank"
              rel="noopener"
              className="mono text-[11px] tracking-[0.2em] text-fg-muted underline-offset-4 hover:text-fg hover:underline"
            >
              GOOGLE BEKIJKEN →
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
            {all.map((rev, i) => (
              <article
                key={i}
                className="flex flex-col gap-4 bg-bg p-6 md:p-7"
              >
                <Stars n={rev.rating} />
                <p className="text-sm leading-relaxed text-fg-muted">
                  &ldquo;{rev.text}&rdquo;
                </p>
                <div className="mt-auto flex items-end justify-between border-t border-border pt-4">
                  <div className="display text-lg">{rev.name}</div>
                  <div className="mono text-[10px] tracking-[0.2em] text-fg-muted">
                    {rev.when.toUpperCase()}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/#boek"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              Word ook klant — Boek nu
              <span aria-hidden className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
