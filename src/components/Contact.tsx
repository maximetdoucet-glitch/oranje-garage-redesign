import { SHOP } from "@/config/shop";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const c = SHOP.contact;
  return (
    <section id="contact" className="bg-bg-soft">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <SectionHeader
          number="06"
          eyebrow="Contact · Bezoek ons"
          line1={c.headlineLines[0]}
          line2={c.headlineLines[1]}
        />

        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left col: info */}
          <div className="space-y-16 lg:col-span-5">
            <div className="border-t border-line-strong pt-8">
              <div className="label">— Adres</div>
              <div className="serif mt-6 text-3xl tracking-[-0.02em]">
                {c.address.line1}
              </div>
              <div className="serif text-3xl text-fg-muted tracking-[-0.02em]">
                {c.address.line2}
              </div>
              <a
                href={c.mapsUrl}
                target="_blank"
                rel="noopener"
                className="tlink mt-6 inline-flex text-sm"
                style={{ color: "var(--accent)" }}
              >
                Route openen <span aria-hidden>→</span>
              </a>
            </div>

            <div className="border-t border-line-strong pt-8">
              <div className="label">— Telefoon & WhatsApp</div>
              <a
                href={c.phoneHref}
                className="serif mt-6 block text-3xl tracking-[-0.02em] hover:text-accent"
              >
                {c.phoneDisplay}
              </a>
              <a
                href={c.whatsappHref}
                className="tlink tlink--rev mt-3 inline-flex text-sm"
              >
                WhatsApp direct bericht <span aria-hidden>→</span>
              </a>
            </div>

            <div className="border-t border-line-strong pt-8">
              <div className="label">— E-mail</div>
              <a
                href={`mailto:${c.email}`}
                className="serif mt-6 block text-2xl tracking-[-0.02em] hover:text-accent"
              >
                {c.email}
              </a>
            </div>

            <div className="border-t border-line-strong pt-8">
              <div className="label">— Openingstijden</div>
              <dl className="mt-6">
                {c.hours.map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex items-baseline justify-between border-b border-line py-3 last:border-b-0"
                  >
                    <dt className="text-base text-fg-body">{day}</dt>
                    <dd
                      className="text-base"
                      style={
                        hours === "Gesloten"
                          ? { color: "var(--fg-dim)" }
                          : { color: "var(--fg)" }
                      }
                    >
                      {hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right col: map (kept light treatment) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-square overflow-hidden border border-line-strong lg:aspect-auto lg:h-full lg:min-h-[640px]">
              <iframe
                title="Locatie"
                src={c.osmEmbed}
                className="absolute inset-0 h-full w-full"
                style={{ filter: "grayscale(0.9) contrast(0.95) sepia(0.06)" }}
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-bg/95 p-6 backdrop-blur-md md:max-w-sm">
                <div className="label">— Coördinaten</div>
                <div className="serif-italic mt-3 text-2xl tracking-[-0.02em]">
                  {c.coordinates}
                </div>
                <div
                  className="label mt-3"
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
