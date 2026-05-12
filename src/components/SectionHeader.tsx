/**
 * Section header — light editorial.
 * Eyebrow label + serif headline + optional aside.
 * No giant background numbers, no stripe gimmicks.
 */
export default function SectionHeader({
  number,
  eyebrow,
  line1,
  line2,
  italic2 = true,
  aside,
}: {
  number: string;
  eyebrow: string;
  line1: string;
  line2: string;
  italic2?: boolean;
  aside?: string;
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end md:gap-16">
      <div className="max-w-3xl">
        <div className="label flex items-center gap-3">
          <span className="text-fg-muted">— {number}</span>
          <span>{eyebrow}</span>
        </div>
        <h2 className="serif mt-8 text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.02] tracking-[-0.025em]">
          {line1}
          <br />
          <span
            className={italic2 ? "serif-italic" : "serif"}
            style={{ color: "var(--accent)" }}
          >
            {line2}
          </span>
        </h2>
      </div>
      {aside && (
        <p className="max-w-sm text-base font-light leading-relaxed text-fg-body md:text-right">
          {aside}
        </p>
      )}
    </div>
  );
}
