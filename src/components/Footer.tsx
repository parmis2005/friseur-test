import Link from "next/link";
import { Scissors } from "lucide-react";
import { navLinks, openingHours, salon } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v7h3v-7h2.2l.8-3H14v-1.5A0.5 0.5 0 0 1 14.5 9H15z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-serif text-lg text-cream">
              <Scissors size={18} className="text-gold" strokeWidth={1.75} />
              {salon.name}
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              {salon.claim}
              <br />
              Ihr Friseursalon in {salon.city}.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Kontakt</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                {salon.street}
                <br />
                {salon.zip} {salon.cityName}
              </li>
              <li>
                <a href={`tel:${salon.phoneHref}`} className="transition-colors hover:text-gold">
                  {salon.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${salon.email}`} className="transition-colors hover:text-gold">
                  {salon.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">Öffnungszeiten</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {openingHours.map((slot) => (
                <li key={slot.day} className="flex justify-between gap-4">
                  <span>{slot.day}</span>
                  <span className="text-cream/60">{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {salon.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-5">
            <Link href="/impressum" className="transition-colors hover:text-gold">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-gold">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
