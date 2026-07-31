import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="leistungen" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">Leistungen &amp; Preise</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
            Transparente Preise für jeden Anlass
          </h2>
          <p className="mt-4 text-charcoal/70">
            Alle Preise verstehen sich als Richtwerte und können je nach
            Haarlänge und Aufwand variieren. Gerne beraten wir Sie individuell
            vor Ort.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {services.map((cat) => (
            <div key={cat.category} className="rounded-2xl border border-charcoal/10 bg-cream-dark/30 p-6 sm:p-8">
              <h3 className="font-serif text-xl text-charcoal">{cat.category}</h3>
              <ul className="mt-6 space-y-5">
                {cat.items.map((item) => (
                  <li key={item.name} className="border-b border-charcoal/10 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-medium text-charcoal">{item.name}</span>
                      <span className="whitespace-nowrap font-serif text-gold">{item.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-charcoal/60">{item.description}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/40">{item.duration}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold"
          >
            Termin anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
