/**
 * Wordmark
 * ─────────────────────────────────────────────
 * Treats "ORANJE GARAGE VAN DER PEIJL" as a proper
 * two-line lockup with a stripe signature.
 *
 *   ┃ ORANJE GARAGE
 *   ┃ VAN DER PEIJL · NIJMEGEN
 *   stripe
 */
export default function Wordmark({
  size = "md",
  showSubtitle = true,
}: {
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
}) {
  const sizes = {
    sm: { line1: "text-[11px]", line2: "text-[10px]" },
    md: { line1: "text-[13px]", line2: "text-[10px]" },
    lg: { line1: "text-[16px]", line2: "text-[11px]" },
  } as const;
  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <span className="stripe-sig-v shrink-0" aria-hidden>
        <span />
      </span>
      <div className="leading-none">
        <div className={`display ${s.line1} tracking-[0.18em] text-fg`}>
          ORANJE GARAGE
        </div>
        {showSubtitle && (
          <div
            className={`mono ${s.line2} mt-1.5 tracking-[0.3em] text-fg-muted`}
          >
            VAN DER PEIJL · NIJMEGEN
          </div>
        )}
      </div>
    </div>
  );
}
