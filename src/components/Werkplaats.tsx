import { SHOP } from "@/config/shop";

export default function Werkplaats() {
  const w = SHOP.werkplaats;
  return (
    <section id="werkplaats" className="border-b border-border bg-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mono mb-4 flex items-center gap-3 text-[11px] tracking-[0.25em] text-fg-muted">
              <span className="inline-block h-px w-10 bg-accent-red" />
              {w.eyebrow}
            </div>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              {w.headlineLines[0]}
              <br />
              <span className="text-accent-red">{w.headlineLines[1]}</span>
            </h2>
          </div>
          <p className="max-w-md text-fg-muted">{w.intro}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-sm border border-border md:aspect-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={w.images[0]}
              alt="Werkplaats interieur"
              className="h-full w-full object-cover grayscale contrast-110 transition-transform duration-700 hover:scale-105"
            />
          </div>
          {w.images.slice(1).map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-sm border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover grayscale contrast-110 transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
          {w.team.map((p, i) => (
            <div key={p.name} className="bg-bg p-8">
              <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">· 0{i + 1} ·</div>
              <h3 className="display mt-6 text-3xl">{p.name}</h3>
              <p className="mt-2 text-sm text-fg-muted">{p.role}</p>
              <div className="mono mt-6 text-[11px] tracking-[0.2em] text-accent-red">
                {p.years.toUpperCase()} · ERVARING
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
