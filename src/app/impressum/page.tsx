import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { salon } from "@/lib/data";

export const metadata: Metadata = {
  title: `Impressum | ${salon.name}`,
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline">
        <ArrowLeft size={16} />
        Zurück zur Startseite
      </Link>

      <h1 className="mt-8 font-serif text-3xl text-charcoal sm:text-4xl">Impressum</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal/75">
        <section>
          <h2 className="font-serif text-lg text-charcoal">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            {salon.name}
            <br />
            Sofia Lindgren
            <br />
            {salon.street}
            <br />
            {salon.zip} {salon.cityName}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-charcoal">Kontakt</h2>
          <p className="mt-2">
            Telefon: {salon.phone}
            <br />
            E-Mail: {salon.email}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-charcoal">Umsatzsteuer-ID</h2>
          <p className="mt-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            DE000000000
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-charcoal">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="mt-2">
            Sofia Lindgren, {salon.street}, {salon.zip} {salon.cityName}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-charcoal">Hinweis</h2>
          <p className="mt-2">
            Diese Website ist ein Demo-Projekt. Name, Adresse und alle
            weiteren Kontaktangaben sind frei erfunden und dienen
            ausschließlich Demonstrationszwecken.
          </p>
        </section>
      </div>
    </main>
  );
}
