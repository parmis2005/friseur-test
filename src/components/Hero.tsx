import { Calendar, Star } from "lucide-react";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="animate-fade-up">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">
            Friseursalon in Berlin-Friedrichshain
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
            Haare. Handwerk.
            <br />
            Haltung.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
            Seit 2019 verbinden wir handwerkliche Präzision mit einem Gespür für
            individuellen Stil. Ob Schnitt, Coloration oder Balayage – bei uns
            bekommen Sie eine Frisur, die zu Ihnen passt.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold"
            >
              <Calendar size={17} />
              Termin buchen
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3.5 text-sm font-medium text-charcoal transition-colors hover:border-gold hover:text-gold"
            >
              Leistungen ansehen
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-charcoal/70">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span>4,9/5 · über 2.400 zufriedene Kund:innen</span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="aspect-[4/5] w-full rounded-[2rem] bg-gradient-to-br from-charcoal via-charcoal-light to-gold/40 shadow-2xl shadow-charcoal/20">
            <div className="flex h-full w-full flex-col justify-end rounded-[2rem] bg-charcoal/10 p-8">
              <p className="font-serif text-2xl text-cream">
                &ldquo;Ein Schnitt, der sitzt.&rdquo;
              </p>
              <p className="mt-2 text-sm text-cream/70">Studio-Atmosphäre in Friedrichshain</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-3 rounded-2xl border border-charcoal/10 bg-cream/95 p-5 shadow-xl backdrop-blur sm:-left-10">
            {stats.slice(0, 2).map((stat) => (
              <div key={stat.label} className="min-w-[7rem]">
                <p className="font-serif text-2xl text-charcoal">{stat.value}</p>
                <p className="text-xs text-charcoal/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
