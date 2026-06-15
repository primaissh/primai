"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import MeshBackground from "@/components/ui/MeshBackground";
import { Building2, Rocket, Landmark, Layers, Wallet, Fingerprint } from "lucide-react";

export default function CryptoBlockchainService() {
  const subServices = [
    {
      title: "Centralized Exchange (CEX)",
      description: "Full-stack trading engine featuring a high-performance matching engine, KYC verification flows, and instant liquidity rails.",
      icon: Building2,
      badge: "Exchange",
      accent: "electric" as const,
    },
    {
      title: "ICO / Token Launch",
      description: "End-to-end token offerings covering audited vesting smart contracts, launchpads, and distribution mechanics.",
      icon: Rocket,
      badge: "Launch",
      accent: "electric" as const,
    },
    {
      title: "RWA Tokenization",
      description: "Tokenize real estate deeds, warehouse commodity assets, and financial securities with strict on-chain compliance rules.",
      icon: Landmark,
      badge: "Tokenise",
      accent: "cyan" as const,
    },
    {
      title: "Layer 1 & Layer 2 Development",
      description: "Build custom high-throughput Layer 1 chains or L2 rollups incorporating zero-knowledge state proofs.",
      icon: Layers,
      badge: "Infrastructure",
      accent: "neon" as const,
    },
    {
      title: "Custodian & Non-Custodian Wallets",
      description: "Secure MPC (Multi-Party Computation) custodial wallets alongside client self-sovereign web/mobile browser extensions.",
      icon: Wallet,
      badge: "Wallets",
      accent: "electric" as const,
    },
    {
      title: "Digital Identity on Blockchain",
      description: "On-chain decentralized identity solutions (DID) providing credential management and cryptographically secured KYC validation.",
      icon: Fingerprint,
      badge: "Identity",
      accent: "emerald" as const,
    },
  ];

  const processSteps = [
    { title: "Architecture Design", desc: "Define structural parameters, chain consensus protocols, gas economics, and token distribution roadmaps." },
    { title: "Smart Contract Development", desc: "Engineer Solidity, Rust, or Move contract nodes conforming to strict standard audits." },
    { title: "Integration & Testing", desc: "Deploy configurations to client sandbox testnets, simulating network stress loads and client API connections." },
    { title: "Mainnet Launch & Support", desc: "Deliver live chain deployments, setup validator nodes, and monitor RPC latency performance 24/7." },
  ];

  const techLogos = [
    { name: "Solana", color: "hover:text-[#14F195] hover:border-[#14F195]/30" },
    { name: "Ethereum", color: "hover:text-[#627EEA] hover:border-[#627EEA]/30" },
    { name: "Avalanche", color: "hover:text-[#E84142] hover:border-[#E84142]/30" },
    { name: "Polygon", color: "hover:text-[#8247E5] hover:border-[#8247E5]/30" },
    { name: "Rust", color: "hover:text-[#E57324] hover:border-[#E57324]/30" },
  ];

  const metrics = [
    { label: "Smart Contract Audit Pass", value: 100, suffix: "%" },
    { label: "CEX MVP Timeline", value: 6, suffix: " Wks" },
    { label: "Trading Volume Processed", value: 2, prefix: "$", suffix: "B+" },
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
          headline="Crypto & Blockchain Solutions"
          tagline="Secure, scalable blockchain ecosystems — from exchange matching to digital identity."
          heroImage="/images/services/crypto-blockchain.webp"
          subServices={subServices}
          processSteps={processSteps}
          techLogos={techLogos}
          metrics={metrics}
          relatedCaseStudy={caseStudy}
          glowColor="electric"
        />
      </main>

      <Footer />
    </div>
  );
}
