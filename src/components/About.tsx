import { about, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="aspect-[4/5] w-full max-w-md rounded-[2rem] bg-gradient-to-br from-gold-light via-gold to-terracotta shadow-xl shadow-charcoal/10" />
            <div className="absolute -bottom-8 -right-4 flex h-32 w-40 flex-col justify-center rounded-2xl border border-charcoal/10 bg-charcoal p-4 shadow-xl sm:-right-8">
              <p className="font-serif text-2xl text-cream">{about.badge}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-cream/60">Studio Berlin</p>
            </div>
            <div className="absolute -left-6 -top-6 h-28 w-28 rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-light shadow-lg sm:-left-10 sm:-top-10" />
          </div>

          <div className="lg:pl-6">
            <p className="section-eyebrow text-xs font-semibold uppercase text-gold">{about.eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
              {about.headlineMain} <em className="text-gold not-italic">{about.headlineAccent}</em>{" "}
              {about.headlineEnd}
            </h2>

            {about.paragraphs.map((p) => (
              <p key={p} className="mt-5 leading-relaxed text-charcoal/70">
                {p}
              </p>
            ))}

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-charcoal/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-3xl text-charcoal">{stat.value}</dd>
                  <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/50">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
