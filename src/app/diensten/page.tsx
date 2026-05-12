import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SHOP } from "@/config/shop";

export const metadata = {
  title: "Diensten · Oranje Garage Van der Peijl",
  description:
    "Volledig overzicht van Volvo-diensten: APK, onderhoud, reparatie, distributieriem, restauratie en meer.",
};

const SERVICE_IMAGES: Record<string, string> = {
  "01": "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=80",
  "02": "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80",
  "03": "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80",
  "04": "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
  "05": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  "06": "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80",
  "07": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
  "08": "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
};

export default function DienstenPage() {
  return (
    <>
      <PageHeader
        eyebrow="01 · DIENSTEN"
        title="Acht diensten."
        titleAccent="Eén specialisme."
        intro="Wij focussen alleen op Volvo. Dat betekent dealer-diagnose-apparatuur, originele OE-onderdelen, en monteurs die uw model uit hun hoofd kennen — voor een prijs die geen dealer kan matchen."
      />

      <section className="border-b border-border bg-bg-elevated">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="space-y-20">
            {SHOP.services.map((s, i) => (
              <article
                key={s.code}
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16 ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="md:col-span-6 md:[direction:ltr]">
                  <div className="img-hover relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={SERVICE_IMAGES[s.code] ?? SERVICE_IMAGES["01"]}
                      alt={s.name}
                      className="h-full w-full object-cover grayscale-[15%]"
                    />
                  </div>
                </div>
                <div className="md:col-span-6 md:[direction:ltr]">
                  <div className="label flex items-center gap-3">
                    <span>{s.code}</span>
                    <span className="inline-block h-px w-6 bg-accent" />
                    <span style={{ color: "var(--accent)" }}>
                      {s.from === "—" ? "OFFERTE" : `VANAF €${s.from}`}
                    </span>
                  </div>
                  <h2 className="display mt-5 text-4xl md:text-6xl">{s.name}</h2>
                  <p className="mt-5 text-base leading-relaxed text-fg-muted md:text-lg">
                    {s.desc}
                  </p>
                  {s.bookable ? (
                    <Link
                      href="/#boek"
                      className="group mt-8 inline-flex items-center gap-3 border-b border-fg pb-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
                    >
                      Boek deze dienst
                      <span aria-hidden className="cta-arrow">→</span>
                    </Link>
                  ) : (
                    <a
                      href={SHOP.contact.phoneHref}
                      className="group mt-8 inline-flex items-center gap-3 border-b border-fg pb-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
                    >
                      Bel voor offerte
                      <span aria-hidden className="cta-arrow">→</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
