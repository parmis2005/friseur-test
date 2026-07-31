import { Star } from "lucide-react";
import { bewertungenIntro, testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="bewertungen" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">{bewertungenIntro.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
            {bewertungenIntro.headlineMain} <em className="text-gold not-italic">{bewertungenIntro.headlineAccent}</em>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm text-charcoal/60">{bewertungenIntro.overallRating}/5 · Google Bewertungen</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-charcoal/10 bg-cream-dark/30 p-6 shadow-sm">
              <div className="flex text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-charcoal/80">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-charcoal">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
