import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "outline";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const styles = {
    primary: "bg-electric/10 text-electric border-electric/25",
    secondary: "bg-neon/10 text-neon border-neon/25",
    success: "bg-emerald/10 text-emerald border-emerald/25",
    outline: "bg-transparent text-text-secondary border-border",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
