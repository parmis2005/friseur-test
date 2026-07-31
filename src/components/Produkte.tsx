import { brands, produkte } from "@/lib/data";

export default function Produkte() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-none sm:my-16 sm:rounded-[2rem] sm:px-0 lg:grid-cols-2 lg:shadow-xl lg:shadow-charcoal/10">
        <div className="aspect-[16/10] w-full bg-gradient-to-br from-gold-light via-gold to-terracotta lg:aspect-auto" />

        <div className="bg-charcoal px-8 py-14 sm:px-12 lg:py-16">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">{produkte.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">
            {produkte.headlineMain} <em className="text-gold-light not-italic">{produkte.headlineAccent}</em>
          </h2>
          <p className="mt-5 leading-relaxed text-cream/70">{produkte.text}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-cream/20 px-4 py-2 text-xs font-medium uppercase tracking-wide text-cream/80"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
