import Logo from "./Logo";

/**
 * Wordmark — premium lockup variants.
 *
 *   "compact"   → just the badge (used in nav)
 *   "inline"    → badge + 2-line wordmark to the right (used in nav alt)
 *   "stacked"   → badge above + wordmark below, centered (used in footer)
 */
export default function Wordmark({
  variant = "inline",
  size = "md",
}: {
  variant?: "compact" | "inline" | "stacked";
  size?: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: { logo: 36, l1: "text-sm",  l2: "text-[9px]" },
    md: { logo: 48, l1: "text-base", l2: "text-[10px]" },
    lg: { logo: 88, l1: "text-2xl",  l2: "text-[11px]" },
  } as const;
  const d = dimensions[size];

  if (variant === "compact") {
    return (
      <a href="/" aria-label="Oranje Garage Van der Peijl — home">
        <Logo size={d.logo} />
      </a>
    );
  }

  if (variant === "stacked") {
    return (
      <a href="/" className="flex flex-col items-center gap-4">
        <Logo size={d.logo} />
        <div className="text-center leading-none">
          <div className={`display ${d.l1} tracking-[0.22em]`}>
            ORANJE GARAGE
          </div>
          <div
            className={`mono mt-2 ${d.l2} tracking-[0.32em] text-fg-muted`}
          >
            VAN DER PEIJL
          </div>
        </div>
      </a>
    );
  }

  // inline (default)
  return (
    <a href="/" className="flex items-center gap-4 leading-none">
      <Logo size={d.logo} />
      <div className="leading-none">
        <div className={`display ${d.l1} tracking-[0.22em]`}>
          ORANJE GARAGE
        </div>
        <div className={`mono mt-2 ${d.l2} tracking-[0.32em] text-fg-muted`}>
          VAN DER PEIJL · NIJMEGEN
        </div>
      </div>
    </a>
  );
}
