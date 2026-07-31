import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haarwerk Studio Berlin | Friseursalon in Friedrichshain",
  description:
    "Haarwerk Studio ist Ihr Friseursalon in Berlin-Friedrichshain. Schnitt, Coloration, Balayage und Barbering – persönlich, modern und mit Erfahrung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
