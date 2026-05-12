import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Reviews() {
  const r = SHOP.reviews;
  // Take 3 featured + show all in compact list below if needed
  const featured = r.items.slice(0, 3);
  return (
    <section id="reviews" className="bg-bg-soft">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="04"
          eyebrow="Reviews"
          line1={r.headlineLines[0]}
          line2={r.headlineLines[1]}
          aside="Wij doen geen reclame. Onze klanten doen dat voor ons — al jaren, op elk platform waar wij genoemd worden."
        />

        {/* Featured pull-quotes */}
        <div className="mt-24 grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-3">
          {featured.map((rev, i) => (
            <figure key={rev.name} className="border-t border-line-strong pt-8">
              <div className="label">— 0{i + 1}</div>
              <blockquote
                className="serif-italic mt-8 text-2xl leading-[1.25] tracking-[-0.015em] md:text-[1.65rem]"
                style={{ color: "var(--fg-strong)" }}
              >
                &ldquo;{rev.text}&rdquo;
              </blockquote>
              <figcaption className="mt-10">
                <div className="serif text-xl">{rev.name}</div>
                <div className="label mt-2">{rev.when}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA to all reviews */}
        <div className="mt-24 flex justify-center">
          <a
            href={r.googleUrl}
            target="_blank"
            rel="noopener"
            className="tlink text-sm"
          >
            Alle 33 reviews bekijken <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
