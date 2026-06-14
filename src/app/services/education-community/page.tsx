"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import MeshBackground from "@/components/ui/MeshBackground";
import { GraduationCap, Network } from "lucide-react";

export default function EducationCommunityService() {
  const subServices = [
    {
      title: "Web3 Educational Platform",
      description: "LMS environments supporting blockchain wallet sign-ins, DAO governance protocols, cohort classrooms, and cryptographic NFT certificates.",
      icon: GraduationCap,
      badge: "EdTech",
      accent: "amber" as const,
    },
    {
      title: "Decentralised Incentive Networks",
      description: "Engineered referral and staking layers with automated on-chain reward splits, smart contract vesting, and analytical affiliate performance dashboards.",
      icon: Network,
      badge: "Community",
      accent: "emerald" as const,
    },
  ];

  const processSteps = [
    { title: "Curriculum Architecture", desc: "Formulate study milestones, design reward tier pathways, and structure test modules." },
    { title: "Platform Development", desc: "Program LMS backends, configure wallet signatures, and write NFT certificate mint protocols." },
    { title: "Community Setup", desc: "Build Discord channels, program verification bots, and coordinate governance proposals." },
    { title: "Growth & Retention", desc: "Launch student cohorts, establish leaderboard rewards, and audit smart contract split pools." },
  ];

  const techLogos = [
    { name: "Next.js", color: "hover:text-white hover:border-white/30" },
    { name: "Solidity", color: "hover:text-[#627EEA] hover:border-[#627EEA]/30" },
    { name: "PostgreSQL", color: "hover:text-[#336791] hover:border-[#336791]/30" },
    { name: "Ethereum", color: "hover:text-[#627EEA] hover:border-[#627EEA]/30" },
    { name: "Discord API", color: "hover:text-[#5865F2] hover:border-[#5865F2]/30" },
  ];

  const metrics = [
    { label: "Learning Cohorts Launched", value: 12, suffix: " Cohorts" },
    { label: "Learners Onboarded", value: 5000, suffix: "+" },
    { label: "Credential Verification Pass", value: 98, suffix: "%" },
  ];

  const caseStudy = {
    tag: "WEB3 INFRA",
    title: "RWA Real Estate Tokenization Nodes",
    desc: "Architected regulatory-compliant minting smart contracts on Avalanche.",
    metric: "$120M+ On-chain Volume",
    slug: "rwa-tokenization",
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pb-16">
        <ServicePageLayout
          headline="Education & Community"
          tagline="Knowledge infrastructure and decentralised incentive networks built for the Web3 generation."
          heroImage="/images/services/education-community.webp"
          subServices={subServices}
          processSteps={processSteps}
          techLogos={techLogos}
          metrics={metrics}
          relatedCaseStudy={caseStudy}
          glowColor="cyan"
        />
      </main>

      <Footer />
    </div>
  );
}
