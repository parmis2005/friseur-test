import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { salon } from "@/lib/data";

export const metadata: Metadata = {
  title: `Datenschutzerklärung | ${salon.name}`,
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:underline">
        <ArrowLeft size={16} />
        Zurück zur Startseite
      </Link>

      <h1 className="mt-8 font-serif text-3xl text-charcoal sm:text-4xl">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-charcoal/75">
        <section>
          <h2 className="font-serif text-lg text-charcoal">1. Verantwortlicher</h2>
          <p className="mt-2">
            {salon.name}, {salon.street}, {salon.zip} {salon.cityName}
            <br />
            E-Mail: {salon.email}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-charcoal">2. Erhebung und Verarbeitung von Daten</h2>
          <p className="mt-2">
            Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden
            Ihre Angaben aus dem Formular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
            den Fall von Anschlussfragen bei uns gespeichert.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-charcoal">3. Cookies</h2>
          <p className="mt-2">
            Diese Website verwendet keine Tracking- oder Analyse-Cookies. Es
            werden ausschließlich technisch notwendige Funktionen
            bereitgestellt.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-charcoal">4. Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
            und Einschränkung der Verarbeitung Ihrer bei uns gespeicherten
            personenbezogenen Daten. Wenden Sie sich hierzu einfach an{" "}
            {salon.email}.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg text-charcoal">Hinweis</h2>
          <p className="mt-2">
            Diese Website ist ein Demo-Projekt zu Anschauungszwecken. Alle
            Angaben zu Name, Adresse und Kontakt sind fiktiv.
          </p>
        </section>
      </div>
    </main>
  );
}
