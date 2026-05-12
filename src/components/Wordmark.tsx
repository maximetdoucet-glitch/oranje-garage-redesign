/**
 * Wordmark — v1 charcoal/red/Bebas Neue, restored.
 * Red square + display name lockup.
 */
export default function Wordmark({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { box: "h-4 w-4", text: "text-lg" },
    md: { box: "h-5 w-5", text: "text-xl" },
    lg: { box: "h-7 w-7", text: "text-3xl" },
  } as const;
  const s = sizes[size];
  return (
    <a href="/" className="flex items-center gap-3 leading-none">
      <span
        className={`inline-block ${s.box} rounded-sm bg-accent`}
        aria-hidden
      />
      <span className={`display ${s.text} tracking-wider`}>
        ORANJE GARAGE
      </span>
    </a>
  );
}
