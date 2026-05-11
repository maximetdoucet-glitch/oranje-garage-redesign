/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * SHOP CONFIG — ORANJE GARAGE VAN DER PEIJL · VOLVO SPECIALIST
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * Real data sources:
 *   - RDW Erkende bedrijven (volgnummer)
 *   - Bovag-lid (1 jaar garantie)
 *   - Bestaande site oranjegaragevanderpeijl.nl (Volvo-specialist positionering)
 *   - Tulimaps 33 reviews, 100% recommendation
 *
 * TODO before final pitch — fields to verify with the owner:
 *   - [TBD] Exacte oprichtingsjaar
 *   - [TBD] Naam eigenaar (Van der Peijl voornaam)
 *   - [TBD] Aantal monteurs + namen
 *   - [TBD] Werkelijke prijzen (huidige zijn marktstandaard schattingen)
 *   - [TBD] Echte review-tekst (huidige zijn plausibele invullingen)
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

export type Accent = "red" | "gold" | "blue";

export type Service = {
  code: string;
  name: string;
  from: string;
  desc: string;
  duration?: string;
  bookingPrice?: string;
  bookable?: boolean;
};

export type TeamMember = { name: string; role: string; years: string };

export type Review = { name: string; when: string; text: string; rating: number };

export type ProcessStep = { step: string; title: string; desc: string };

export type Stat = { num: string; label: string };

export type OpeningHours = Array<[day: string, hours: string]>;

export type ShopConfig = {
  brand: { name: string; accent: Accent; title: string; description: string };
  hero: {
    eyebrow: string;
    headlineLines: [string, string, string];
    sub: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    trustBadges: Array<{ k: string; v: string }>;
    image: string;
    statCard: { label: string; leftNum: string; leftLabel: string; rightNum: string; rightLabel: string };
    coordinates: string;
    ticker: string;
    openingShort: string;
  };
  stats: Stat[];
  services: Service[];
  werkplaats: { eyebrow: string; headlineLines: [string, string]; intro: string; images: string[]; team: TeamMember[] };
  transparency: {
    eyebrow: string;
    headlineLines: [string, string];
    intro: string;
    steps: ProcessStep[];
    guarantee: { label: string; title: string; desc: string; ctaLabel: string; ctaHref: string };
  };
  reviews: { eyebrow: string; headlineLines: [string, string]; googleUrl: string; items: Review[] };
  booking: { eyebrow: string; headlineLines: [string, string]; intro: string; bullets: string[]; dateLabel: string; times: string[] };
  contact: {
    eyebrow: string;
    headlineLines: [string, string];
    address: { line1: string; line2: string };
    mapsUrl: string;
    phoneDisplay: string;
    phoneHref: string;
    whatsappHref: string;
    email: string;
    hours: OpeningHours;
    coordinates: string;
    parkingNote: string;
    osmEmbed: string;
  };
  footer: { tagline: string; erkend: string[]; kvk: string };
};

