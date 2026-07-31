"use client";

import { CalendarCheck, Phone } from "lucide-react";
import { openingHours, salon } from "@/lib/data";

export default function Kontakt() {
  return (
    <section id="kontakt" className="bg-charcoal py-20 text-cream">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="section-eyebrow text-xs font-semibold uppercase text-gold">Öffnungszeiten</h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {openingHours.map((slot) => (
                <li key={slot.day} className="flex justify-between gap-6 border-b border-cream/10 pb-2.5">
                  <span className="text-cream/85">{slot.day}</span>
                  <span className="text-cream/55">{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="section-eyebrow text-xs font-semibold uppercase text-gold">Adresse &amp; Kontakt</h3>
            <p className="mt-5 font-serif text-xl text-cream">{salon.name}</p>
            <p className="mt-2 text-sm text-cream/70">
              {salon.street}
              <br />
              {salon.zip} {salon.cityName}
            </p>
            <a
              href={`tel:${salon.phoneHref}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-cream/85 hover:text-gold"
            >
              <Phone size={15} className="text-gold" />
              {salon.phone}
            </a>
            <p className="mt-2 text-sm text-cream/70">
              <a href={`mailto:${salon.email}`} className="hover:text-gold">
                {salon.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className="section-eyebrow text-xs font-semibold uppercase text-gold">Termin anfragen</h3>
            <div className="mt-5 rounded-xl border border-cream/15 bg-cream/5 p-5 text-sm">
              <CalendarCheck size={28} className="text-gold" strokeWidth={1.75} />
              <p className="mt-4 font-serif text-xl text-cream">Online Leistung und Uhrzeit wählen</p>
              <p className="mt-2 leading-relaxed text-cream/68">
                Buchen Sie Ihren Wunschtermin direkt über unsere Online-Terminbuchung.
              </p>
              <button
                type="button"
                data-booking-trigger
                className="mt-5 w-full rounded-full bg-gold px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-gold-light"
              >
                Jetzt Termin buchen
              </button>
            </div>
          </div>
        </div>

        <p className="mt-14 border-t border-cream/10 pt-6 text-center text-xs uppercase tracking-wide text-cream/50">
          {salon.credentials}
        </p>
      </div>
    </section>
  );
}
