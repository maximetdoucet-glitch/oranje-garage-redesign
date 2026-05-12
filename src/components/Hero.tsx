import { SHOP } from "@/config/shop";
import Wordmark from "./Wordmark";

export default function Hero() {
  const h = SHOP.hero;
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-bg">
      {/* Top nav */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 pt-8 md:px-12 md:pt-10">
          <Wordmark size="md" />
          <nav className="hidden items-center gap-10 text-sm text-fg-body md:flex">
            {[
              ["Diensten", "#diensten"],
              ["Werkplaats", "#werkplaats"],
              ["Reviews", "#reviews"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="tlink tlink--rev">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#boek"
            className="tlink hidden md:inline-flex"
            style={{ color: "var(--accent)" }}
          >
            APK boeken
            <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* Hero content — two-column editorial */}
      <div className="mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-1 px-6 pt-32 md:grid-cols-12 md:gap-12 md:px-12 md:pt-40">
        {/* Left col: editorial text */}
        <div className="md:col-span-6 md:py-20">
          <div className="rise">
            <div className="label">— Volvo Specialist · Sinds 1998</div>
          </div>

          <h1
            className="rise serif mt-10 text-[clamp(3.5rem,8vw,8rem)] leading-[0.95] tracking-[-0.03em]"
            style={{ animationDelay: "0.1s" }}
          >
            Volvo verdient
            <br />
            een{" "}
            <span className="serif-italic" style={{ color: "var(--accent)" }}>
              specialist.
            </span>
            <br />
            Niet een dealer.
          </h1>

          <p
            className="rise mt-10 max-w-md text-lg font-light leading-relaxed text-fg-body"
            style={{ animationDelay: "0.2s" }}
          >
            Onafhankelijk Volvo-specialist in Nijmegen-Oost. Originele
            Volvo-onderdelen, dealer-kwaliteit, zonder dealer-prijzen.
            Klassieke 240 of moderne XC60 — wij kennen ze.
          </p>

          <div
            className="rise mt-12 flex flex-wrap items-center gap-8"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#boek"
              className="inline-flex items-center gap-3 bg-fg px-8 py-4 text-sm font-medium text-bg transition-all hover:bg-accent"
            >
              Onderhoud boeken
              <span aria-hidden>→</span>
            </a>
            <a href="tel:+31243231346" className="tlink text-sm">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              024 — 323 13 46
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="rise mt-20 grid max-w-md grid-cols-2 gap-y-6 border-t border-line-strong pt-8"
            style={{ animationDelay: "0.4s" }}
          >
            {h.trustBadges.map((b) => (
              <div key={b.k}>
                <div className="serif text-2xl">{b.k}</div>
                <div className="label mt-1">{b.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right col: dominant photo */}
        <div className="relative md:col-span-6">
          <div
            className="img-hover relative aspect-[3/4] w-full overflow-hidden md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:h-full md:w-[55vw]"
            style={{ animationDelay: "0.2s" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
              alt="Volvo werkplaats"
              className="h-full w-full object-cover"
            />
            {/* Caption overlay */}
            <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="bg-bg/90 px-4 py-2 backdrop-blur-sm">
                <div className="label">Werkplaats · Nijmegen-Oost</div>
                <div className="serif-italic mt-1 text-lg">51.83°N · 5.87°E</div>
              </div>
            </figcaption>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative z-10 border-t border-line bg-bg">
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 py-5 md:px-12">
          <div className="label">Maandag tot Vrijdag · 08:00 — 17:00</div>
          <div className="label hidden md:block">
            240 · 740 · 850 · S60 · V70 · XC60 · XC70 · XC90 · V40 · V90
          </div>
          <div
            className="label flex items-center gap-2"
            style={{ color: "var(--accent)" }}
          >
            <span
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: "var(--accent)" }}
            />
            OPEN
          </div>
        </div>
      </div>
    </section>
  );
}
