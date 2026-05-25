"use client";

import { useEffect, useRef } from "react";

function AppleStoreSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

function PlayStoreSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M3.18 23.76c.39.22.84.22 1.23 0l11.45-6.57-2.53-2.54L3.18 23.76zM.5 1.86C.19 2.2 0 2.71 0 3.38v17.25c0 .67.19 1.18.5 1.52l.08.08 9.66-9.66v-.23L.58 1.78.5 1.86zm15.04 8.29l-2.56-2.56-9.8-5.63c-.39-.22-.84-.22-1.23 0C1.56 2.19 1.31 2.72 1.31 3.38v.41l12.22 7.02 1.01-1.01.5-.65zm1.96 1.13l-1.51.87-2.02 1.16 2.54 2.54 2.82-1.62c.79-.46.79-1.2 0-1.66l-1.83-1.29z"/>
    </svg>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="hero-pattern min-h-screen flex items-center relative overflow-hidden"
      ref={heroRef}
    >
      {/* Decorative circles */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full border border-gold/10 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-64 h-64 rounded-full border border-gold/8 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-1/3 w-px h-40 bg-gradient-to-b from-transparent via-gold/20 to-transparent pointer-events-none" />

      {/* Floating hexagon accents */}
      <div className="absolute top-32 right-1/4 opacity-20 animate-float pointer-events-none">
        <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
          <polygon points="30,2 58,17 58,53 30,68 2,53 2,17" stroke="#C87C2A" strokeWidth="1" fill="none"/>
        </svg>
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 animate-float pointer-events-none" style={{ animationDelay: "2s" }}>
        <svg width="40" height="46" viewBox="0 0 40 46" fill="none">
          <polygon points="20,2 38,12 38,34 20,44 2,34 2,12" stroke="#C87C2A" strokeWidth="1" fill="rgba(200,124,42,0.1)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="badge bg-gold/15 border border-gold/30 text-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Now Available in Saudi Arabia
              </span>
            </div>

            {/* Headline */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 space-y-3"
              style={{ transitionDelay: "0.2s" }}
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Your Premium
                <br />
                <span className="gold-shimmer">Community,</span>
                <br />
                Managed Brilliantly
              </h1>
              <p
                className="text-2xl lg:text-3xl text-white/40 font-light arabic mt-4"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                مجتمعك الفاخر، تُدار باحتراف
              </p>
            </div>

            {/* Subtext */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 space-y-3"
              style={{ transitionDelay: "0.3s" }}
            >
              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                Sevenhood connects residents, operators, and service providers
                in one seamless platform built for Saudi Arabia&apos;s finest
                communities.
              </p>
              <p
                className="text-base text-white/40 leading-relaxed arabic"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                سابع جار يربط السكان والمشغلين ومزودي الخدمات في منصة واحدة متكاملة مصممة لأفخم المجتمعات السعودية
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex flex-col sm:flex-row gap-4"
              style={{ transitionDelay: "0.4s" }}
            >
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gold hover:bg-gold-light text-white font-semibold rounded-2xl transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:-translate-y-1"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Download App
              </a>
              <a
                href="#operators"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/25 text-white font-semibold rounded-2xl hover:bg-white/8 hover:border-white/40 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
                Operator Login
                <span
                  className="arabic-inline text-white/50 text-sm"
                  style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                >
                  دخول المشغل
                </span>
              </a>
            </div>

            {/* App Store Badges */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex flex-col sm:flex-row gap-3"
              style={{ transitionDelay: "0.5s" }}
            >
              <a
                href="#download"
                className="store-btn flex items-center gap-3 px-5 py-3 bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/30 rounded-xl transition-all duration-200 group"
              >
                <div className="text-white">
                  <AppleStoreSVG />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Download on the</p>
                  <p className="text-white font-semibold text-sm">App Store</p>
                </div>
              </a>
              <a
                href="#download"
                className="store-btn flex items-center gap-3 px-5 py-3 bg-white/8 hover:bg-white/12 border border-white/15 hover:border-white/30 rounded-xl transition-all duration-200"
              >
                <div className="text-white">
                  <PlayStoreSVG />
                </div>
                <div>
                  <p className="text-white/50 text-xs">Get it on</p>
                  <p className="text-white font-semibold text-sm">Google Play</p>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 grid grid-cols-3 gap-6 pt-2"
              style={{ transitionDelay: "0.6s" }}
            >
              {[
                { value: "50+", label: "Communities", ar: "مجتمع" },
                { value: "12K+", label: "Residents", ar: "ساكن" },
                { value: "4.9★", label: "App Rating", ar: "تقييم" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-bold text-white stat-number">{stat.value}</p>
                  <p className="text-white/50 text-xs">{stat.label}</p>
                  <p
                    className="text-white/30 text-xs arabic-inline"
                    style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                  >
                    {stat.ar}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: App Mockup */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 relative"
            style={{ transitionDelay: "0.35s" }}
          >
            <div className="relative mx-auto max-w-sm">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-75" />

              {/* Phone frame */}
              <div className="relative z-10 mx-auto w-72 animate-float">
                <div className="relative bg-[#06120B] rounded-[3rem] border-2 border-white/10 shadow-2xl overflow-hidden aspect-[9/19]">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20" />

                  {/* Screen content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0D2818] to-[#081A10] flex flex-col">
                    {/* Status bar */}
                    <div className="pt-10 px-6 flex justify-between items-center">
                      <span className="text-white/60 text-xs">9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-4 h-2 border border-white/40 rounded-sm">
                          <div className="w-3 h-full bg-white/40 rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="px-6 pt-4 pb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/50 text-xs">Good Morning</p>
                          <p className="text-white font-semibold text-sm">Khaled Al-Mansouri</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                          <span className="text-gold text-xs font-bold">K</span>
                        </div>
                      </div>
                    </div>

                    {/* Community card */}
                    <div className="mx-4 mb-3 p-3 rounded-2xl bg-gold/10 border border-gold/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-gold text-xs font-semibold">Roshn Front</p>
                          <p className="text-white font-bold text-sm">Villa 7, Gate A</p>
                          <p
                            className="text-white/40 text-xs mt-0.5 arabic-inline"
                            style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                          >
                            مجمع روشن فرونت
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-gold/20 flex items-center justify-center">
                          <span className="text-lg">🏡</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="px-4 mb-3">
                      <p className="text-white/40 text-xs mb-2 font-medium">Quick Actions</p>
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { icon: "🔧", label: "Fix" },
                          { icon: "🏊", label: "Pool" },
                          { icon: "🚗", label: "Gate" },
                          { icon: "💬", label: "Chat" },
                        ].map((action) => (
                          <div key={action.label} className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-lg">
                              {action.icon}
                            </div>
                            <span className="text-white/40 text-xs">{action.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Notification card */}
                    <div className="mx-4 p-3 rounded-xl bg-white/5 border border-white/8 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-sm flex-shrink-0">
                        ✅
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-medium truncate">Maintenance complete</p>
                        <p className="text-white/40 text-xs">A/C unit serviced · just now</p>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#06120B]/90 border-t border-white/8 flex items-center justify-around px-2">
                      {["🏠", "📅", "🔧", "👥", "⚙️"].map((icon, i) => (
                        <button
                          key={i}
                          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl ${
                            i === 0 ? "text-gold" : "text-white/30"
                          }`}
                        >
                          <span className="text-lg">{icon}</span>
                          {i === 0 && <div className="w-1 h-1 rounded-full bg-gold" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Side button details */}
                <div className="absolute -right-1 top-20 w-0.5 h-10 bg-white/10 rounded-full" />
                <div className="absolute -left-1 top-16 w-0.5 h-6 bg-white/10 rounded-full" />
                <div className="absolute -left-1 top-24 w-0.5 h-8 bg-white/10 rounded-full" />
                <div className="absolute -left-1 top-34 w-0.5 h-8 bg-white/10 rounded-full" />
              </div>

              {/* Floating notification cards */}
              <div className="absolute -left-12 top-24 bg-white rounded-2xl shadow-2xl p-3 flex items-center gap-3 z-20 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-9 h-9 rounded-xl bg-forest flex items-center justify-center text-lg flex-shrink-0">
                  🔑
                </div>
                <div>
                  <p className="text-forest text-xs font-semibold">Visitor Arrived</p>
                  <p className="text-gray-400 text-xs">Gate B · 2 min ago</p>
                </div>
              </div>

              <div className="absolute -right-8 bottom-32 bg-[#0D2818] border border-gold/30 rounded-2xl shadow-2xl p-3 flex items-center gap-3 z-20 animate-float" style={{ animationDelay: "3s" }}>
                <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center text-lg flex-shrink-0">
                  ✨
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">AI Design Ready</p>
                  <p className="text-white/40 text-xs">Living room · Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 74.7C120 69.3 240 58.7 360 58.7C480 58.7 600 69.3 720 72C840 74.7 960 69.3 1080 61.3C1200 53.3 1320 42.7 1380 37.3L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
