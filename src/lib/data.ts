export const salon = {
  name: "Haarwerk Studio",
  claim: "Haare. Handwerk. Haltung.",
  founded: 2019,
  city: "Berlin-Friedrichshain",
  street: "Lindenblütenweg 18",
  zip: "10245",
  cityName: "Berlin",
  phone: "+49 30 9887 6541",
  phoneHref: "+493098876541",
  email: "info@haarwerk-studio.de",
  instagram: "@haarwerk.studio",
  facebook: "Haarwerk Studio Berlin",
  credentials: "Meisterbetrieb · Zertifiziertes Olaplex-Studio · Fortbildung bei Wella Professionals",
};

export const hero = {
  eyebrow: "Friseur Berlin · Friedrichshain",
  headlineMain: "Haare verstehen.",
  headlineAccent: "Stil erleben.",
  text: "Trendiger Salon im Herzen von Berlin-Friedrichshain. Leidenschaft für Haardesign, Farbe und Stil — mit Handwerk und Herz.",
  cta: "Jetzt Termin buchen",
};

export const about = {
  eyebrow: "Unser Studio",
  headlineMain: "Ihr",
  headlineAccent: "Studio",
  headlineEnd: "für Handwerk in Berlin",
  badge: "Seit 2019",
  paragraphs: [
    "In unserem modernen Studio in Berlin-Friedrichshain erwartet Sie ein stilvolles Ambiente, ein eingespieltes Team und höchste Ansprüche an Qualität. Seit 2019 sind wir Ihr Ansprechpartner für zeitloses Haardesign.",
    "Ob frische Coloration, Balayage oder der perfekte Haarschnitt — wir sprechen Deutsch und Englisch und arbeiten ausschließlich mit hochwertigen Pflege- und Farbprodukten für optimale Ergebnisse.",
  ],
};

export const stats = [
  { value: "6+", label: "Jahre Erfahrung" },
  { value: "5★", label: "1.800+ Bewertungen Google" },
  { value: "∞", label: "Leidenschaft für Ihr Haar" },
];

export const galerie = {
  eyebrow: "Unser Studio",
  headlineMain: "Ein",
  headlineAccent: "Blick",
  headlineEnd: "hinter die Kulissen",
  images: [
    "Empfangsbereich",
    "Stylingplätze",
    "Waschbereich",
    "Team bei der Arbeit",
    "Colorationsecke",
    "Loungebereich",
    "Produktregal",
    "Eingangsbereich",
  ],
};

export const produkte = {
  eyebrow: "Qualität, die man spürt",
  headlineMain: "Premium",
  headlineAccent: "Produkte",
  text: "Wir arbeiten ausschließlich mit erstklassigen Fachprodukten. Von der regenerierenden Olaplex-Behandlung bis zu hochwertigen Farb- und Pflegeprodukten — Qualität ist bei uns keine Option, sondern Standard.",
};

export const brands = ["Olaplex", "Kevin Murphy", "Redken", "Moroccanoil", "Wella Professionals"];

export type ServiceItem = {
  name: string;
  description: string;
  duration: string;
  price: string;
};

export type ServiceTab = {
  id: string;
  label: string;
  items: ServiceItem[];
};

export const leistungen = {
  eyebrow: "Leistungen & Preise",
  headline: "Transparente Preise für jeden Anlass",
  text: "Alle Preise verstehen sich als Richtwerte und können je nach Haarlänge und Aufwand variieren.",
};

