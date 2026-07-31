import Link from "next/link";
import { Scissors } from "lucide-react";
import { salon } from "@/lib/data";

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

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l3 2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal py-10 text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between lg:px-8">
        <div className="flex items-center gap-2 font-serif text-lg text-cream">
          <Scissors size={17} className="text-gold" strokeWidth={1.75} />
          {salon.name}
        </div>

        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} {salon.name} · {salon.street}, {salon.zip} {salon.cityName}
        </p>

        <div className="flex items-center gap-5">
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Google Bewertungen"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
            >
              <GoogleIcon />
            </a>
          </div>
          <div className="flex gap-4 text-xs">
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
