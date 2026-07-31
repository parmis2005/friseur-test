import { Play } from "lucide-react";
import { videoShowcase } from "@/lib/data";

export default function VideoShowcase() {
  return (
    <section className="bg-charcoal py-24 text-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-eyebrow text-xs font-semibold uppercase text-gold">{videoShowcase.eyebrow}</p>
            <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">{videoShowcase.headline}</h2>
            <p className="mt-5 leading-relaxed text-cream/70">{videoShowcase.text}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {videoShowcase.items.map((item) => (
              <article key={item.title} className="group">
                <div className="relative aspect-[9/13] overflow-hidden rounded-2xl bg-charcoal-light shadow-xl shadow-black/20">
                  <video
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-charcoal">
                      <Play size={15} fill="currentColor" />
                    </div>
                    <h3 className="font-serif text-xl text-cream">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream/68">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
