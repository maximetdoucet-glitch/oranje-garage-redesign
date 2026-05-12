/**
 * Wordmark — serif italic editorial treatment.
 *
 *   Oranje Garage                    (serif)
 *   VAN DER PEIJL · NIJMEGEN         (small caps label)
 */
export default function Wordmark({
  size = "md",
  inverted = false,
}: {
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}) {
  const sizes = {
    sm: { l1: "text-lg", l2: "text-[9px]" },
    md: { l1: "text-2xl", l2: "text-[10px]" },
    lg: { l1: "text-4xl md:text-5xl", l2: "text-[11px]" },
  } as const;
  const s = sizes[size];
  return (
    <div className="leading-none">
      <div
        className={`serif-italic ${s.l1}`}
        style={{ color: inverted ? "var(--bg)" : "var(--fg)" }}
      >
        Oranje Garage
      </div>
      <div
        className={`mt-2 ${s.l2}`}
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 500,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: inverted ? "rgba(245,243,238,0.6)" : "var(--fg-muted)",
        }}
      >
        van der Peijl · Nijmegen
      </div>
    </div>
  );
}
