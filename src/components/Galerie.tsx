import { galerie } from "@/lib/data";

const gradients = [
  "from-gold-light via-gold to-terracotta",
  "from-charcoal via-charcoal-light to-[#5a4a3f]",
  "from-cream-dark via-gold-light to-gold",
  "from-charcoal-light via-[#4a3d35] to-terracotta/60",
  "from-gold via-gold-light to-cream-dark",
  "from-charcoal via-[#3a322d] to-gold/50",
  "from-terracotta via-gold to-gold-light",
  "from-charcoal-light via-charcoal to-[#5a4632]",
];

export default function Galerie() {
  return (
    <section id="galerie" className="bg-cream-dark/40 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">{galerie.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
            {galerie.headlineMain} <em className="text-gold not-italic">{galerie.headlineAccent}</em>{" "}
            {galerie.headlineEnd}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {galerie.images.map((label, i) => (
            <div
              key={label}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-sm"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 flex items-end bg-charcoal/0 p-3 transition-colors group-hover:bg-charcoal/30">
                <p className="text-xs font-medium text-cream opacity-0 transition-opacity group-hover:opacity-100">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
