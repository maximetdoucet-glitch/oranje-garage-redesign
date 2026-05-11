/**
 * SectionHeader
 * ─────────────────────────────────
 * Consistent treatment across all sections:
 *  - section number (huge faded bg label)
 *  - stripe + eyebrow
 *  - 2-line display headline (line 2 oranje)
 *  - optional aside paragraph
 */
export default function SectionHeader({
  number,
  eyebrow,
  line1,
  line2,
  aside,
}: {
  number: string;
  eyebrow: string;
  line1: string;
  line2: string;
  aside?: string;
}) {
  return (
    <div className="relative">
      <div className="section-num -top-12 -left-4 md:-left-8" aria-hidden>
        {number}
      </div>
      <div className="relative z-[1] flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <div className="mono mb-6 flex items-center gap-3 text-[10px] tracking-[0.3em] text-fg-muted">
            <span className="stripe-sig" aria-hidden>
              <span />
            </span>
            {eyebrow}
          </div>
          <h2 className="display text-[clamp(2.75rem,7vw,6rem)] leading-[0.92]">
            {line1}
            <br />
            <span className="text-accent">{line2}</span>
          </h2>
        </div>
        {aside && (
          <p className="max-w-md text-fg-body leading-relaxed">{aside}</p>
        )}
      </div>
    </div>
  );
}
