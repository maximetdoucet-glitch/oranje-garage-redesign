export default function Marquee({
  items,
  speed = 40,
}: {
  items: string[];
  speed?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" style={{ display: "block", overflow: "hidden" }}>
      <div
        className="marquee-track"
        style={{
          display: "flex",
          width: "max-content",
          gap: "3rem",
          animationDuration: `${speed}s`,
        }}
      >
        {doubled.map((text, i) => (
          <div
            key={`${text}-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3rem",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span className="display text-5xl md:text-6xl lg:text-7xl text-fg/90 tracking-tight">
              {text}
            </span>
            <span className="stripe-sig" aria-hidden>
              <span />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
