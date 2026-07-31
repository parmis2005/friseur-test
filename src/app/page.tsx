import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Galerie from "@/components/Galerie";
import VideoShowcase from "@/components/VideoShowcase";
import Produkte from "@/components/Produkte";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Kontakt from "@/components/Kontakt";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <VideoShowcase />
        <Galerie />
        <Produkte />
        <Services />
        <Portfolio />
        <Testimonials />
        <Kontakt />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
