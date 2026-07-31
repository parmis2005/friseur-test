import { Star } from "lucide-react";
import { brands, testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="bewertungen" className="bg-cream-dark/40 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">Bewertungen</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">Was unsere Kund:innen sagen</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-charcoal/10 bg-cream p-6 shadow-sm">
              <div className="flex text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-charcoal/80">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-charcoal">{t.name}</p>
              <p className="text-xs text-charcoal/50">{t.service}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-charcoal/40">
            Wir arbeiten mit
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {brands.map((brand) => (
              <span key={brand} className="font-serif text-lg text-charcoal/50">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
