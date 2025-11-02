"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    badge: "BLOCKCHAIN",
    badgeColor: "from-blue-600 to-purple-600",
    title: "Crypto & Blockchain Solutions",
    description: "We design secure, scalable blockchain ecosystems that redefine transparency, trust, and digital ownership.",
    features: [
      "Centralized Exchange (CEX)",
      "ICO (Initial Coin Offering)",
      "RWA Tokenization (Real-World Asset)",
      "Layer 1 & Layer 2 Blockchain Development",
      "Custodian & Non-Custodian Wallets",
      "Digital Identity on Blockchain"
    ],
    illustration: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="gradBlockchain1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#4facfe', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#00f2fe', stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradBlockchain2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#667eea', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#764ba2', stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradBlockchain3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#4facfe', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#00f2fe', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#gradBlockchain1)" opacity="0.1"/>
        <circle cx="200" cy="200" r="140" fill="url(#gradBlockchain2)" opacity="0.15"/>
        <rect x="160" y="140" width="40" height="40" rx="6" fill="white" opacity="0.9" transform="rotate(45 180 160)"/>
        <rect x="180" y="160" width="40" height="40" rx="6" fill="url(#gradBlockchain3)" transform="rotate(45 200 180)"/>
        <rect x="200" y="180" width="40" height="40" rx="6" fill="white" opacity="0.9" transform="rotate(45 220 200)"/>
        <path d="M180 160 L200 180 L220 200" stroke="#4facfe" strokeWidth="3" strokeDasharray="5,5" opacity="0.5">
          <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
        </path>
        <circle cx="120" cy="200" r="20" fill="url(#gradBlockchain3)" opacity="0.8"/>
        <circle cx="280" cy="200" r="20" fill="url(#gradBlockchain3)" opacity="0.8"/>
        <circle cx="200" cy="120" r="20" fill="url(#gradBlockchain3)" opacity="0.8"/>
        <circle cx="200" cy="280" r="20" fill="url(#gradBlockchain3)" opacity="0.8"/>
      </svg>
    )
  },
  {
    badge: "TRADING",
    badgeColor: "from-green-400 to-teal-500",
    title: "Trading & Financial Tools",
    description: " From market analytics to automated execution, our systems give you an intelligent edge in the world of digital finance.",
    features: [
      "AI-Powered Trading Bot ",
      "P2P Trading Platform",
      "Carbon Marketing Solutions",
    ],
    illustration: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="gradTrading1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#43e97b', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#38f9d7', stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradTrading2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#667eea', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#764ba2', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#gradTrading1)" opacity="0.1"/>
        <rect x="80" y="100" width="240" height="200" rx="12" fill="white" opacity="0.9"/>
        <rect x="110" y="160" width="15" height="80" rx="3" fill="#43e97b"/>
        <line x1="117.5" y1="140" x2="117.5" y2="240" stroke="#43e97b" strokeWidth="2"/>
        <rect x="150" y="180" width="15" height="60" rx="3" fill="#ff6b6b"/>
        <line x1="157.5" y1="160" x2="157.5" y2="240" stroke="#ff6b6b" strokeWidth="2"/>
        <rect x="190" y="150" width="15" height="90" rx="3" fill="#43e97b"/>
        <line x1="197.5" y1="130" x2="197.5" y2="240" stroke="#43e97b" strokeWidth="2"/>
        <rect x="230" y="170" width="15" height="50" rx="3" fill="#43e97b"/>
        <line x1="237.5" y1="150" x2="237.5" y2="220" stroke="#43e97b" strokeWidth="2"/>
        <rect x="270" y="140" width="15" height="100" rx="3" fill="#43e97b"/>
        <line x1="277.5" y1="120" x2="277.5" y2="240" stroke="#43e97b" strokeWidth="2"/>
        <path d="M100 220 Q150 200 200 180 T300 140" stroke="#4facfe" strokeWidth="3" fill="none" opacity="0.6"/>
        <circle cx="320" cy="130" r="30" fill="url(#gradTrading2)"/>
        <text x="320" y="138" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">AI</text>
      </svg>
    )
  },
  {
    badge: "AI POWERED",
    badgeColor: "from-pink-500 to-yellow-500",
    title: "AI & Generative Technology",
    description: "Harnessing advanced AI to build generative solutions that think, adapt, and evolve — just like you.",
    features: [
      "Gen AI Bot ",
      "AI Chatbot",
    ],
    illustration: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="gradAI1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#fa709a', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#fee140', stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradAI2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#667eea', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#764ba2', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#gradAI1)" opacity="0.1"/>
        <rect x="130" y="120" width="140" height="160" rx="20" fill="white" opacity="0.9"/>
        <rect x="140" y="130" width="120" height="140" rx="15" fill="url(#gradAI2)"/>
        <circle cx="170" cy="180" r="15" fill="white"/>
        <circle cx="230" cy="180" r="15" fill="white"/>
        <circle cx="173" cy="180" r="8" fill="#667eea">
          <animate attributeName="cx" values="173;177;173" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="233" cy="180" r="8" fill="#667eea">
          <animate attributeName="cx" values="233;237;233" dur="3s" repeatCount="indefinite"/>
        </circle>
        <path d="M170 230 Q200 245 230 230" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <circle cx="100" cy="150" r="6" fill="#fa709a" opacity="0.8">
          <animate attributeName="cy" values="150;130;150" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="300" cy="170" r="8" fill="#fee140" opacity="0.8">
          <animate attributeName="cy" values="170;150;170" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="110" cy="250" r="7" fill="#fa709a" opacity="0.8">
          <animate attributeName="cy" values="250;230;250" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="290" cy="240" r="6" fill="#fee140" opacity="0.8">
          <animate attributeName="cy" values="240;220;240" dur="2.8s" repeatCount="indefinite"/>
        </circle>
        <path d="M100 150 L200 180" stroke="#fa709a" strokeWidth="2" opacity="0.3"/>
        <path d="M300 170 L200 180" stroke="#fee140" strokeWidth="2" opacity="0.3"/>
      </svg>
    )
  },
  {
    badge: "LEARN & EARN",
    badgeColor: "from-teal-400 to-pink-500",
    title: "Education & Community",
    description: "A growing hub for innovators, learners, and creators — uniting people through knowledge, mentorship, and collaboration.",
    features: [
      "Web3 Educational Platform ",
      "MLM-Based Web3 Projects",
    ],
    illustration: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="gradEdu1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#a8edea', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#fed6e3', stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradEdu2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#667eea', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#764ba2', stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradEdu3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:'#a8edea', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#fed6e3', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#gradEdu1)" opacity="0.1"/>
        <rect x="100" y="140" width="200" height="140" rx="12" fill="white" opacity="0.9"/>
        <rect x="110" y="150" width="180" height="120" rx="8" fill="url(#gradEdu2)"/>
        <path d="M200 100 L280 130 L200 160 L120 130 Z" fill="white" opacity="0.9"/>
        <path d="M200 110 L265 135 L200 150 L135 135 Z" fill="url(#gradEdu3)"/>
        <rect x="275" y="130" width="8" height="60" fill="url(#gradEdu3)"/>
        <circle cx="279" cy="130" r="8" fill="#a8edea"/>
        <circle cx="200" cy="210" r="12" fill="white"/>
        <circle cx="160" cy="245" r="10" fill="white" opacity="0.8"/>
        <circle cx="200" cy="245" r="10" fill="white" opacity="0.8"/>
        <circle cx="240" cy="245" r="10" fill="white" opacity="0.8"/>
        <line x1="200" y1="210" x2="160" y2="245" stroke="white" strokeWidth="2" opacity="0.5"/>
        <line x1="200" y1="210" x2="200" y2="245" stroke="white" strokeWidth="2" opacity="0.5"/>
        <line x1="200" y1="210" x2="240" y2="245" stroke="white" strokeWidth="2" opacity="0.5"/>
      </svg>
    )
  },
  {
    badge: "MARKETING",
    badgeColor: "from-orange-500 to-red-500",
    title: "Advanced Digital Marketing",
    description: "From performance analytics to predictive strategy — we help brands evolve, engage, and expand globally.",
    features: [
      "AI-Powered Content Creation",
      "Web3 & Blockchain Growth Marketing",
      "Crypto Influencer & Community Campaigns",
      "Predictive Ad Optimization & Automation",
      "AI-Driven Education & Funnel Marketing",
      "SEO, Social Media Marketing, Google Ads, Branding",
    ],
    illustration: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="gradMarketing1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:'#ff9a9e', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#fecfef', stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradMarketing2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:'#667eea', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#764ba2', stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="gradMarketing3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:'#ff9a9e', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:'#fecfef', stopOpacity:1}} />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="180" fill="url(#gradMarketing1)" opacity="0.1"/>
        <rect x="100" y="140" width="200" height="140" rx="12" fill="white" opacity="0.9"/>
        <rect x="110" y="150" width="180" height="120" rx="8" fill="url(#gradMarketing2)"/>
        <path d="M200 100 L280 130 L200 160 L120 130 Z" fill="white" opacity="0.9"/>
        <path d="M200 110 L265 135 L200 150 L135 135 Z" fill="url(#gradMarketing3)"/>
        <rect x="275" y="130" width="8" height="60" fill="url(#gradMarketing3)"/>
        <circle cx="279" cy="130" r="8" fill="#ff9a9e"/>
        <circle cx="200" cy="210" r="12" fill="white"/>
        <circle cx="160" cy="245" r="10" fill="white" opacity="0.8"/>
        <circle cx="200" cy="245" r="10" fill="white" opacity="0.8"/>
        <circle cx="240" cy="245" r="10" fill="white" opacity="0.8"/>
        <line x1="200" y1="210" x2="160" y2="245" stroke="white" strokeWidth="2" opacity="0.5"/>
        <line x1="200" y1="210" x2="200" y2="245" stroke="white" strokeWidth="2" opacity="0.5"/>
        <line x1="200" y1="210" x2="240" y2="245" stroke="white" strokeWidth="2" opacity="0.5"/>
        <circle cx="150" cy="180" r="15" fill="#ff6b6b" opacity="0.8"/>
        <circle cx="250" cy="180" r="15" fill="#4ecdc4" opacity="0.8"/>
        <path d="M170 180 Q200 165 230 180" stroke="#ff9a9e" strokeWidth="3" fill="none" opacity="0.6"/>
      </svg>
    )
  }
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[120px] px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-[60px]">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-[1.1]">PrimAI Innovation Suite</h2>
          <p className="text-xl text-gray-600 leading-8">Comprehensive Solutions for the Decentralized Future</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white p-[60px] shadow-xl border border-gray-200">
          <div className="overflow-hidden relative">
            <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full flex items-center justify-center gap-16 px-5 flex-shrink-0">
                  <div className="flex-1 max-w-[500px] space-y-6">
                    <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${slide.badgeColor} text-white rounded-full text-sm font-bold uppercase tracking-wider`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {slide.badge}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{slide.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{slide.description}</p>
                    <ul className="space-y-3 mb-8">
                      {slide.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="text-gray-400">→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-base hover:shadow-lg hover:scale-105 transition-all flex items-center gap-3">
                      Explore Solutions
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  <div className="flex-1 max-w-[500px] flex items-center justify-center">
                    <div className="w-full h-full relative flex items-center justify-center">
                      {slide.illustration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-100 ease-linear" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-indigo-600 w-8 rounded-md'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}