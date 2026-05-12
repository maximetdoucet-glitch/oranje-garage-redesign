import { SHOP } from "@/config/shop";

/**
 * Editorial stats band — replaces the marquee gimmick.
 * Single line of restrained numerical proof.
 */
export default function Stats() {
  return (
    <section className="relative border-y border-line bg-bg-soft">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-x-10">
          {SHOP.stats.map((s) => (
            <div key={s.label}>
              <div
                className="serif text-[clamp(3rem,4.5vw,4.5rem)] leading-[0.95] tracking-[-0.02em]"
                dangerouslySetInnerHTML={{ __html: s.num }}
              />
              <div
                className="label mt-4"
                dangerouslySetInnerHTML={{ __html: s.label }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
