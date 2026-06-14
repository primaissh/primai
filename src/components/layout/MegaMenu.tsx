"use client";

import Link from "next/link";
import { Terminal, Cpu, Share2, TrendingUp, BarChart2, Heart, Package, Landmark, Info, Users, Handshake, Mail, Layers } from "lucide-react";

interface MegaMenuItem {
  title: string;
  description: string;
  path: string;
  icon: any;
}

interface MegaMenuPanelProps {
  category: "solutions" | "industries" | "company";
  onClose: () => void;
}

export const solutionsColumns = [
  {
    title: "AI & Automation",
    items: [
      {
        title: "AI & Generative Technology",
        description: "Enterprise multi-agent orchestrations, vector models, and context RAG nodes.",
        path: "/services/ai-generative",
        icon: Cpu,
      },
      {
        title: "AI Solutions",
        description: "Custom AI agents, LLM integrations, RAG pipelines, and neural models.",
        path: "/services/ai-solutions",
        icon: Cpu,
      },
      {
        title: "Enterprise Automation",
        description: "Optimize workflows using n8n, Zapier, and custom automation scripts.",
        path: "/services/automation",
        icon: Share2,
      },
    ],
  },
  {
    title: "Blockchain & Finance",
    items: [
      {
        title: "Crypto & Blockchain Solutions",
        description: "Centralized exchange matching cores, audited smart tokens, and wallets.",
        path: "/services/crypto-blockchain",
        icon: Terminal,
      },
      {
        title: "Trading & Financial Tools",
        description: "Algorithmic trading signals, P2P marketplaces, and ESG credit tokenization.",
        path: "/services/trading-financial",
        icon: TrendingUp,
      },
      {
        title: "Web3 & Blockchain",
        description: "Smart contracts, on-chain mechanics, tokenization, and dApps.",
        path: "/services/web3-blockchain",
        icon: Terminal,
      },
      {
        title: "Quant Trading Engines",
        description: "High-frequency trading bots, signal analysis, and backtesting systems.",
        path: "/services/quant-trading",
        icon: TrendingUp,
      },
    ],
  },
  {
    title: "Growth & Community",
    items: [
      {
        title: "Advanced Digital Marketing",
        description: "AI copywriting pipelines, paid ad forecasting, and technical SEO funnels.",
        path: "/services/digital-marketing",
        icon: BarChart2,
      },
      {
        title: "Education & Community",
        description: "Cohort LMS classroom hubs, DAO structures, and referral staking rewards.",
        path: "/services/education-community",
        icon: Users,
      },
      {
        title: "Digital Transformation",
        description: "Deep scraping, social sentiment analysis, and predictive growth pipelines.",
        path: "/services/digital-transformation",
        icon: BarChart2,
      },
      {
        title: "Enterprise Software",
        description: "Cloud-native web applications built on Next.js, Node, and Kubernetes clusters.",
        path: "/services/enterprise-software",
        icon: Layers,
      },
    ],
  },
];

export const megaMenuData: Record<string, MegaMenuItem[]> = {
  industries: [
    {
      title: "Finance & Banking",
      description: "AI-driven fraud detection, risk management, and intelligent auditing.",
      path: "/industries#finance",
      icon: Landmark,
    },
    {
      title: "Quant Trading",
      description: "Real-time indicators, backtesting engines, and predictive analytics.",
      path: "/industries#trading",
      icon: BarChart2,
    },
    {
      title: "Healthcare",
      description: "Process automation, document analysis, and diagnostic AI support.",
      path: "/industries#healthcare",
      icon: Heart,
    },
    {
      title: "Logistics",
      description: "Intelligent dispatching, route optimization, and tracking bots.",
      path: "/industries#logistics",
      icon: Package,
    },
  ],
  company: [
    {
      title: "About PrimAI",
      description: "Learn about our mission, timelines, and technical values.",
      path: "/about",
      icon: Info,
    },
    {
      title: "Careers",
      description: "Build what the future runs on. Join our engineering team.",
      path: "/careers",
      icon: Users,
    },
    {
      title: "Partner With Us",
      description: "Refer clients, bundle services, and earn high commissions.",
      path: "/partner",
      icon: Handshake,
    },
    {
      title: "Contact Us",
      description: "Get direct support or schedule your consultation call.",
      path: "/contact-us",
      icon: Mail,
    },
  ],
};

export default function MegaMenu({ category, onClose }: MegaMenuPanelProps) {
  if (category === "solutions") {
    return (
      <div className="absolute top-[calc(100%+8px)] left-0 right-0 w-full bg-[#0A0B12] border border-border rounded-2xl p-6 shadow-2xl backdrop-blur-2xl grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-3 duration-250 z-50">
        {solutionsColumns.map((col, cIdx) => (
          <div key={cIdx} className="space-y-4">
            <h5 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider pl-3">
              {col.title}
            </h5>
            <div className="space-y-1">
              {col.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    href={item.path}
                    onClick={onClose}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-glass border border-transparent hover:border-border transition-all group cursor-pointer"
                  >
                    <div className="p-1.5 rounded-lg bg-electric/10 text-electric group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h6 className="font-semibold text-text-primary text-xs group-hover:text-electric transition-colors">
                        {item.title}
                      </h6>
                      <p className="text-[10px] text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const items = megaMenuData[category] || [];

  return (
    <div className="absolute top-[calc(100%+8px)] left-0 right-0 w-full bg-[#0A0B12] border border-border rounded-2xl p-6 shadow-2xl backdrop-blur-2xl grid grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-top-3 duration-250 z-50">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <Link
            key={idx}
            href={item.path}
            onClick={onClose}
            className="flex flex-col gap-2 p-4 rounded-xl hover:bg-glass border border-transparent hover:border-border transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-electric/10 text-electric group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-text-primary text-sm group-hover:text-electric transition-colors">
                {item.title}
              </h4>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed pl-1">
              {item.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
