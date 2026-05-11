import { SHOP } from "@/config/shop";
import Marquee from "./Marquee";

export default function Stats() {
  // Pull volvo models from the hero ticker config
  const models = SHOP.hero.ticker.split(" · ");

  return (
    <>
      {/* Marquee band — Volvo models */}
      <section className="border-y border-line bg-bg py-14">
        <Marquee items={models} speed={45} />
      </section>

      {/* Stats grid */}
      <section className="border-b border-line bg-bg">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid grid-cols-2 gap-px overflow-hidden bg-line md:grid-cols-4">
            {SHOP.stats.map((s, i) => (
              <div
                key={s.label}
                className="group relative bg-bg p-8 md:p-10"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="mono text-[10px] tracking-[0.3em] text-fg-muted"
                  dangerouslySetInnerHTML={{ __html: s.label }}
                />
                <div
                  className="display mt-6 text-[clamp(3rem,5vw,4.5rem)] leading-none tracking-tight"
                  dangerouslySetInnerHTML={{ __html: s.num }}
                />
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full"
                  aria-hidden
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
