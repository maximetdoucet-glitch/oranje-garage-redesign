import Link from "next/link";

/**
 * PreviewSection — visual funnel block.
 * Big photo on one side, title + copy + CTA on the other.
 * Used on the homepage to tease and link to each deep page.
 *
 *   <PreviewSection
 *     eyebrow="01 / DIENSTEN"
 *     title="Acht diensten."
 *     titleAccent="Eén werkplaats."
 *     copy="..."
 *     ctaLabel="Bekijk alle diensten"
 *     ctaHref="/diensten"
 *     image="..."
 *     reverse={false}
 *   />
 */
export default function PreviewSection({
  eyebrow,
  title,
  titleAccent,
  copy,
  ctaLabel,
  ctaHref,
  image,
  imageAlt = "",
  reverse = false,
  bg = "bg",
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  bg?: "bg" | "bg-elevated";
}) {
  return (
    <section
      className={`relative overflow-hidden border-b border-border ${
        bg === "bg-elevated" ? "bg-bg-elevated" : "bg-bg"
      }`}
    >
      <div
        className={`mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32 ${
          reverse ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Photo */}
        <div className="md:col-span-7 md:[direction:ltr]">
          <div className="img-hover relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={imageAlt}
              className="h-full w-full object-cover grayscale-[15%] contrast-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </div>

        {/* Copy */}
        <div className="md:col-span-5 md:[direction:ltr]">
          <div className="label flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden />
            {eyebrow}
          </div>
          <h2 className="display mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-accent">{titleAccent}</span>
              </>
            )}
          </h2>
          <p className="mt-7 text-base leading-relaxed text-fg-muted md:text-lg">
            {copy}
          </p>
          <Link
            href={ctaHref}
            className="group mt-10 inline-flex items-center gap-3 border-b border-fg pb-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
          >
            {ctaLabel}
            <span aria-hidden className="cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
