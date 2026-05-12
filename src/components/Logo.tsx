/**
 * Logo — custom SVG circular badge in classic auto-brand tradition
 * (Porsche crest / Volvo iron mark territory).
 *
 *  - Outer ring + inner hairline ring
 *  - Curved top text: "ORANJE GARAGE"
 *  - Curved bottom text: "VAN DER PEIJL · NIJMEGEN"
 *  - Center: bold "OG" monogram with a single red diagonal accent
 *    (echoes Volvo's iron-mark arrow, without copying it)
 *
 * Renders crisply at any size; size = px diameter.
 */
export default function Logo({
  size = 56,
  className = "",
  /** When true, swap text color to bg (for placement on light surfaces — not used yet) */
  inverted = false,
}: {
  size?: number;
  className?: string;
  inverted?: boolean;
}) {
  const fg = inverted ? "var(--bg)" : "var(--fg)";
  const accent = "var(--accent)";
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Oranje Garage Van der Peijl"
    >
      {/* Outer ring */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke={accent}
        strokeWidth="1.2"
      />
      {/* Inner hairline ring */}
      <circle
        cx="50"
        cy="50"
        r="41.5"
        fill="none"
        stroke={fg}
        strokeOpacity="0.4"
        strokeWidth="0.4"
      />

      {/* Curved paths for the orbital text */}
      <defs>
        <path
          id="og-top"
          d="M 12 50 A 38 38 0 0 1 88 50"
          fill="none"
        />
        <path
          id="og-bot"
          d="M 16 56 A 34 34 0 0 0 84 56"
          fill="none"
        />
      </defs>

      {/* Top curve: ORANJE GARAGE */}
      <text
        fill={fg}
        style={{
          fontFamily: "var(--font-bebas), Impact, sans-serif",
          fontSize: 10,
          letterSpacing: 3,
        }}
      >
        <textPath href="#og-top" startOffset="50%" textAnchor="middle">
          ORANJE GARAGE
        </textPath>
      </text>

      {/* Bottom curve: VAN DER PEIJL · NIJMEGEN */}
      <text
        fill={fg}
        fillOpacity="0.6"
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 4.6,
          letterSpacing: 1.4,
        }}
      >
        <textPath href="#og-bot" startOffset="50%" textAnchor="middle">
          VAN DER PEIJL · NIJMEGEN
        </textPath>
      </text>

      {/* Center monogram: OG */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fill={fg}
        style={{
          fontFamily: "var(--font-bebas), Impact, sans-serif",
          fontSize: 30,
          letterSpacing: 0.5,
        }}
      >
        OG
      </text>

      {/* Diagonal red accent line — echoes Volvo iron-mark arrow */}
      <line
        x1="60"
        y1="28"
        x2="73"
        y2="28"
        stroke={accent}
        strokeWidth="1.8"
        strokeLinecap="square"
      />
      <polygon
        points="73,28 70.5,26 70.5,30"
        fill={accent}
      />

      {/* Side hairline tick marks (decorative — like real auto badges) */}
      <line x1="3" y1="50" x2="6" y2="50" stroke={fg} strokeOpacity="0.4" strokeWidth="0.5" />
      <line x1="94" y1="50" x2="97" y2="50" stroke={fg} strokeOpacity="0.4" strokeWidth="0.5" />
    </svg>
  );
}
