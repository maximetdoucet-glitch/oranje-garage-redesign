import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section id="diensten" className="relative overflow-hidden border-b border-line bg-bg">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="01"
          eyebrow="DIENSTEN · ALLES VOLVO"
          line1="Acht diensten."
          line2="Eén specialisme."
          aside="Wij focussen alleen op Volvo. Dat betekent: dealer-diagnose, originele OE-onderdelen, en monteurs die uw model uit hun hoofd kennen."
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-2 lg:grid-cols-4">
          {SHOP.services.map((s) => (
            <a
              key={s.code}
              href="#boek"
              className="group lift relative flex aspect-[4/5] flex-col justify-between bg-bg p-7 transition-colors hover:bg-bg-elevated"
            >
              <div className="flex items-start justify-between">
                <span className="mono text-[10px] tracking-[0.3em] text-fg-muted">
                  / {s.code}
                </span>
                <span className="mono text-[10px] tracking-[0.2em] text-fg-muted">
                  {s.from === "—" ? "OFFERTE" : `€${s.from}+`}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1] tracking-tight">
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed text-fg-body">
                  {s.desc}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-line-strong pt-5">
                <span className="mono text-[10px] tracking-[0.25em] text-fg-muted transition-colors group-hover:text-accent">
                  BOEKEN
                </span>
                <span
                  className="mono text-fg-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden
                >
                  →
                </span>
              </div>

              {/* Animated bottom stripe on hover */}
              <span
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
