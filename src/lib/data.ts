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
  text: "Trendiger Salon im Herzen von Berlin-Friedrichshain. Präzise Schnitte, moderne Colorationen und Beratung, die zu Ihrem Alltag passt.",
  cta: "Jetzt Termin buchen",
};

export const media = {
  heroVideo: "https://cdn.coverr.co/videos/coverr-combing-a-man-s-hair-2623/1080p.mp4",
  heroPoster: "https://cdn.coverr.co/videos/coverr-combing-a-man-s-hair-2623/thumbnail?width=1280",
  salonInterior: "https://images.unsplash.com/photo-1746723378067-83a345ff3160?auto=format&fit=crop&w=1200&q=80",
  consultation: "https://images.unsplash.com/photo-1750263147700-8bea3899f287?auto=format&fit=crop&w=1000&q=80",
  wash: "https://images.unsplash.com/photo-1717160675643-53a7a2ebaa9f?auto=format&fit=crop&w=1000&q=80",
  products: "https://images.unsplash.com/photo-1701976857871-a46363644519?auto=format&fit=crop&w=1200&q=80",
  menCut: "https://images.unsplash.com/photo-1710367847973-152d445b23a6?auto=format&fit=crop&w=1000&q=80",
  womenStyling: "https://images.unsplash.com/photo-1695527081848-1e46c06e6458?auto=format&fit=crop&w=1000&q=80",
  barberCut: "https://images.unsplash.com/photo-1582771498000-8ad44e6c84db?auto=format&fit=crop&w=1000&q=80",
  classicStyling: "https://images.unsplash.com/photo-1493775379751-a6c3940f3cbc?auto=format&fit=crop&w=1200&q=80",
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
    { label: "Empfang & Beratung", src: media.consultation },
    { label: "Stylingplätze", src: media.salonInterior },
    { label: "Waschbereich", src: media.wash },
    { label: "Coloration & Pflege", src: media.products },
    { label: "Herren-Schnitt", src: media.menCut },
    { label: "Finish & Styling", src: media.womenStyling },
    { label: "Barber-Details", src: media.barberCut },
    { label: "Salon-Atmosphäre", src: media.classicStyling },
  ],
};

export const videoShowcase = {
  eyebrow: "Salon in Bewegung",
  headline: "Echte Atmosphäre statt statischer Webseite",
  text: "Kurze Video-Momente zeigen Beratung, Handwerk und Details - genau das macht den Besuch im Studio greifbar.",
  items: [
    {
      title: "Styling & Finish",
      text: "Sanfte Bewegungen, saubere Tools und ein Look, der fertig wirkt.",
      src: "https://cdn.coverr.co/videos/coverr-combing-a-man-s-hair-2623/1080p.mp4",
      poster: "https://cdn.coverr.co/videos/coverr-combing-a-man-s-hair-2623/thumbnail?width=800",
    },
    {
      title: "Präziser Schnitt",
      text: "Barber-Handwerk mit ruhigem, professionellem Bildaufbau.",
      src: "https://cdn.coverr.co/videos/coverr-cutting-hair-in-the-barbershop-6113/1080p.mp4",
      poster: "https://cdn.coverr.co/videos/coverr-cutting-hair-in-the-barbershop-6113/thumbnail?width=800",
    },
    {
      title: "Tools & Details",
      text: "Nahaufnahmen geben der Seite mehr Tiefe und Vertrauen.",
      src: "https://cdn.coverr.co/videos/coverr-hairdresser-s-tools-9586/1080p.mp4",
      poster: "https://cdn.coverr.co/videos/coverr-hairdresser-s-tools-9586/thumbnail?width=800",
    },
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
  image: string;
};

export const portfolio: PortfolioItem[] = [
  { title: "Warmes Balayage", tag: "Damen · Colorationen", category: "damen", image: media.womenStyling },
  { title: "Textured Crop", tag: "Herren · Kurzhaar", category: "herren", image: media.menCut },
  { title: "Soft Bob", tag: "Damen · Schnitt", category: "damen", image: media.wash },
  { title: "Skin Fade", tag: "Herren · Fade", category: "herren", image: media.barberCut },
  { title: "Glossy Finish", tag: "Damen · Styling", category: "damen", image: media.classicStyling },
  { title: "Klassischer Herrenschnitt", tag: "Herren · Klassisch", category: "herren", image: media.consultation },
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
