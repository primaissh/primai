import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-electric/20 bg-electric/5 text-xs font-mono font-medium tracking-wider text-electric uppercase ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
      {children}
    </div>
  );
}
