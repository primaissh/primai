export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PrimAI",
    "url": "https://www.primai.in",
    "logo": "https://www.primai.in/primai-logo.png",
    "sameAs": [
      "https://x.com/Official_PrimAI",
      "https://linkedin.com/company/primai"
    ],
    "description": "PrimAI builds enterprise AI agents, blockchain infrastructure, and algorithmic trading systems."
  };
}

export function getServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "PrimAI",
      "url": "https://www.primai.in"
    },
    "url": `https://www.primai.in${url}`
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.primai.in${item.item}`
    }))
  };
}
