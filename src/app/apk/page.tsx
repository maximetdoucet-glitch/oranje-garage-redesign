import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SHOP } from "@/config/shop";

export const metadata = {
  title: "APK Volvo Nijmegen · €55 · Klaar binnen 60 min · Oranje Garage",
  description:
    "RDW-erkende APK keurmeester gespecialiseerd in Volvo. Klaar binnen 60 minuten, gratis hertest, online boeken.",
};

const FAQ = [
  {
    q: "Hoe lang duurt de APK?",
    a: "Gemiddeld 45–60 minuten. U kunt wachten in onze wachtruimte met koffie, of een afspraak inplannen waarbij u de auto inlevert en later ophaalt.",
  },
  {
    q: "Wat als mijn Volvo niet door de APK komt?",
    a: "Bij afkeuring krijgt u een duidelijke offerte voor de noodzakelijke reparaties. De hertest is altijd gratis — geen verrassingskosten.",
  },
  {
    q: "Welke Volvo's keuren jullie?",
    a: "Alle modellen, van klassieke 240 tot moderne hybride XC60. Onze monteurs zijn opgeleid op alle generaties.",
  },
  {
    q: "Moet ik vooraf reserveren?",
    a: "Aanbevolen. Boek online of bel 024 323 13 46 — meestal kunnen wij u dezelfde week inplannen.",
  },
  {
    q: "Wat kost de APK?",
    a: "€55 voor de standaard APK Lichte voertuigen. Dat is inclusief het RDW-keuringsrapport. Eventuele reparaties worden apart geoffreerd, altijd vooraf akkoord.",
  },
  {
    q: "Krijg ik een herinnering voor volgend jaar?",
    a: "Ja. Wij sturen automatisch een herinnering ~30 dagen voor de vervaldatum van uw APK.",
  },
];

export default function ApkPage() {
  return (
    <>
      <PageHeader
        eyebrow="02 · APK VOLVO NIJMEGEN"
        title="APK"
        titleAccent="vanaf €55."
        intro="RDW-erkende APK keurmeester, gespecialiseerd in alle Volvo-modellen. Klaar binnen 60 minuten. Gratis hertest. Online boeken in 2 minuten."
      />

      {/* Big visual */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-10">
          <div className="img-hover relative aspect-[21/9] overflow-hidden rounded-sm border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=2000&q=85"
              alt="APK keuring Volvo"
              className="h-full w-full object-cover grayscale-[15%]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,11,13,0.85) 0%, rgba(10,11,13,0.4) 50%, rgba(10,11,13,0.0) 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-xl">
                <div className="label flex items-center gap-3">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
                  PER VANDAAG NOG BESCHIKBAAR
                </div>
                <h2 className="display mt-5 text-4xl leading-[0.95] md:text-6xl">
                  Online boeken.
                  <br />
                  <span className="text-accent">Direct bevestiging.</span>
                </h2>
                <Link
                  href="/#boek"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
                >
                  Boek APK — €55
                  <span aria-hidden className="cta-arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border bg-bg-elevated">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="label flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-accent" />
            DE APK IN 4 STAPPEN
          </div>
          <h2 className="display mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
            Geen verrassingen.
            <br />
            <span className="text-accent">Punt.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-4">
            {[
              [
                "01",
                "Boek online",
                "Kies een tijd die u uitkomt — meestal binnen 1–2 dagen mogelijk.",
              ],
              [
                "02",
                "Wij keuren",
                "RDW-keurmeester loopt de checklist door — gemiddeld 45–60 minuten.",
              ],
              [
                "03",
                "U krijgt uitslag",
                "Geslaagd? Direct mee naar huis. Afgekeurd? Heldere offerte met foto's.",
              ],
              [
                "04",
                "Hertest gratis",
                "Na reparatie keuren wij gratis opnieuw. Geen verrassingskosten.",
              ],
            ].map(([num, title, desc]) => (
              <div key={num}>
                <div className="display text-7xl text-accent">{num}</div>
                <h3 className="display mt-6 text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="label flex items-center gap-3">
                <span className="inline-block h-px w-10 bg-accent" />
                VEELGESTELDE VRAGEN
              </div>
              <h2 className="display mt-6 text-[clamp(2.5rem,4vw,3.5rem)] leading-[0.95]">
                Vragen over de
                <br />
                <span className="text-accent">APK?</span>
              </h2>
              <p className="mt-6 text-sm text-fg-muted">
                Niet gevonden wat u zocht? Bel direct{" "}
                <a
                  href={SHOP.contact.phoneHref}
                  className="text-fg underline-offset-4 hover:underline"
                >
                  {SHOP.contact.phoneDisplay}
                </a>
                .
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="divide-y divide-border border-y border-border">
                {FAQ.map((f) => (
                  <details
                    key={f.q}
                    className="group py-6 cursor-pointer"
                  >
                    <summary className="flex items-start justify-between gap-6 marker:hidden list-none">
                      <span className="display text-xl md:text-2xl">{f.q}</span>
                      <span
                        className="display text-2xl transition-transform group-open:rotate-45"
                        style={{ color: "var(--accent)" }}
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link
              href="/#boek"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              Boek APK Volvo
              <span aria-hidden className="cta-arrow">→</span>
            </Link>
            <a
              href={SHOP.contact.phoneHref}
              className="inline-flex items-center gap-3 rounded-full border border-border-strong px-7 py-4 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
