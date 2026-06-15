import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import TechEcosystem from "@/components/home/TechEcosystem";
import SolutionFlow from "@/components/home/SolutionFlow";
import IndustrySolutions from "@/components/home/IndustrySolutions";
import CaseStudiesStrip from "@/components/home/CaseStudiesStrip";
import ConsultationForm from "@/components/home/ConsultationForm";
import Footer from "@/components/layout/Footer";
import MeshBackground from "@/components/ui/MeshBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Drifting radial blurred backgrounds */}
      <MeshBackground />

      <Navbar />
      
      <main>
        <HeroSection />
        <WhatWeBuild />
        <TechEcosystem />
        <SolutionFlow />
        <IndustrySolutions />
        <CaseStudiesStrip />
        <ConsultationForm />
      </main>

      <Footer />
    </div>
  );
}
