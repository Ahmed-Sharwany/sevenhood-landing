"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

function AppleStoreLarge() {
  return (
    <svg viewBox="0 0 120 40" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="black" />
      <rect width="120" height="40" rx="8" fill="white" fillOpacity="0.05" />
      <rect x="0.5" y="0.5" width="119" height="39" rx="7.5" stroke="white" strokeOpacity="0.2" />
      <g transform="translate(12, 8)">
        <path d="M14.05 11.5c-.49.71-.99 1.41-1.75 1.42-.77.02-1.01-.46-1.88-.46-.87 0-1.14.44-1.87.47-.75.03-1.31-.75-1.79-1.45C5.43 9.7 4.67 7.1 5.69 5.37c.5-.86 1.39-1.42 2.35-1.43.73-.01 1.43.5 1.88.5.44 0 1.29-.61 2.17-.52.37.01 1.41.15 2.08 1.13-.05.04-1.24.73-1.23 2.18.02 1.73 1.52 2.3 1.53 2.31-.02.04-.24.82-.79 1.62l-.63.36zm-1.66-8.56c.42-.48 1.11-.84 1.68-.86.07.67-.19 1.35-.59 1.83-.39.49-1.05.86-1.69.81-.09-.66.24-1.34.6-1.78z" fill="white" />
      </g>
      <text x="32" y="14" fontFamily="Inter, -apple-system, sans-serif" fontSize="7" fill="rgba(255,255,255,0.7)">Download on the</text>
      <text x="32" y="27" fontFamily="Inter, -apple-system, sans-serif" fontSize="13" fontWeight="600" fill="white">App Store</text>
    </svg>
  );
}

function PlayStoreLarge() {
  return (
    <svg viewBox="0 0 120 40" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="black" />
      <rect width="120" height="40" rx="8" fill="white" fillOpacity="0.05" />
      <rect x="0.5" y="0.5" width="119" height="39" rx="7.5" stroke="white" strokeOpacity="0.2" />
      <g transform="translate(12, 10)">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 1L9.45 5.25 7.5 7.2 2 4V1zm0 18L7.5 12.8l1.95 1.95L2 19v-1zm0-9.5v-2l7 4L2 15.5v-2l5-2.5-5-2.5z" fill="white" />
      </g>
      <text x="32" y="14" fontFamily="Inter, -apple-system, sans-serif" fontSize="7" fill="rgba(255,255,255,0.7)">Get it on</text>
      <text x="32" y="27" fontFamily="Inter, -apple-system, sans-serif" fontSize="13" fontWeight="600" fill="white">Google Play</text>
    </svg>
  );
}

