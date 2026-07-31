import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[80vh] items-center overflow-hidden bg-charcoal pt-20">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-[#5a4632]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(211,166,104,0.25),transparent_55%)]"
      />
      <div aria-hidden className="absolute inset-0 bg-charcoal/35" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-xl animate-fade-up">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            {hero.headlineMain}
            <br />
            <em className="text-gold-light not-italic">{hero.headlineAccent}</em>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75">
            {hero.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-charcoal transition-colors hover:bg-gold-light"
            >
              {hero.cta}
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
            >
              Leistungen ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
