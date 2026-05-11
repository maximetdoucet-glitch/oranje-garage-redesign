import { SHOP } from "@/config/shop";

export default function Contact() {
  const c = SHOP.contact;
  return (
    <section id="contact" className="border-b border-border bg-bg">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <div className="mono mb-4 flex items-center gap-3 text-[11px] tracking-[0.25em] text-fg-muted">
              <span className="inline-block h-px w-10 bg-accent-red" />
              {c.eyebrow}
            </div>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              {c.headlineLines[0]}
              <br />
              <span className="text-accent-red">{c.headlineLines[1]}</span>
            </h2>

            <div className="mt-12 space-y-10">
              <div>
                <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">ADRES</div>
                <div className="display mt-3 text-3xl">{c.address.line1}</div>
                <div className="display text-3xl text-fg-muted">{c.address.line2}</div>
                <a
                  href={c.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="mono mt-3 inline-block text-[11px] tracking-[0.2em] text-accent-red underline-offset-4 hover:underline"
                >
                  ROUTE OPENEN →
                </a>
              </div>

              <div>
                <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">TELEFOON · WHATSAPP</div>
                <a href={c.phoneHref} className="display mt-3 block text-3xl hover:text-accent-red">
                  {c.phoneDisplay}
                </a>
                <a
                  href={c.whatsappHref}
                  className="mono mt-2 inline-block text-[11px] tracking-[0.2em] text-fg-muted hover:text-fg"
                >
                  · WHATSAPP DIRECT BERICHT →
                </a>
              </div>

              <div>
                <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">E-MAIL</div>
                <a href={`mailto:${c.email}`} className="display mt-3 block text-2xl hover:text-accent-red">
                  {c.email}
                </a>
              </div>

              <div>
                <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">OPENINGSTIJDEN</div>
                <div className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
                  {c.hours.map(([day, hours]) => (
                    <div key={day} className="contents">
                      <div className="text-fg-muted">{day}</div>
                      <div className="mono text-right">{hours}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-sm border border-border lg:aspect-auto">
            <iframe
              title="Locatie"
              src={c.osmEmbed}
              className="absolute inset-0 h-full w-full"
              style={{ filter: "invert(0.92) hue-rotate(180deg) grayscale(1) contrast(1.1)" }}
              loading="lazy"
            />
            <div className="pointer-events-none absolute bottom-6 left-6 right-6 rounded-sm border border-border bg-bg/85 p-5 backdrop-blur">
              <div className="mono text-[10px] tracking-[0.25em] text-fg-muted">· COÖRDINATEN ·</div>
              <div className="display mt-2 text-xl">{c.coordinates}</div>
              <div className="mono mt-2 text-[10px] tracking-[0.2em] text-accent-red">{c.parkingNote}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
