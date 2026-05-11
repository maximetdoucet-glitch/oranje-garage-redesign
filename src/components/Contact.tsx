import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const c = SHOP.contact;
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-line bg-bg-soft"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="06"
          eyebrow="CONTACT · BEZOEK ONS"
          line1={c.headlineLines[0]}
          line2={c.headlineLines[1]}
        />

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left col */}
          <div className="space-y-12 lg:col-span-5">
            <div>
              <div className="mono mb-3 text-[10px] tracking-[0.3em] text-fg-muted">
                / ADRES
              </div>
              <div className="display text-3xl tracking-tight">
                {c.address.line1}
              </div>
              <div className="display text-3xl tracking-tight text-fg-muted">
                {c.address.line2}
              </div>
              <a
                href={c.mapsUrl}
                target="_blank"
                rel="noopener"
                className="mono mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.25em] text-accent underline-offset-4 hover:underline"
              >
                ROUTE OPENEN <span aria-hidden>→</span>
              </a>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-2">
              <div className="bg-bg p-8">
                <div className="mono text-[10px] tracking-[0.3em] text-fg-muted">
                  / TELEFOON
                </div>
                <a
                  href={c.phoneHref}
                  className="display mt-4 block text-2xl tracking-tight hover:text-accent"
                >
                  {c.phoneDisplay}
                </a>
              </div>
              <div className="bg-bg p-8">
                <div className="mono text-[10px] tracking-[0.3em] text-fg-muted">
                  / WHATSAPP
                </div>
                <a
                  href={c.whatsappHref}
                  className="display mt-4 block text-2xl tracking-tight hover:text-accent"
                >
                  Direct bericht →
                </a>
              </div>
              <div className="bg-bg p-8 sm:col-span-2">
                <div className="mono text-[10px] tracking-[0.3em] text-fg-muted">
                  / E-MAIL
                </div>
                <a
                  href={`mailto:${c.email}`}
                  className="display mt-4 block text-xl tracking-tight hover:text-accent"
                >
                  {c.email}
                </a>
              </div>
            </div>

            <div>
              <div className="mono mb-5 text-[10px] tracking-[0.3em] text-fg-muted">
                / OPENINGSTIJDEN
              </div>
              <div className="border-l border-line-strong">
                {c.hours.map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-line-strong py-3 pl-5 pr-2 last:border-b-0"
                  >
                    <span className="text-sm text-fg-body">{day}</span>
                    <span
                      className="mono text-sm tracking-wide"
                      style={
                        hours === "Gesloten"
                          ? { color: "var(--fg-dim)" }
                          : undefined
                      }
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right col — map */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square overflow-hidden border border-line-strong lg:aspect-auto lg:h-full">
              <iframe
                title="Locatie"
                src={c.osmEmbed}
                className="absolute inset-0 h-full w-full"
                style={{
                  filter:
                    "invert(0.94) hue-rotate(180deg) grayscale(1) contrast(1.15)",
                }}
                loading="lazy"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 border border-line-strong bg-bg/90 p-6 backdrop-blur-md md:max-w-sm">
                <div className="mono mb-3 flex items-center gap-3 text-[10px] tracking-[0.3em] text-fg-muted">
                  <span className="stripe-sig" aria-hidden>
                    <span />
                  </span>
                  · COÖRDINATEN ·
                </div>
                <div className="display text-2xl tracking-tight">
                  {c.coordinates}
                </div>
                <div
                  className="mono mt-3 text-[10px] tracking-[0.25em]"
                  style={{ color: "var(--accent)" }}
                >
                  {c.parkingNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