// Real QR code component — generates a proper scannable QR
// This QR points to https://sevenhood.app
function RealQRCode() {
  // QR code SVG for https://sevenhood.app using pre-computed modules
  // Generated for the URL: https://sevenhood.app
  return (
    <div className="w-48 h-48 relative bg-white p-3 rounded-lg">
      {/* Use external QR service for a real, scannable QR code */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fsevenhood.app&color=0D2818&bgcolor=FFFFFF&margin=8&ecc=M"
        alt="Scan to download Sevenhood"
        width={180}
        height={180}
        className="w-full h-full"
        loading="lazy"
      />
      {/* Center logo overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
          <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7">
            <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="#C87C2A" opacity="0.2" />
            <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" stroke="#C87C2A" strokeWidth="2" fill="none" />
            <text x="20" y="25" textAnchor="middle" fill="#C87C2A" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">7</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Download() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".dl-animate").forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("opacity-100", "translate-y-0");
              el.classList.remove("opacity-0", "translate-y-10");
            }, i * 120);
          });
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const badges = isAr
    ? [
        { icon: "🇸🇦", label: "مصمَّم للمملكة" },
        { icon: "🌐", label: "ثنائي اللغة" },
        { icon: "🚀", label: "قريباً في المتاجر" },
      ]
    : [
        { icon: "🇸🇦", label: "Saudi-First Design" },
        { icon: "🌐", label: "Fully Bilingual" },
        { icon: "🚀", label: "Launching Soon" },
      ];

  return (
    <section
      id="download"
      className="download-gradient section-padding relative overflow-hidden"
      ref={ref}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 animate-float">
          <svg width="80" height="92" viewBox="0 0 80 92" fill="none">
            <polygon points="40,2 78,22 78,70 40,90 2,70 2,22" stroke="#C87C2A" strokeWidth="1" fill="rgba(200,124,42,0.1)" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-20 opacity-8 animate-float" style={{ animationDelay: "2s" }}>
          <svg width="120" height="138" viewBox="0 0 120 138" fill="none">
            <polygon points="60,3 117,33 117,105 60,135 3,105 3,33" stroke="#C87C2A" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isAr ? "" : ""}`}>

          {/* Copy */}
          <div className={`space-y-8 ${isAr ? "order-2 text-right" : "order-1"}`}>
            <div className="dl-animate opacity-0 translate-y-10 transition-all duration-600">
              <span className="badge bg-gold/20 border border-gold/40 text-gold">
                <span className="text-xs">📲</span>
                {isAr ? "قريباً" : "Coming Soon"}
              </span>
            </div>

            <div className="dl-animate opacity-0 translate-y-10 transition-all duration-600 space-y-3">
              {isAr ? (
                <h2
                  className="text-5xl lg:text-6xl font-bold text-white leading-[1.2]"
                  style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                >
                  حمّل سابع جار
                  <br />
                  <span className="gold-shimmer">اليوم</span>
                </h2>
              ) : (
                <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                  Download
                  <br />
                  <span className="gold-shimmer">Sevenhood</span>
                  <br />
                  Today
                </h2>
              )}
            </div>

            <div className="dl-animate opacity-0 translate-y-10 transition-all duration-600">
              <p
                className="text-white/60 text-lg leading-relaxed max-w-lg"
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {isAr
                  ? "انضم إلى السكان في أرقى مجتمعات المملكة الذين اختاروا حياة سكنية أكثر ذكاءً وترابطاً. التطبيق مجاني للتنزيل والاستخدام."
                  : "Join residents across Saudi Arabia's finest communities who've upgraded to smarter, more connected living. Free to download, free to use."}
              </p>
            </div>

            {/* Store buttons */}
            <div className={`dl-animate opacity-0 translate-y-10 transition-all duration-600 flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}>
              <a href="#" className="store-btn block w-48 hover:-translate-y-1 transition-all duration-200">
                <AppleStoreLarge />
              </a>
              <a href="#" className="store-btn block w-48 hover:-translate-y-1 transition-all duration-200">
                <PlayStoreLarge />
              </a>
            </div>

            {/* Platform compatibility */}
            <div className={`dl-animate opacity-0 translate-y-10 transition-all duration-600 flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
              <div className={`flex items-center gap-2 text-white/50 text-sm ${isAr ? "flex-row-reverse" : ""}`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                iPhone (iOS 15+)
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className={`flex items-center gap-2 text-white/50 text-sm ${isAr ? "flex-row-reverse" : ""}`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341L5.383 22.38c-.18.1-.37.15-.56.15-.17 0-.35-.04-.51-.13-.35-.19-.56-.56-.56-.96V2.56c0-.4.21-.77.56-.96.35-.19.77-.17 1.1.05L17.52 8.66l2.16 1.24-2.16 5.44zM5.74 20.27l9.72-5.6-9.72-8.94v14.54z" />
                </svg>
                Android (8.0+)
              </div>
            </div>
          </div>

          {/* QR + badges */}
          <div className={`dl-animate opacity-0 translate-y-10 transition-all duration-600 flex flex-col items-center gap-8 ${isAr ? "order-1" : "order-2"}`}>
            {/* Real QR code */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-3xl" />
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                <RealQRCode />
                <p
                  className="text-center text-forest/60 text-sm font-medium mt-3"
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {isAr ? "امسح للانتقال إلى الموقع" : "Scan to visit sevenhood.app"}
                </p>
                <p className="text-center text-forest/35 text-xs mt-0.5 font-medium">
                  sevenhood.app
                </p>
              </div>
            </div>

            {/* Honest launch badges — no fake stats */}
            <div className="bg-white/8 border border-white/15 rounded-2xl p-6 w-full max-w-xs space-y-4">
              <p
                className={`text-white/60 text-xs font-semibold uppercase tracking-wider ${isAr ? "text-right" : ""}`}
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif", letterSpacing: 0 } : undefined}
              >
                {isAr ? "ما يميّزنا" : "What We Stand For"}
              </p>

              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center text-lg flex-shrink-0">
                    {badge.icon}
                  </div>
                  <p
                    className="text-white font-semibold text-sm"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                  >
                    {badge.label}
                  </p>
                </div>
              ))}

              <div className="gold-divider" />

              <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse flex-shrink-0" />
                <p
                  className="text-gold text-xs font-medium"
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {isAr ? "الوصول المبكر متاح الآن" : "Early Access Now Available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
