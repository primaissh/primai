"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePageLayout from "@/components/services/ServicePageLayout";
import MeshBackground from "@/components/ui/MeshBackground";
import { PenTool, TrendingUp, Users, SlidersHorizontal, Filter, Globe } from "lucide-react";

export default function DigitalMarketingService() {
  const subServices = [
    {
      title: "AI-Powered Content Creation",
      description: "Automated brand-voice LLM pipelines that generate high-quality blogs, short-form posts, ad copy, and video scripts at scale.",
      icon: PenTool,
      badge: "Content AI",
      accent: "coral" as const,
    },
    {
      title: "Web3 & Blockchain Growth Marketing",
      description: "Engage communities with expert tokenomics storytelling, whitepaper distribution strategies, and Discord/X growth funnels.",
      icon: TrendingUp,
      badge: "Web3 Growth",
      accent: "neon" as const,
    },
    {
      title: "Crypto Influencer & Community Campaigns",
      description: "Key Opinion Leader (KOL) identification, custom campaign tracking, and transparent on-chain conversion attribution logs.",
      icon: Users,
      badge: "Influencer",
      accent: "electric" as const,
    },
    {
      title: "Predictive Ad Optimization & Automation",
      description: "Machine-learning systems that allocate advertising budgets dynamically, run A/B creative variants, and forecast ROAS curves.",
      icon: SlidersHorizontal,
      badge: "Predictive",
      accent: "emerald" as const,
    },
    {
      title: "AI-Driven Education & Funnel Marketing",
      description: "Create personalized email drip triggers, automate lead nurturing sequences, and monitor cohort churn indicators.",
      icon: Filter,
      badge: "Funnels",
      accent: "amber" as const,
    },
    {
      title: "SEO, Social Media, Google Ads & Branding",
      description: "Technical search engine optimization audits, global PPC campaigns management, and comprehensive brand style guides.",
      icon: Globe,
      badge: "Full Stack",
      accent: "cyan" as const,
    },
  ];

  const processSteps = [
    { title: "Audit & Strategy", desc: "Audit existing conversion funnels, trace competitor market gaps, and select high-priority growth channels." },
    { title: "Content & Creative", desc: "Deploy brand LLM copywriters, draft ad creative versions, and setup landing page templates." },
    { title: "Campaign Execution", desc: "Launch paid ads, coordinate influencer outreach programs, and implement technical SEO optimizations." },
    { title: "Optimise & Report", desc: "Run weekly attribution checkups, reallocate budgets based on ML forecasts, and supply progress reports." },
  ];

  const techLogos = [
    { name: "Google Analytics", color: "hover:text-[#E37400] hover:border-[#E37400]/30" },
    { name: "Meta Ads", color: "hover:text-[#0668E1] hover:border-[#0668E1]/30" },
    { name: "Google Ads", color: "hover:text-[#4285F4] hover:border-[#4285F4]/30" },
    { name: "OpenAI API", color: "hover:text-[#10A37F] hover:border-[#10A37F]/30" },
    { name: "n8n", color: "hover:text-[#FF6C37] hover:border-[#FF6C37]/30" },
  ];

  const metrics = [
    { label: "Managed Ad ROAS", value: 4, prefix: "↑ ", suffix: ".2× Avg" },
    { label: "Organic Traffic Growth", value: 220, prefix: "↑ ", suffix: "%" },
    { label: "Global Brands Scaled", value: 35, suffix: " Brands" },
  ];

  const caseStudy = {
    tag: "ENTERPRISE",
    title: "AI Customer Support & Ticketing System",
    desc: "Deployed semantic search ticket routing saving thousands of manual hours.",
    metric: "↓ 95% First Response",
    slug: "ai-support",
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pb-16">
        <ServicePageLayout
          headline="Advanced Digital Marketing"
          tagline="Deploy predictive growth algorithms, semantic copywriting generators, and target Web3 communities globally."
          heroImage="/images/services/digital-marketing.webp"
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
