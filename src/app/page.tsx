import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PreviewSection from "@/components/PreviewSection";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      {/* DIENSTEN preview */}
      <PreviewSection
        eyebrow="01 / DIENSTEN"
        title="Acht diensten."
        titleAccent="Eén specialisme."
        copy="APK, onderhoud, reparatie, distributieriem, restauratie — alles voor Volvo, vakkundig uitgevoerd met originele OE-onderdelen en dealer-diagnose-apparatuur."
        ctaLabel="Bekijk alle diensten"
        ctaHref="/diensten"
        image="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Volvo onder de brug"
      />

      {/* APK preview — reverse layout */}
      <PreviewSection
        eyebrow="02 / APK VOLVO"
        title="APK"
        titleAccent="vanaf €55."
        copy="RDW-erkende keurmeester gespecialiseerd in alle Volvo-modellen. Klaar binnen 60 minuten, hertest gratis. Boek online een tijd die u uitkomt."
        ctaLabel="Plan APK Volvo"
        ctaHref="/apk"
        image="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1600&q=80"
        imageAlt="APK diagnose"
        reverse
        bg="bg-elevated"
      />

      {/* WERKPLAATS preview */}
      <PreviewSection
        eyebrow="03 / WERKPLAATS"
        title="Wie er aan"
        titleAccent="uw Volvo werkt."
        copy="Geen anonieme garage. Drie ervaren monteurs, een gezamenlijk verleden van 50+ jaar in Volvo. U weet wie uw sleutel pakt."
        ctaLabel="Maak kennis met het team"
        ctaHref="/werkplaats"
        image="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Monteur aan het werk"
      />

      {/* REVIEWS preview */}
      <PreviewSection
        eyebrow="04 / WAT KLANTEN ZEGGEN"
        title="100% aanbeveling."
        titleAccent="33 reviews."
        copy="“Bij Volvo-dealer wilden ze €2400 voor een reparatie. Hier €890 — zelfde originele onderdelen. Mijn nieuwe vaste garage.” — Linda V."
        ctaLabel="Lees alle reviews"
        ctaHref="/reviews"
        image="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Volvo werkplaats"
        reverse
        bg="bg-elevated"
      />

      {/* Booking */}
      <Booking />

      {/* Contact */}
      <Contact />
    </>
  );
}
