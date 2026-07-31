import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { brands, media, produkte } from "@/lib/data";

export default function Produkte() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-6xl overflow-hidden lg:grid-cols-2 lg:shadow-xl lg:shadow-charcoal/10">
        <div className="relative min-h-[360px]">
          <Image
            src={media.products}
            alt="Hochwertige Haarpflegeprodukte im Salon"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="bg-charcoal px-8 py-14 sm:px-12 lg:py-16">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">{produkte.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">
            {produkte.headlineMain} <em className="text-gold-light not-italic">{produkte.headlineAccent}</em>
          </h2>
          <p className="mt-5 leading-relaxed text-cream/70">{produkte.text}</p>

          <ul className="mt-8 space-y-3 text-sm text-cream/78">
            {["Farbberatung mit realistischer Pflegeempfehlung", "Schonende Treatments für Glanz und Struktur", "Produkte, die zum Styling zuhause passen"].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

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
