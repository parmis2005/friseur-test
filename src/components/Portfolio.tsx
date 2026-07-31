"use client";

import { useState } from "react";
import { portfolio, portfolioIntro } from "@/lib/data";

const gradients = [
  "from-[#8a5a3c] via-[#c08552] to-[#e6c9a0]",
  "from-charcoal via-charcoal-light to-[#5a4a3f]",
  "from-[#a85c3c] via-[#c98a5e] to-[#f0d9bd]",
  "from-charcoal-light via-[#3a322d] to-gold/60",
  "from-[#c9a468] via-[#e6c9a0] to-cream-dark",
  "from-charcoal via-[#4a3d35] to-terracotta/50",
];

const filters = [
  { id: "alle", label: "Alle" },
  { id: "damen", label: "Damen" },
  { id: "herren", label: "Herren" },
] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("alle");
  const items = portfolio.filter((item) => filter === "alle" || item.category === filter);

  return (
    <section id="portfolio" className="bg-cream-dark/40 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">{portfolioIntro.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
            {portfolioIntro.headlineMain} <em className="text-gold not-italic">{portfolioIntro.headlineAccent}</em>{" "}
            {portfolioIntro.headlineEnd}
          </h2>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                filter === f.id
                  ? "border-charcoal bg-charcoal text-cream"
                  : "border-charcoal/15 text-charcoal/70 hover:border-gold hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-charcoal/10 transition-colors group-hover:bg-charcoal/25" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs uppercase tracking-wide text-cream/70">{item.tag}</p>
                <p className="mt-1 font-serif text-lg text-cream">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-charcoal/70">{portfolioIntro.ctaText}</p>
          <a
            href="#kontakt"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold"
          >
            {portfolioIntro.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
