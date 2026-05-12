import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { SHOP } from "@/config/shop";

export const metadata = {
  title: "Werkplaats · Oranje Garage Van der Peijl",
  description:
    "Ontmoet het team. Drie Volvo-monteurs in Nijmegen-Oost, gezamenlijk 50+ jaar ervaring.",
};

export default function WerkplaatsPage() {
  const w = SHOP.werkplaats;
  return (
    <>
      <PageHeader
        eyebrow="03 · WERKPLAATS"
        title="Wie er aan"
        titleAccent="uw Volvo werkt."
        intro={w.intro}
      />

      {/* Big editorial photo */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="img-hover relative aspect-[16/9] overflow-hidden rounded-sm border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={w.images[0]}
              alt="Werkplaats Oranje Garage"
              className="h-full w-full object-cover grayscale-[10%]"
            />
            <div className="absolute bottom-5 left-5 rounded-sm bg-bg/90 px-4 py-2 backdrop-blur">
              <div className="label">· PROF. SCHRIJNENSTRAAT 2 · NIJMEGEN-OOST</div>
            </div>
          </div>

          {/* 4-image strip */}
          <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
            {w.images.slice(1).map((src, i) => (
              <div
                key={i}
                className="img-hover relative aspect-square overflow-hidden rounded-sm border border-border"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover grayscale-[15%]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-border bg-bg-elevated">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="label flex items-center gap-3">
                <span className="inline-block h-px w-10 bg-accent" />
                ONS VERHAAL
              </div>
              <h2 className="display mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
                Waarom alleen
                <br />
                <span className="text-accent">Volvo.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-fg-muted md:text-lg">
              <p>
                Toen wij begonnen waren wij een algemene garage — alle merken,
                alle modellen. Maar het werd duidelijk: een goede monteur kan
                niet alles. Een Volvo distributieriem zit anders dan die van een
                Renault. De diagnose-software is anders. De geometrie is anders.
              </p>
              <p>
                Dus kozen wij ervoor om ons volledig op één merk te richten. Wij
                hebben de officiële Volvo-diagnose (VIDA/DICE), wij werken
                uitsluitend met originele OE-onderdelen, en wij kennen elke 240
                uit 1989 net zo goed als de nieuwste XC60 hybride.
              </p>
              <p>
                Het resultaat: minder verrassingen, betere reparaties, en
                prijzen die geen dealer kan matchen. Onze klanten blijven jaren
                — vaak generaties — bij ons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-border bg-bg">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="label flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-accent" />
            HET TEAM
          </div>
          <h2 className="display mt-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]">
            Drie monteurs.
            <br />
            <span className="text-accent">50+ jaar ervaring.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
            {w.team.map((p, i) => (
              <div key={p.name} className="bg-bg p-10">
                <div className="label">· 0{i + 1} ·</div>
                <h3 className="display mt-8 text-4xl">{p.name}</h3>
                <p className="mt-3 text-sm text-fg-muted">{p.role}</p>
                <div
                  className="mono mt-8 text-[11px] tracking-[0.2em]"
                  style={{ color: "var(--accent)" }}
                >
                  {p.years.toUpperCase()} · ERVARING
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Link
              href="/#boek"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              Boek een afspraak
              <span aria-hidden className="cta-arrow">→</span>
            </Link>
            <Link
              href="/diensten"
              className="inline-flex items-center gap-3 rounded-full border border-border-strong px-7 py-4 text-sm text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Bekijk alle diensten
              <span aria-hidden className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