export const SHOP: ShopConfig = {
  brand: {
    name: "ORANJE GARAGE VAN DER PEIJL",
    accent: "red",
    title: "Oranje Garage Van der Peijl · Volvo Specialist · Nijmegen",
    description:
      "Onafhankelijk Volvo-specialist in Nijmegen-Oost. Onderhoud, reparatie en restauratie met originele Volvo-onderdelen. BOVAG-erkend.",
  },
  hero: {
    eyebrow: "VOLVO SPECIALIST · NIJMEGEN-OOST · BOVAG-ERKEND",
    headlineLines: ["Volvo verdient", "een specialist.", "Niet een dealer."],
    sub: "Onafhankelijk Volvo-specialist in Nijmegen. Originele Volvo-onderdelen, dealer-kwaliteit, zonder dealer-prijzen. Klassieke 240 of moderne XC60 — wij kennen ze.",
    primaryCta: { label: "Onderhoud boeken", href: "#boek" },
    secondaryCta: { label: "024 — 323 13 46", href: "tel:+31243231346" },
    trustBadges: [
      { k: "VOLVO", v: "specialist" },
      { k: "BOVAG", v: "1 jr garantie" },
      { k: "RDW", v: "APK keurmeester" },
      { k: "★ 5.0", v: "33 reviews · 100%" },
    ],
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    statCard: {
      label: "· WERKPLAATS · LIVE",
      leftNum: "Volvo",
      leftLabel: "ENIGE FOCUS",
      rightNum: "100%",
      rightLabel: "AANBEVELING",
    },
    coordinates: "51.8298°N · 5.8753°E",
    ticker: "240 · 740 · 850 · S60 · V70 · XC60 · XC70 · XC90 · V40 · V90",
    openingShort: "OPEN · MA–VR 08:00–17:00",
  },
  stats: [
    { num: "Volvo", label: "ENIGE SPECIALISATIE" },
    { num: "100%", label: "AANBEVELING · 33 REVIEWS" },
    { num: "OE", label: "ORIGINELE VOLVO-ONDERDELEN" },
    { num: "1 jr", label: "BOVAG-GARANTIE" },
  ],
  services: [
    { code: "01", name: "APK Volvo", from: "55", desc: "RDW-erkend keurmeester · gespecialiseerd in alle Volvo-modellen · klaar binnen 60 min", duration: "60 min", bookable: true },
    { code: "02", name: "Volvo Onderhoud", from: "149", desc: "Klein/groot onderhoud volgens Volvo-schema · originele OE-onderdelen · modeljaar 1970–nu", duration: "halve dag", bookable: true },
    { code: "03", name: "Volvo Reparatie", from: "—", desc: "Motor, transmissie, koppeling, distributie · dealer-diagnose-apparatuur · vaste prijsafspraak" },
    { code: "04", name: "Diagnose & Uitlezen", from: "45", desc: "VIDA/DICE diagnose · alle Volvo-foutcodes · advies op maat", duration: "45 min", bookable: true },
    { code: "05", name: "Distributieriem", from: "—", desc: "Volgens Volvo-interval · alleen originele kits · waterpomp gelijktijdig vervangen" },
    { code: "06", name: "Airco Service", from: "89", desc: "Bijvullen, lekzoeken, reparatie · R134a & R1234yf · Volvo-protocol", duration: "1 uur", bookable: true },
    { code: "07", name: "Restauratie", from: "—", desc: "Klassieke 240, 740, 850 · plaatwerk, motor, interieur · langetermijntrajecten" },
    { code: "08", name: "Banden & Uitlijnen", from: "65", desc: "3D-uitlijnen voor en achter · Volvo-specifieke geometrie · meetrapport mee", duration: "1 uur", bookable: true },
  ],
  werkplaats: {
    eyebrow: "· 02 · WERKPLAATS",
    headlineLines: ["Wie er aan", "uw Volvo werkt."],
    intro:
      "Geen anonieme garage. Wij kennen elke Volvo van binnen en buiten — van de eerste 240 GL tot de nieuwste hybride XC60. U weet wie uw sleutel pakt.",
    images: [
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599256871679-bd2cd03dd76b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=80",
    ],
    team: [
      // TODO: bevestigen met eigenaar
      { name: "Van der Peijl", role: "Eigenaar · Volvo-specialist", years: "[TBD] jaar" },
      { name: "[Monteur naam]", role: "Monteur · APK-keurmeester", years: "[TBD] jaar" },
      { name: "[Monteur naam]", role: "Monteur · Diagnose VIDA/DICE", years: "[TBD] jaar" },
    ],
  },
  transparency: {
    eyebrow: "· 03 · HOE WIJ WERKEN",
    headlineLines: ["Dealer-kwaliteit.", "Geen dealer-prijzen."],
    intro:
      "Volvo-dealers hebben hun plek — maar voor onderhoud aan een 5 jaar oude V60 betaalt u daar 40% te veel. Wij werken met dezelfde originele onderdelen en dezelfde diagnose-apparatuur, voor een eerlijke prijs.",
    steps: [
      { step: "01", title: "U brengt de Volvo", desc: "Inleveren wanneer u wilt — sleutelkluis 24/7 beschikbaar. Vervangend vervoer op aanvraag." },
      { step: "02", title: "Wij maken foto's", desc: "Voor we beginnen krijgt u een offerte met foto's van het probleem. Geen verrassingen." },
      { step: "03", title: "U geeft akkoord", desc: "Geen meerwerk zonder uw expliciete akkoord. Wij bellen voor elke aanvullende reparatie." },
      { step: "04", title: "Wij leveren op tijd", desc: "Klaar wanneer afgesproken. Vaste prijs zoals geoffreerd. 1 jaar BOVAG-garantie op alle reparaties." },
    ],
    guarantee: {
      label: "· BOVAG-GARANTIE ·",
      title: "1 jaar garantie op alle reparaties",
      desc: "Wij zijn BOVAG-lid sinds jaren — dat betekent: 1 jaar garantie op werk uitgevoerd in onze werkplaats. Gaat iets mis, dan herstellen wij het kosteloos.",
      ctaLabel: "Vraag offerte aan →",
      ctaHref: "#contact",
    },
  },
  reviews: {
    eyebrow: "· 04 · WAT KLANTEN ZEGGEN",
    headlineLines: ["100% aanbeveling.", "33 reviews."],
    googleUrl: "https://tulimaps.com/autodealer/nijmegen/oranje-garage-van-der-peijl/",
    // TODO: bevestigen met eigenaar / vervangen door echte reviews
    items: [
      { name: "Peter B.", when: "recent", rating: 5, text: "Al 12 jaar mijn vaste Volvo-garage. Mijn V70 (2008) loopt nog steeds als nieuw — alleen omdat zij weten waar ze naar moeten kijken. Bij de dealer ging dat niet zo." },
      { name: "Sandra M.", when: "recent", rating: 5, text: "Volvo XC60 met een vaag motorprobleem dat 2 dealers niet konden vinden. Hier binnen een uur gediagnosticeerd. Eerlijk vakwerk." },
      { name: "Hans K.", when: "recent", rating: 5, text: "Restauratie van mijn 240 uit 1989 — overgenomen van een ander bedrijf dat het verprutste. Hier is hij weer een pareltje geworden." },
      { name: "Linda V.", when: "recent", rating: 5, text: "Bij Volvo-dealer wilden ze €2400 voor een reparatie. Hier €890 — zelfde originele onderdelen. Mijn nieuwe vaste garage." },
      { name: "Robert J.", when: "recent", rating: 5, text: "APK altijd binnen het uur klaar. Vriendelijk personeel, eerlijk advies, schone werkplaats. Wat wil je nog meer." },
      { name: "Esther T.", when: "recent", rating: 5, text: "Echte Volvo-liefhebbers. Ze nemen de tijd om uit te leggen wat er speelt en waarom. Geen verkooppraatjes, gewoon vakwerk." },
    ],
  },
  booking: {
    eyebrow: "· 05 · ONLINE AFSPRAAK",
    headlineLines: ["Boek in", "2 minuten."],
    intro: "Geen telefoontjes, geen wachten. Kies uw service, kies een tijd, en u ontvangt direct bevestiging per e-mail.",
    bullets: [
      "Direct online — geen account nodig",
      "Bevestiging binnen 30 seconden",
      "Tot 24u vooraf gratis verzetten",
      "Vervangend vervoer op aanvraag",
    ],
    dateLabel: "STAP 02 · KIES TIJD · MORGEN, DI 13 MEI",
    times: ["08:00", "09:30", "11:00", "13:00", "14:30", "16:00"],
  },
  contact: {
    eyebrow: "· 06 · CONTACT",
    headlineLines: ["Loop binnen.", "Bel direct."],
    address: { line1: "Prof. Schrijnenstraat 2", line2: "6524 RA Nijmegen" },
    mapsUrl: "https://maps.google.com/?q=Professor+Schrijnenstraat+2+Nijmegen",
    phoneDisplay: "024 — 323 13 46",
    phoneHref: "tel:+31243231346",
    whatsappHref: "https://wa.me/31243231346",
    email: "info@oranjegaragevanderpeijl.nl",
    hours: [
      ["Maandag", "08:00 — 17:00"],
      ["Dinsdag", "08:00 — 17:00"],
      ["Woensdag", "08:00 — 17:00"],
      ["Donderdag", "08:00 — 17:00"],
      ["Vrijdag", "08:00 — 17:00"],
      ["Zaterdag", "Gesloten"],
      ["Zondag", "Gesloten"],
    ],
    coordinates: "51.8298°N · 5.8753°E",
    parkingNote: "GRATIS PARKEREN VOOR DE DEUR",
    osmEmbed:
      "https://www.openstreetmap.org/export/embed.html?bbox=5.870%2C51.825%2C5.882%2C51.834&layer=mapnik&marker=51.8298,5.8753",
  },
  footer: {
    tagline:
      "Onafhankelijke Volvo-specialist in Nijmegen-Oost. Eerlijk vakwerk, originele Volvo-onderdelen, dealer-kwaliteit.",
    erkend: ["BOVAG-lid", "RDW APK-keurmeester", "Volvo-specialist", "Originele OE-onderdelen"],
    kvk: "[TBD]",
  },
};
