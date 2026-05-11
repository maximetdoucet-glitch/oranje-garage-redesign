import { SHOP } from "@/config/shop";

export default function Stats() {
  return (
    <section className="border-b border-border bg-bg-elevated">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-12 px-6 py-20 md:grid-cols-4 md:px-10">
        {SHOP.stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div
              className="display text-[clamp(3.5rem,6vw,5.5rem)] leading-none"
              dangerouslySetInnerHTML={{ __html: s.num }}
            />
            <div
              className="mono mt-3 text-[10px] tracking-[0.25em] text-fg-muted"
              dangerouslySetInnerHTML={{ __html: s.label }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
