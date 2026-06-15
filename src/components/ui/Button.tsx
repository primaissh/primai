import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "filled" | "ghost" | "outline";
  glow?: boolean;
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = "filled",
  glow = false,
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-[10px] transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-electric/50 active:scale-95";

  const variants = {
    filled: "bg-electric text-white hover:bg-blue-600 shadow-md shadow-electric/10 hover:shadow-lg hover:shadow-electric/20",
    ghost: "bg-transparent text-text-primary hover:bg-glass border border-transparent",
    outline: "bg-transparent text-text-primary border border-border hover:border-electric hover:bg-glass",
  };

  const glowStyle = glow && variant === "filled" ? "hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]" : "";

  const classes = `${baseStyles} ${variants[variant]} ${glowStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
