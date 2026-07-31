import { portfolio } from "@/lib/data";

const gradients = [
  "from-[#8a5a3c] via-[#c08552] to-[#e6c9a0]",
  "from-charcoal via-charcoal-light to-[#5a4a3f]",
  "from-[#a85c3c] via-[#c98a5e] to-[#f0d9bd]",
  "from-charcoal-light via-[#3a322d] to-gold/60",
  "from-[#c9a468] via-[#e6c9a0] to-cream-dark",
  "from-charcoal via-[#4a3d35] to-terracotta/50",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream-dark/40 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">Portfolio</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">Ausgewählte Arbeiten</h2>
          <p className="mt-4 text-charcoal/70">
            Ein Einblick in Schnitte, Farben und Styles aus unserem Studio.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <div
              key={item.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-charcoal/10 transition-colors group-hover:bg-charcoal/25" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs uppercase tracking-wide text-cream/70">{item.tag}</p>
                <p className="mt-1 font-serif text-lg text-cream">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
