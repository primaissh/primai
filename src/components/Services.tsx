"use client";

import { useState, useEffect } from "react";

// Service slides for carousel
const serviceSlides = [
  {
    badge: "BLOCKCHAIN",
    badgeColor: "from-blue-600 to-purple-600",
    title: "Crypto & Blockchain Solutions",
    description: "Secure, scalable blockchain ecosystems that redefine transparency, trust, and digital ownership.",
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
    description: "From market analytics to automated execution, our systems give you an intelligent edge in the world of digital finance.",
    features: [
      "AI-Powered Trading Bot",
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
      "Gen AI Bot",
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
      "Web3 Educational Platform",
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

// Mobile-first service cards
const mobileServices = [
  {
    id: "blockchain",
    title: "Crypto & Blockchain Solutions",
    description: "Secure, scalable blockchain ecosystems for the decentralized future",
    icon: "🔗",
    gradient: "from-blue-500 to-purple-600",
    features: [
      "Centralized Exchange (CEX)",
      "ICO (Initial Coin Offering)",
      "RWA Tokenization",
      "Layer 1 & Layer 2 Development",
      "Custodian & Non-Custodian Wallets",
      "Digital Identity on Blockchain"
    ]
  },
  {
    id: "trading",
    title: "Trading & Financial Tools",
    description: "AI-powered trading solutions for intelligent financial markets",
    icon: "📈",
    gradient: "from-green-500 to-teal-500",
    features: [
      "AI-Powered Trading Bot",
      "P2P Trading Platform",
      "Carbon Marketing Solutions"
    ]
  },
  {
    id: "ai",
    title: "AI & Generative Technology",
    description: "Advanced AI solutions that think, adapt, and evolve",
    icon: "🤖",
    gradient: "from-pink-500 to-yellow-500",
    features: [
      "Gen AI Bot",
      "AI Chatbot"
    ]
  },
  {
    id: "education",
    title: "Education & Community",
    description: "Web3 educational platforms and community-driven projects",
    icon: "🎓",
    gradient: "from-teal-500 to-pink-500",
    features: [
      "Web3 Educational Platform",
      "MLM-Based Web3 Projects"
    ]
  },
  {
    id: "marketing",
    title: "Advanced Digital Marketing",
    description: "Performance-driven marketing solutions for global brands",
    icon: "📊",
    gradient: "from-orange-500 to-red-500",
    features: [
      "AI-Powered Content Creation",
      "Web3 & Blockchain Growth Marketing",
      "Crypto Influencer Campaigns",
      "Predictive Ad Optimization",
      "AI-Driven Education & Funnel Marketing",
      "SEO, Social Media, Google Ads, Branding"
    ]
  }
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState(mobileServices[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % serviceSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 md:py-[120px] px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-[60px]">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">PrimAI Innovation Suite</h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed md:leading-8 px-2">Comprehensive Solutions for the Decentralized Future</p>
        </div>

        {/* Mobile-First Service Cards */}
        <div className="space-y-4 md:hidden">
          {mobileServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() => setActiveService(activeService === service.id ? '' : service.id)}
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-lg`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${activeService === service.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Expandable Features */}
              {activeService === service.id && (
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-indigo-600 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium min-h-[44px] hover:shadow-lg transition-all">
                    Explore Solutions
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Auto-Scrolling Carousel */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-white p-6 md:p-[60px] shadow-xl border border-gray-200">
            <div className="overflow-hidden relative">
              <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {serviceSlides.map((slide, index) => (
                  <div key={index} className="min-w-full flex flex-col md:flex-row md:items-center md:justify-center gap-6 md:gap-16 px-1 md:px-5 flex-shrink-0">
                    <div className="flex-1 max-w-full md:max-w-[500px] space-y-3 md:space-y-6 order-2 md:order-1 px-2 md:px-0">
                      <div className={`inline-flex items-center gap-2 px-3 md:px-6 py-1.5 md:py-3 bg-gradient-to-r ${slide.badgeColor} text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-wider`}>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                        {slide.badge}
                      </div>
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{slide.title}</h3>
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-8">{slide.description}</p>
                      <ul className="space-y-3 md:space-y-3 mb-6 md:mb-8">
                        {slide.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 md:gap-3 text-gray-700 font-medium text-base md:text-base">
                            <span className="text-indigo-600 mt-0.5 md:mt-0 text-lg">•</span>
                            <span className="flex-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 md:px-10 py-4 rounded-full font-bold text-base md:text-base hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3 md:gap-3 min-h-[48px] w-full md:w-auto">
                        Explore Solutions
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>

                    <div className="flex-1 max-w-full md:max-w-[500px] flex items-center justify-center order-1 md:order-2 px-2 md:px-0">
                      <div className="w-full h-56 md:h-full relative flex items-center justify-center">
                        {slide.illustration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-100 ease-linear" style={{ width: `${((currentSlide + 1) / serviceSlides.length) * 100}%` }}></div>
            </div>
          </div>

          {/* Dots - Touch friendly */}
          <div className="flex justify-center gap-3 md:gap-3 mt-6 md:mt-10">
            {serviceSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-all min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center ${
                  index === currentSlide
                    ? 'bg-indigo-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
