"use client";

import { useState } from "react";
import { leistungen, serviceTabs } from "@/lib/data";

export default function Services() {
  const [activeId, setActiveId] = useState(serviceTabs[0].id);
  const active = serviceTabs.find((t) => t.id === activeId) ?? serviceTabs[0];

  return (
    <section id="leistungen" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">{leistungen.eyebrow}</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">{leistungen.headline}</h2>
          <p className="mt-4 text-charcoal/70">{leistungen.text}</p>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                tab.id === activeId
                  ? "border-charcoal bg-charcoal text-cream"
                  : "border-charcoal/15 text-charcoal/70 hover:border-gold hover:text-gold"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-charcoal/10 bg-cream-dark/30 p-6 sm:p-8">
          <ul className="divide-y divide-charcoal/10">
            {active.items.map((item) => (
              <li key={item.name} className="flex flex-wrap items-baseline justify-between gap-2 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="font-medium text-charcoal">{item.name}</p>
                  <p className="mt-1 text-sm text-charcoal/60">{item.description}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-charcoal/40">{item.duration}</p>
                </div>
                <span className="whitespace-nowrap font-serif text-lg text-gold">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#terminbuchung"
            data-booking-trigger
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold"
          >
            Termin anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
