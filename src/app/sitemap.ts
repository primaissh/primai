import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.primai.in";

  const paths = [
    "",
    "/about",
    "/services",
    "/services/ai-solutions",
    "/services/automation",
    "/services/web3-blockchain",
    "/services/quant-trading",
    "/services/enterprise-software",
    "/services/digital-transformation",
    "/services/crypto-blockchain",
    "/services/trading-financial",
    "/services/ai-generative",
    "/services/education-community",
    "/services/digital-marketing",
    "/industries",
    "/case-studies",
    "/case-studies/hedge-fund-arbitrage",
    "/case-studies/autonomous-procurement",
    "/case-studies/rwa-tokenization",
    "/case-studies/ai-support",
    "/technology",
    "/book-consultation",
    "/contact-us",
  ];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));
}
