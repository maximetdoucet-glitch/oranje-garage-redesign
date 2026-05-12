import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Werkplaats() {
  const w = SHOP.werkplaats;
  return (
    <section id="werkplaats" className="bg-bg-soft">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="02"
          eyebrow="Werkplaats"
          line1={w.headlineLines[0]}
          line2={w.headlineLines[1]}
          aside={w.intro}
        />

        {/* Full-bleed primary image */}
        <div className="img-hover relative mt-20 aspect-[16/9] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={w.images[0]}
            alt="Werkplaats Oranje Garage"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-bg/90 px-5 py-3 backdrop-blur-sm">
            <div className="label">Werkplaats · Nijmegen-Oost</div>
            <div className="serif-italic mt-1 text-xl">
              Prof. Schrijnenstraat 2
            </div>
          </div>
        </div>

        {/* 4-image strip */}
        <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
          {w.images.slice(1).map((src, i) => (
            <div
              key={i}
              className="img-hover relative aspect-square overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Team — editorial cards */}
        <div className="mt-32">
          <div className="label mb-12">— Monteurs</div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3">
            {w.team.map((p, i) => (
              <div key={p.name} className="border-t border-line-strong pt-8">
                <div className="label">— 0{i + 1}</div>
                <h3 className="serif mt-6 text-3xl tracking-[-0.02em] md:text-4xl">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm font-light text-fg-body">{p.role}</p>
                <div
                  className="label mt-6"
                  style={{ color: "var(--accent)" }}
                >
                  {p.years} ervaring
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
