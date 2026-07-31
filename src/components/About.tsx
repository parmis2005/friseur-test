import { Award, Leaf, Sparkles, Users } from "lucide-react";
import { salon, stats } from "@/lib/data";

const points = [
  {
    icon: Award,
    title: "Erfahrung, der man vertrauen kann",
    text: "Seit 2019 arbeiten wir mit ausgebildeten Stylist:innen, die sich kontinuierlich weiterbilden.",
  },
  {
    icon: Sparkles,
    title: "Individuelle Beratung",
    text: "Jeder Termin beginnt mit einer ausführlichen Beratung – für ein Ergebnis, das zu Ihnen passt.",
  },
  {
    icon: Leaf,
    title: "Hochwertige Produkte",
    text: "Wir arbeiten mit Profi-Marken wie Olaplex, Kevin Murphy und Wella Professionals.",
  },
  {
    icon: Users,
    title: "Für die ganze Familie",
    text: "Vom Kinderschnitt bis zum klassischen Herrenschnitt – bei uns ist jede:r willkommen.",
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="bg-cream-dark/40 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow text-xs font-semibold uppercase text-gold">Über uns</p>
            <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
              Ein Studio, das Handwerk und Persönlichkeit vereint
            </h2>
            <p className="mt-6 leading-relaxed text-charcoal/70">
              {salon.name} ist seit {salon.founded} fester Bestandteil von{" "}
              {salon.city}. In entspannter, moderner Atmosphäre kümmert sich
              unser Team um Schnitt, Farbe und Pflege – mit ehrlicher Beratung
              und einem Blick fürs Detail. Wir sprechen Deutsch und Englisch
              und nehmen uns die Zeit, die ein gutes Ergebnis braucht.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl text-charcoal">{stat.value}</dd>
                  <p className="mt-1 text-sm text-charcoal/60">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-charcoal/10 bg-cream p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-serif text-lg text-charcoal">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
