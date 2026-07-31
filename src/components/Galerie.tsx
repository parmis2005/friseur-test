import Image from "next/image";
import { galerie } from "@/lib/data";

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
              key={label.label}
              className={`group relative overflow-hidden rounded-lg bg-charcoal shadow-sm ${
                i === 1 || i === 6 ? "aspect-[3/4] sm:row-span-2 sm:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={label.src}
                alt={label.label}
                fill
                loading="eager"
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="salon-photo object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gold/10 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/82 via-charcoal/20 to-transparent p-3">
                <p className="text-xs font-medium text-cream/95">
                  {label.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
