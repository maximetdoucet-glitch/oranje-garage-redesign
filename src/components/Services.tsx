import { SHOP } from "@/config/shop";

export default function Services() {
  return (
    <section id="diensten" className="border-b border-border bg-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mono mb-4 flex items-center gap-3 text-[11px] tracking-[0.25em] text-fg-muted">
              <span className="inline-block h-px w-10 bg-accent-red" />
              · 01 · DIENSTEN
            </div>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              {SHOP.services.length} diensten.
              <br />
              <span className="text-accent-red">Eén werkplaats.</span>
            </h2>
          </div>
          <p className="max-w-md text-fg-muted">
            Van APK tot grote reparatie — alles onder één dak. Vaste prijsafspraak
            vóór we beginnen, geen meerwerk zonder akkoord.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SHOP.services.map((s) => (
            <a
              key={s.code}
              href="#boek"
              className="group relative flex flex-col justify-between bg-bg p-7 transition-colors hover:bg-bg-elevated"
            >
              <div className="flex items-start justify-between">
                <span className="mono text-[10px] tracking-[0.25em] text-fg-muted">{s.code}</span>
                <span className="mono text-[10px] tracking-[0.15em] text-fg-muted">
                  {s.from === "—" ? "OFFERTE" : `VANAF €${s.from}`}
                </span>
              </div>
              <div className="mt-12">
                <h3 className="display text-3xl tracking-wide">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{s.desc}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs text-fg-muted transition-colors group-hover:text-accent-red">
                <span>Boeken</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-accent-red transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
