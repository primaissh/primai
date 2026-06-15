"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import MeshBackground from "@/components/ui/MeshBackground";
import { Bot, ArrowLeftRight, Leaf } from "lucide-react";

export default function TradingFinancialService() {
  const subServices = [
    {
      title: "AI-Powered Trading Bot",
      description: "Machine learning signal generation, multi-parameter backtesting engine, and live trade execution modules across CEX and DEX API channels.",
      icon: Bot,
      badge: "Algorithmic",
      accent: "emerald" as const,
    },
    {
      title: "P2P Trading Platform",
      description: "Escrow-secured peer-to-peer marketplaces featuring multi-currency fiat gateways and compliance integrations.",
      icon: ArrowLeftRight,
      badge: "P2P",
      accent: "cyan" as const,
    },
    {
      title: "Carbon Market Solutions",
      description: "Tokenize carbon credits, automate Measurement, Reporting and Verification (MRV), and build ESG portfolio dashboards.",
      icon: Leaf,
      badge: "ESG",
      accent: "emerald" as const,
    },
  ];

  const processSteps = [
    { title: "Strategy Definition", desc: "Select target assets, define risk parameters, establish stop-losses, and map raw signal sources." },
    { title: "Model Development", desc: "Train machine learning models and backtest configurations against 5+ years of historical exchange tick datasets." },
    { title: "Paper Trading", desc: "Run simulated executions on live feed streams to confirm Sharpe and Sortino ratios." },
    { title: "Live Deployment", desc: "Securely bridge CEX/DEX exchange private keys and set up automated margin kill-switches." },
  ];

  const techLogos = [
    { name: "Python", color: "hover:text-[#3776AB] hover:border-[#3776AB]/30" },
    { name: "Rust", color: "hover:text-[#E57324] hover:border-[#E57324]/30" },
    { name: "Docker", color: "hover:text-[#2496ED] hover:border-[#2496ED]/30" },
    { name: "Kubernetes", color: "hover:text-[#326CE5] hover:border-[#326CE5]/30" },
    { name: "PineScript", color: "hover:text-[#2962FF] hover:border-[#2962FF]/30" },
  ];

  const metrics = [
    { label: "Sharpe Ratio Boost", value: 3, suffix: "× Avg" },
    { label: "Order Execution Latency", value: 10, suffix: "ms" },
    { label: "Exchanges Integrated", value: 18, suffix: " Nodes" },
  ];

  const caseStudy = {
    tag: "FINTECH",
    title: "Hedge Fund Arbitrage Execution Engine",
    desc: "Built a sub-millisecond multi-exchange spot & futures arbitrage executor.",
    metric: "↑ 340% Trading Volume",
    slug: "hedge-fund-arbitrage",
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pb-16">
        <ServicePageLayout
          headline="Trading & Financial Tools"
          tagline="AI-powered mathematical models and high-frequency execution pipelines for markets that never sleep."
          heroImage="/images/services/trading-tools.webp"
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
