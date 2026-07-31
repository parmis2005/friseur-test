import { hero, media, salon, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden bg-charcoal pt-24">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={media.heroVideo}
        poster={media.heroPoster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div aria-hidden className="absolute inset-0 bg-charcoal/55" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-10 pt-24 lg:px-8 lg:pb-14">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="max-w-2xl animate-fade-up">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            {hero.headlineMain}
            <br />
            <em className="text-gold-light not-italic">{hero.headlineAccent}</em>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/78 sm:text-lg">
            {hero.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#terminbuchung"
              data-booking-trigger
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

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="border-l border-cream/25 pl-5">
              <p className="text-sm uppercase tracking-[0.25em] text-cream/55">{salon.claim}</p>
              <p className="mt-3 max-w-sm font-serif text-2xl leading-tight text-cream">
                Beratung, Farbe und Schnitt in einem ruhigen Studio-Ambiente.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-3 sm:col-span-2 lg:col-span-1">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-cream/20 pt-4">
                  <dt className="text-xs uppercase tracking-wide text-cream/45">{stat.label}</dt>
                  <dd className="mt-1 font-serif text-2xl text-gold-light">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
