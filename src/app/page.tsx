import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <CoverflowCarousel />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
