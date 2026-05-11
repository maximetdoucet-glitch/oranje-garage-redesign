import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Werkplaats() {
  const w = SHOP.werkplaats;
  return (
    <section
      id="werkplaats"
      className="relative overflow-hidden border-b border-line bg-bg-soft"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="02"
          eyebrow="WERKPLAATS · HET TEAM"
          line1={w.headlineLines[0]}
          line2={w.headlineLines[1]}
          aside={w.intro}
        />

        {/* Editorial gallery — asymmetric layout */}
        <div className="mt-20 grid grid-cols-12 gap-3 md:gap-4">
          <div className="col-span-12 md:col-span-7 md:row-span-2">
            <figure className="relative aspect-[5/4] overflow-hidden border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.images[0]}
                alt="Werkplaats interieur"
                className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 hover:scale-[1.03] hover:grayscale-0"
              />
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <span className="mono bg-bg/80 px-3 py-1.5 text-[10px] tracking-[0.3em] text-fg backdrop-blur">
                  · WERKPLAATS · NIJMEGEN-OOST
                </span>
                <span className="stripe-sig" aria-hidden>
                  <span />
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="col-span-6 md:col-span-5">
            <div className="aspect-square overflow-hidden border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.images[1]}
                alt=""
                className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 hover:scale-[1.05] hover:grayscale-0"
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-5">
            <div className="aspect-square overflow-hidden border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.images[2]}
                alt=""
                className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 hover:scale-[1.05] hover:grayscale-0"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="aspect-[16/9] overflow-hidden border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.images[3]}
                alt=""
                className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 hover:scale-[1.05] hover:grayscale-0"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="aspect-[16/9] overflow-hidden border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={w.images[4]}
                alt=""
                className="h-full w-full object-cover grayscale contrast-125 transition-all duration-700 hover:scale-[1.05] hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        {/* Team cards */}
        <div className="mt-24">
          <div className="mono mb-6 flex items-center gap-3 text-[10px] tracking-[0.3em] text-fg-muted">
            <span className="stripe-sig" aria-hidden>
              <span />
            </span>
            · MONTEURS ·
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden bg-line md:grid-cols-3">
            {w.team.map((p, i) => (
              <div key={p.name} className="group bg-bg p-10">
                <div className="mono flex items-center justify-between text-[10px] tracking-[0.3em] text-fg-muted">
                  <span>/ 0{i + 1}</span>
                  <span
                    className="text-accent"
                    style={{ color: "var(--accent)" }}
                  >
                    {p.years.toUpperCase()}
                  </span>
                </div>
                <h3 className="display mt-12 text-3xl md:text-4xl tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-fg-body">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