export const serviceTabs: ServiceTab[] = [
  {
    id: "damen_schnitte",
    label: "Damen Schnitte",
    items: [
      { name: "Waschen, Schneiden, Föhnen", description: "Beratung, Pflege & individueller Schnitt", duration: "60 Min.", price: "ab 48 €" },
      { name: "Hochsteckfrisur", description: "Für Anlässe & besondere Momente", duration: "60 Min.", price: "ab 58 €" },
    ],
  },
  {
    id: "herren_schnitte",
    label: "Herren Schnitte",
    items: [
      { name: "Waschen, Schneiden, Styling", description: "Klassisch oder modern, ganz nach Wunsch", duration: "30 Min.", price: "ab 29 €" },
      { name: "Fade & Skin Fade", description: "Präzisionsschnitt mit Maschine", duration: "40 Min.", price: "ab 34 €" },
    ],
  },
  {
    id: "damen_farbe",
    label: "Damen Farbe",
    items: [
      { name: "Ansatzfarbe", description: "Auffrischung von Ansatz und Länge", duration: "75 Min.", price: "ab 55 €" },
      { name: "Tonung", description: "Farbauffrischung ohne Aufhellung", duration: "45 Min.", price: "ab 38 €" },
    ],
  },
  {
    id: "coloration",
    label: "Coloration",
    items: [
      { name: "Vollcoloration", description: "Vollcoloration mit Pflegekomplex", duration: "90 Min.", price: "ab 65 €" },
    ],
  },
  {
    id: "balayage",
    label: "Balayage",
    items: [
      { name: "Balayage", description: "Freihand-Technik für natürliche Lichtreflexe", duration: "150 Min.", price: "ab 125 €" },
    ],
  },
  {
    id: "highlight",
    label: "Highlights",
    items: [
      { name: "Strähnen / Highlights", description: "Foliensträhnen inkl. Tonung", duration: "120 Min.", price: "ab 89 €" },
    ],
  },
  {
    id: "olaplex",
    label: "Olaplex",
    items: [
      { name: "Olaplex Treatment", description: "Intensivkur zum Strukturaufbau", duration: "20 Min.", price: "ab 24 €" },
    ],
  },
  {
    id: "dauerwelle",
    label: "Dauerwelle",
    items: [
      { name: "Dauerwelle", description: "Langanhaltende Locken & Volumen", duration: "120 Min.", price: "ab 98 €" },
    ],
  },
  {
    id: "kinder",
    label: "Kinder",
    items: [
      { name: "Kinderschnitt", description: "Bis 12 Jahre, entspannt & schnell", duration: "30 Min.", price: "ab 19 €" },
    ],
  },
  {
    id: "nagel",
    label: "Nägel",
    items: [
      { name: "Bart Trim & Konturen", description: "Präzise Konturen mit heißem Handtuch", duration: "20 Min.", price: "ab 16 €" },
      { name: "Nagelmodellage", description: "Formgebung & Pflege", duration: "45 Min.", price: "ab 32 €" },
    ],
  },
];

export const portfolioIntro = {
  eyebrow: "Unsere Arbeit",
  headlineMain: "So kann Ihr",
  headlineAccent: "Haar",
  headlineEnd: "aussehen",
  ctaText: "Wir freuen uns darauf, auch Ihnen zu einem neuen Look zu verhelfen.",
  cta: "Jetzt Termin buchen",
};

export type PortfolioItem = {
  title: string;
  tag: string;
  category: "damen" | "herren";
};

export const portfolio: PortfolioItem[] = [
  { title: "Warmes Balayage", tag: "Damen · Colorationen", category: "damen" },
  { title: "Textured Crop", tag: "Herren · Kurzhaar", category: "herren" },
  { title: "Soft Bob", tag: "Damen · Schnitt", category: "damen" },
  { title: "Skin Fade", tag: "Herren · Fade", category: "herren" },
  { title: "Beach Waves", tag: "Damen · Styling", category: "damen" },
  { title: "Klassischer Herrenschnitt", tag: "Herren · Klassisch", category: "herren" },
];

export const bewertungenIntro = {
  eyebrow: "Kundenstimmen",
  headlineMain: "Was unsere Kunden",
  headlineAccent: "sagen",
  overallRating: "4,9",
};

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  { name: "Sophie", text: "Sofia ist all meinen Wünschen entgegengekommen und hat mich perfekt zu meiner Gesichtsform beraten. Ich sehe aus wie ein neuer Mensch!", rating: 5 },
  { name: "Davina", text: "Kai ist ein unheimlich freundlicher und professioneller Colorist. Ohne viele Erklärungen versteht er genau, was ich mir wünsche.", rating: 5 },
  { name: "Anna", text: "Ich gehe wirklich immer wieder gerne zu Mara. Einfach schnelle und angenehme Behandlung mit einem perfekten Ergebnis.", rating: 5 },
  { name: "Julia", text: "Alles super, Noah macht wie immer sehr gute Arbeit und das neue Studio-Design ist auch sehr hübsch.", rating: 5 },
  { name: "Alina", text: "Eine Freundin hat mir das Studio empfohlen, weil sie so begeistert von der Balayage war — das Ergebnis wurde genau so, wie ich es mir vorgestellt habe!", rating: 5 },
  { name: "Christopher", text: "Bester Friseur in der Stadt.", rating: 5 },
];

export const openingHours = [
  { day: "Montag", hours: "geschlossen" },
  { day: "Dienstag", hours: "09:00 – 19:00" },
  { day: "Mittwoch", hours: "09:00 – 19:00" },
  { day: "Donnerstag", hours: "09:00 – 19:00" },
  { day: "Freitag", hours: "09:00 – 19:00" },
  { day: "Samstag", hours: "09:00 – 16:00" },
  { day: "Sonntag", hours: "geschlossen" },
];

export const ctaBanner = {
  bgWord: "Haare",
  headline: "Bereit für Ihren neuen Look?",
  text: "Sichern Sie sich jetzt Ihren Wunschtermin — schnell, einfach und persönlich.",
  cta: "Termin direkt anfragen",
};

export const navLinks = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#galerie", label: "Galerie" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];
