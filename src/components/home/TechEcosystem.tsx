"use client";

import SectionLabel from "../ui/SectionLabel";

export default function TechEcosystem() {
  const row1 = [
    { name: "OpenAI", color: "hover:text-[#10A37F] hover:border-[#10A37F]/30" },
    { name: "Anthropic", color: "hover:text-[#F1E9DA] hover:border-[#F1E9DA]/30" },
    { name: "LangChain", color: "hover:text-[#38BDF8] hover:border-[#38BDF8]/30" },
    { name: "CrewAI", color: "hover:text-[#EC4899] hover:border-[#EC4899]/30" },
    { name: "AutoGen", color: "hover:text-[#F59E0B] hover:border-[#F59E0B]/30" },
    { name: "Hugging Face", color: "hover:text-[#FFD21E] hover:border-[#FFD21E]/30" },
    { name: "Mistral", color: "hover:text-[#FD5E53] hover:border-[#FD5E53]/30" },
  ];

  const row2 = [
    { name: "Solana", color: "hover:text-[#14F195] hover:border-[#14F195]/30" },
    { name: "Ethereum", color: "hover:text-[#627EEA] hover:border-[#627EEA]/30" },
    { name: "Avalanche", color: "hover:text-[#E84142] hover:border-[#E84142]/30" },
    { name: "Polygon", color: "hover:text-[#8247E5] hover:border-[#8247E5]/30" },
    { name: "AWS", color: "hover:text-[#FF9900] hover:border-[#FF9900]/30" },
    { name: "Azure", color: "hover:text-[#0078D4] hover:border-[#0078D4]/30" },
    { name: "Google Cloud", color: "hover:text-[#4285F4] hover:border-[#4285F4]/30" },
    { name: "Kubernetes", color: "hover:text-[#326CE5] hover:border-[#326CE5]/30" },
    { name: "Docker", color: "hover:text-[#2496ED] hover:border-[#2496ED]/30" },
  ];

  // Double arrays to ensure smooth infinite loop gap filling
  const dRow1 = [...row1, ...row1, ...row1, ...row1];
  const dRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="py-24 overflow-hidden relative z-10 bg-void">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 space-y-4">
        <SectionLabel>Technology Ecosystem</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">
          The Stack Behind Everything We Build
        </h2>
        <p className="text-sm md:text-base text-text-secondary max-w-xl mx-auto">
          We integrate best-in-class tools and robust protocols so you don&apos;t have to make architectural tradeoffs.
        </p>
      </div>

      <div className="space-y-6">
        {/* Row 1: Left-to-Right */}
        <div className="flex w-full group overflow-hidden">
          <div className="flex animate-scroll hover:[animation-play-state:paused] gap-4 py-2 logo-loop-container">
            {dRow1.map((item, idx) => (
              <div
                key={idx}
                className={`w-[140px] h-[56px] bg-glass border border-border rounded-xl flex items-center justify-center font-mono font-bold text-sm text-text-muted select-none transition-all duration-300 ${item.color} cursor-default`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right-to-Left */}
        <div className="flex w-full group overflow-hidden">
          <div className="flex animate-scroll-reverse hover:[animation-play-state:paused] gap-4 py-2 logo-loop-container">
            {dRow2.map((item, idx) => (
              <div
                key={idx}
                className={`w-[140px] h-[56px] bg-glass border border-border rounded-xl flex items-center justify-center font-mono font-bold text-sm text-text-muted select-none transition-all duration-300 ${item.color} cursor-default`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
