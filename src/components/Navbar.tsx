"use client";

import { useEffect, useState } from "react";
import { Menu, Scissors, X } from "lucide-react";
import { navLinks, salon } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-cream/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#top"
          className={`flex items-center gap-2 font-serif text-xl tracking-tight transition-colors ${
            scrolled || open ? "text-charcoal" : "text-cream"
          }`}
        >
          <Scissors size={20} className="text-gold" strokeWidth={1.75} />
          {salon.name}
        </a>

        <ul
          className={`hidden items-center gap-8 text-sm font-medium transition-colors lg:flex ${
            scrolled || open ? "text-charcoal/80" : "text-cream/82"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-gold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition-colors lg:inline-block ${
            scrolled || open
              ? "bg-charcoal text-cream hover:bg-gold"
              : "bg-cream text-charcoal hover:bg-gold"
          }`}
        >
          Termin buchen
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-full border p-2 transition-colors lg:hidden ${
            scrolled || open ? "border-charcoal/15 text-charcoal" : "border-cream/25 text-cream"
          }`}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-charcoal/10 bg-cream px-6 pb-8 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-charcoal/90 hover:bg-cream-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-charcoal px-5 py-3 text-center text-sm font-medium text-cream"
          >
            Termin buchen
          </a>
        </div>
      )}
    </header>
  );
}
