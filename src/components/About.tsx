import Image from "next/image";
import { about, media, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="ueber-uns" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[520px]">
            <div className="absolute left-0 top-0 h-[78%] w-[78%] overflow-hidden rounded-2xl shadow-2xl shadow-charcoal/15">
              <Image
                src={media.salonInterior}
                alt="Moderner Salonbereich mit Stylingplätzen"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 42vw, 80vw"
                className="salon-photo object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[50%] w-[54%] overflow-hidden rounded-2xl border-8 border-cream shadow-xl shadow-charcoal/10">
              <Image
                src={media.consultation}
                alt="Beratung zwischen Stylistin und Kundin"
                fill
                loading="eager"
                sizes="(min-width: 1024px) 28vw, 54vw"
                className="salon-photo object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 flex h-32 w-40 flex-col justify-center rounded-2xl border border-cream/10 bg-charcoal p-4 shadow-xl sm:left-10">
              <p className="font-serif text-2xl text-cream">{about.badge}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-cream/60">Studio Berlin</p>
            </div>
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
