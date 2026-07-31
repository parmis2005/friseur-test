"use client";

import { FormEvent, useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { openingHours, salon } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold uppercase text-gold">Kontakt</p>
          <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
            Jetzt Termin anfragen
          </h2>
          <p className="mt-4 text-charcoal/70">
            Schreiben Sie uns oder rufen Sie einfach an – wir melden uns
            schnellstmöglich mit einem passenden Terminvorschlag.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-charcoal/10 bg-cream-dark/30 p-5">
              <MapPin size={20} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="font-medium text-charcoal">Adresse</p>
                <p className="text-sm text-charcoal/65">
                  {salon.street}
                  <br />
                  {salon.zip} {salon.cityName}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-charcoal/10 bg-cream-dark/30 p-5">
              <Phone size={20} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="font-medium text-charcoal">Telefon</p>
                <a href={`tel:${salon.phoneHref}`} className="text-sm text-charcoal/65 hover:text-gold">
                  {salon.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-charcoal/10 bg-cream-dark/30 p-5">
              <Mail size={20} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="font-medium text-charcoal">E-Mail</p>
                <a href={`mailto:${salon.email}`} className="text-sm text-charcoal/65 hover:text-gold">
                  {salon.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-charcoal/10 bg-cream-dark/30 p-5">
              <Clock size={20} className="mt-0.5 shrink-0 text-gold" />
              <div>
                <p className="font-medium text-charcoal">Öffnungszeiten</p>
                <ul className="mt-1 space-y-0.5 text-sm text-charcoal/65">
                  {openingHours.map((slot) => (
                    <li key={slot.day} className="flex justify-between gap-6">
                      <span>{slot.day}</span>
                      <span>{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-charcoal/10 bg-cream-dark/30 p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <h3 className="font-serif text-2xl text-charcoal">Vielen Dank!</h3>
                <p className="mt-3 max-w-sm text-sm text-charcoal/65">
                  Ihre Anfrage wurde erfasst. Wir melden uns in Kürze bei Ihnen,
                  um einen passenden Termin zu finden.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-gold hover:underline"
                >
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-sm font-medium text-charcoal">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                    placeholder="Ihr Name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="text-sm font-medium text-charcoal">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-sm font-medium text-charcoal">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="text-sm font-medium text-charcoal">
                    Gewünschte Leistung
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                  >
                    <option>Damen – Schnitt &amp; Styling</option>
                    <option>Damen – Coloration / Balayage</option>
                    <option>Herren – Schnitt &amp; Bart</option>
                    <option>Sonstiges / Beratung</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-charcoal">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal outline-none focus:border-gold"
                    placeholder="Wunschtermin, Anliegen oder Fragen"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-charcoal px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold sm:w-auto"
                  >
                    Anfrage senden
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
