import { ctaBanner } from "@/lib/data";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold-light via-gold to-terracotta py-24">
      <p
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-serif text-[18vw] leading-none text-charcoal/10"
      >
        {ctaBanner.bgWord}
      </p>

      <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">{ctaBanner.headline}</h2>
        <p className="mt-4 text-charcoal/80">{ctaBanner.text}</p>
        <a
          href="#terminbuchung"
          data-booking-trigger
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-charcoal-light"
        >
          {ctaBanner.cta}
        </a>
      </div>
    </section>
  );
}
