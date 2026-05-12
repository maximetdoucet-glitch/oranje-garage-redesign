import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section id="diensten" className="bg-bg">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="01"
          eyebrow="Diensten"
          line1="Acht diensten."
          line2="Eén specialisme."
          aside="Wij focussen alleen op Volvo. Dealer-diagnose-apparatuur, originele OE-onderdelen, monteurs die uw model uit hun hoofd kennen."
        />

        <div className="mt-24 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {SHOP.services.map((s) => (
            <a
              key={s.code}
              href="#boek"
              className="group block border-t border-line-strong pt-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="label text-fg-muted">— {s.code}</span>
                <span className="label">
                  {s.from === "—" ? "Offerte" : `Vanaf €${s.from}`}
                </span>
              </div>
              <h3 className="serif mt-6 text-3xl leading-tight tracking-[-0.02em] transition-colors group-hover:text-accent md:text-4xl">
                {s.name}
              </h3>
              <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-fg-body">
                {s.desc}
              </p>
              <div className="mt-8 tlink tlink--rev text-sm">
                Boeken <span aria-hidden>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
