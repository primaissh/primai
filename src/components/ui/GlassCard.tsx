"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "electric" | "neon" | "cyan";
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "electric",
  hoverEffect = true,
}: GlassCardProps) {
  const glowShadows = {
    electric: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:border-electric",
    neon: "hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] hover:border-neon",
    cyan: "hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:border-cyan",
  };

  const borderTransition = "transition-[border-color,box-shadow] duration-300";

  return (
    <div
      className={`bg-glass border border-border rounded-2xl backdrop-blur-md p-6 ${
        hoverEffect ? `${glowShadows[glowColor]} ${borderTransition}` : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
