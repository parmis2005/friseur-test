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
};

export const openingHours = [
  { day: "Montag", hours: "geschlossen" },
  { day: "Dienstag – Freitag", hours: "09:00 – 19:00" },
  { day: "Samstag", hours: "09:00 – 16:00" },
  { day: "Sonntag", hours: "geschlossen" },
];

export const stats = [
  { value: "6+", label: "Jahre Erfahrung" },
  { value: "2.400+", label: "Zufriedene Kund:innen" },
  { value: "4,9/5", label: "Ø Bewertung" },
  { value: "5", label: "Expert:innen im Team" },
];

export type ServiceItem = {
  name: string;
  description: string;
  duration: string;
  price: string;
};

export type ServiceCategory = {
  category: string;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    category: "Damen",
    items: [
      { name: "Waschen, Schneiden, Föhnen", description: "Beratung, Pflege & individueller Schnitt", duration: "60 Min.", price: "ab 48 €" },
      { name: "Balayage", description: "Freihand-Technik für natürliche Lichtreflexe", duration: "150 Min.", price: "ab 125 €" },
      { name: "Strähnen / Highlights", description: "Foliensträhnen inkl. Tonung", duration: "120 Min.", price: "ab 89 €" },
      { name: "Coloration", description: "Vollcoloration mit Pflegekomplex", duration: "90 Min.", price: "ab 65 €" },
      { name: "Hochsteckfrisur", description: "Für Anlässe & besondere Momente", duration: "60 Min.", price: "ab 58 €" },
    ],
  },
  {
    category: "Herren",
    items: [
      { name: "Waschen, Schneiden, Styling", description: "Klassisch oder modern, ganz nach Wunsch", duration: "30 Min.", price: "ab 29 €" },
      { name: "Bart Trim & Konturen", description: "Präzise Konturen mit heißem Handtuch", duration: "20 Min.", price: "ab 16 €" },
      { name: "Fade & Skin Fade", description: "Präzisionsschnitt mit Maschine", duration: "40 Min.", price: "ab 34 €" },
    ],
  },
  {
    category: "Pflege & Extras",
    items: [
      { name: "Olaplex Treatment", description: "Intensivkur zum Strukturaufbau", duration: "20 Min.", price: "ab 24 €" },
      { name: "Dauerwelle", description: "Langanhaltende Locken & Volumen", duration: "120 Min.", price: "ab 98 €" },
      { name: "Kinderschnitt", description: "Bis 12 Jahre, entspannt & schnell", duration: "30 Min.", price: "ab 19 €" },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  { name: "Sofia Lindgren", role: "Inhaberin & Master Stylistin", bio: "Spezialisiert auf Balayage und Farbkonzepte, über 12 Jahre Erfahrung.", initials: "SL" },
  { name: "Kai Brunner", role: "Colorist", bio: "Experte für Foliensträhnen, Tonungen und kreative Farbverläufe.", initials: "KB" },
  { name: "Mara Vogt", role: "Stylistin", bio: "Von Bob bis Langhaar – präzise Schnitte und weiche Übergänge.", initials: "MV" },
  { name: "Noah Keller", role: "Barbier", bio: "Fades, Bartkonturen und klassische Herrenschnitte mit Liebe zum Detail.", initials: "NK" },
];

export type Testimonial = {
  name: string;
  text: string;
  rating: number;
  service: string;
};

export const testimonials: Testimonial[] = [
  { name: "Julia M.", text: "Endlich ein Salon, der sich wirklich Zeit nimmt. Die Balayage von Sofia sieht traumhaft natürlich aus!", rating: 5, service: "Balayage bei Sofia" },
  { name: "Tom K.", text: "Bester Fade seit Jahren. Noah hört genau zu und das Ergebnis passt jedes Mal perfekt.", rating: 5, service: "Fade bei Noah" },
  { name: "Anna S.", text: "Sehr freundliches Team, moderne Location und faire Preise. Ich komme seit zwei Jahren regelmäßig.", rating: 5, service: "Coloration bei Kai" },
  { name: "David R.", text: "Kompetente Beratung, entspannte Atmosphäre und ein Ergebnis, das genau meinen Vorstellungen entsprach.", rating: 5, service: "Schnitt bei Mara" },
];

export const portfolio = [
  { title: "Warmes Balayage", tag: "Damen · Colorationen" },
  { title: "Textured Crop", tag: "Herren · Kurzhaar" },
  { title: "Soft Bob", tag: "Damen · Schnitt" },
  { title: "Skin Fade", tag: "Herren · Fade" },
  { title: "Beach Waves", tag: "Damen · Styling" },
  { title: "Klassischer Herrenschnitt", tag: "Herren · Klassisch" },
];

export const brands = ["Olaplex", "Kevin Murphy", "Redken", "Moroccanoil", "Wella Professionals"];

export const navLinks = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#team", label: "Team" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];
