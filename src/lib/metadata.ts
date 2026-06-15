import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://www.primai.in"),
  title: {
    default: "PrimAI — AI, Blockchain & Quant Trading Solutions",
    template: "%s | PrimAI",
  },
  description:
    "PrimAI builds enterprise AI agents, blockchain infrastructure, and algorithmic trading systems for startups, enterprises, and governments.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "PrimAI",
    url: "https://www.primai.in",
    title: "PrimAI — AI, Blockchain & Quant Trading Solutions",
    description: "Enterprise AI agents, blockchain infrastructure, and algorithmic trading systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PrimAI Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Official_PrimAI",
    title: "PrimAI — AI, Blockchain & Quant Trading Solutions",
    description: "Enterprise AI agents, blockchain infrastructure, and algorithmic trading systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
