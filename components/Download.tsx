"use client";

import { useEffect, useRef } from "react";

function AppleStoreLarge() {
  return (
    <svg viewBox="0 0 120 40" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="black"/>
      <rect width="120" height="40" rx="8" fill="white" fillOpacity="0.05"/>
      <rect x="0.5" y="0.5" width="119" height="39" rx="7.5" stroke="white" strokeOpacity="0.2"/>
      <g transform="translate(12, 8)">
        <path d="M14.05 11.5c-.49.71-.99 1.41-1.75 1.42-.77.02-1.01-.46-1.88-.46-.87 0-1.14.44-1.87.47-.75.03-1.31-.75-1.79-1.45C5.43 9.7 4.67 7.1 5.69 5.37c.5-.86 1.39-1.42 2.35-1.43.73-.01 1.43.5 1.88.5.44 0 1.29-.61 2.17-.52.37.01 1.41.15 2.08 1.13-.05.04-1.24.73-1.23 2.18.02 1.73 1.52 2.3 1.53 2.31-.02.04-.24.82-.79 1.62l-.63.36zm-1.66-8.56c.42-.48 1.11-.84 1.68-.86.07.67-.19 1.35-.59 1.83-.39.49-1.05.86-1.69.81-.09-.66.24-1.34.6-1.78z" fill="white"/>
      </g>
      <text x="32" y="14" fontFamily="Inter, -apple-system, sans-serif" fontSize="7" fill="rgba(255,255,255,0.7)">Download on the</text>
      <text x="32" y="27" fontFamily="Inter, -apple-system, sans-serif" fontSize="13" fontWeight="600" fill="white">App Store</text>
    </svg>
  );
}

function PlayStoreLarge() {
  return (
    <svg viewBox="0 0 120 40" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="black"/>
      <rect width="120" height="40" rx="8" fill="white" fillOpacity="0.05"/>
      <rect x="0.5" y="0.5" width="119" height="39" rx="7.5" stroke="white" strokeOpacity="0.2"/>
      <g transform="translate(12, 10)">
        <path d="M1.5 1.06c-.22.12-.22.48 0 .6l6.55 3.76L6.2 7.28 1.5 2.54v16.92l4.7-4.74 1.85 1.86L1.5 19.94c-.22.13-.22.49 0 .61l.05.05 6.55-3.76 1.45.83-6.55 3.76c-.22.13-.48.13-.7 0-.22-.13-.3-.37-.3-.62V1.19c0-.25.08-.49.3-.62.22-.13.48-.13.7 0l6.55 3.76-1.45.83L1.55 1.11l-.05-.05zm8.62 4.94l1.46.84-2.07 2.07 2.07 2.07-1.46.84L7.66 9.8l2.46-3.8zm0 9.94l-2.46-3.8 2.46-3.8 1.46.84-2.07 2.07 2.07 2.07-1.46.62z" fill="white" fillOpacity="0"/>
        <path d="M1.82 13.58L7.27 7.5l1.45 1.44L3.27 14.5 1.82 13.58zM1.82 6.42L3.27 5.5l5.45 5.56-1.45 1.44L1.82 6.42z" fill="white" fillOpacity="0"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M2 1L9.45 5.25 7.5 7.2 2 4V1zm0 18L7.5 12.8l1.95 1.95L2 19v-1zm0-9.5v-2l7 4L2 15.5v-2l5-2.5-5-2.5z" fill="white"/>
      </g>
      <text x="32" y="14" fontFamily="Inter, -apple-system, sans-serif" fontSize="7" fill="rgba(255,255,255,0.7)">Get it on</text>
      <text x="32" y="27" fontFamily="Inter, -apple-system, sans-serif" fontSize="13" fontWeight="600" fill="white">Google Play</text>
    </svg>
  );
}

export default function Download() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current
            ?.querySelectorAll(".dl-animate")
            .forEach((el, i) => {
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

  return (
    <section
      id="download"
      className="download-gradient section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background hexagons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 animate-float">
          <svg width="80" height="92" viewBox="0 0 80 92" fill="none">
            <polygon points="40,2 78,22 78,70 40,90 2,70 2,22" stroke="#C87C2A" strokeWidth="1" fill="rgba(200,124,42,0.1)"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-20 opacity-8 animate-float" style={{ animationDelay: "2s" }}>
          <svg width="120" height="138" viewBox="0 0 120 138" fill="none">
            <polygon points="60,3 117,33 117,105 60,135 3,105 3,33" stroke="#C87C2A" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="dl-animate opacity-0 translate-y-10 transition-all duration-600">
              <span className="badge bg-gold/20 border border-gold/40 text-gold">
                <span className="text-xs">📲</span> Available Now
              </span>
            </div>

            <div className="dl-animate opacity-0 translate-y-10 transition-all duration-600 space-y-3">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Download
                <br />
                <span className="gold-shimmer">Sevenhood</span>
                <br />
                Today
              </h2>
              <p
                className="text-2xl text-white/30 arabic"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                حمّل سابع جار اليوم
              </p>
            </div>

            <div className="dl-animate opacity-0 translate-y-10 transition-all duration-600">
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                Join thousands of residents across Saudi Arabia who&apos;ve already
                upgraded to smarter, more connected community living. Free to
                download, free to use.
              </p>
              <p
                className="text-white/35 mt-3 arabic leading-relaxed"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                انضم إلى آلاف السكان في المملكة الذين اختاروا حياة مجتمعية أكثر ذكاءً وترابطاً. مجاني للتنزيل والاستخدام.
              </p>
            </div>

            {/* Store buttons */}
            <div className="dl-animate opacity-0 translate-y-10 transition-all duration-600 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="store-btn block w-48 hover:-translate-y-1 transition-all duration-200"
              >
                <AppleStoreLarge />
              </a>
              <a
                href="#"
                className="store-btn block w-48 hover:-translate-y-1 transition-all duration-200"
              >
                <PlayStoreLarge />
              </a>
            </div>

            {/* Platform note */}
            <div className="dl-animate opacity-0 translate-y-10 transition-all duration-600 flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                iPhone (iOS 15+)
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.341L5.383 22.38c-.18.1-.37.15-.56.15-.17 0-.35-.04-.51-.13-.35-.19-.56-.56-.56-.96V2.56c0-.4.21-.77.56-.96.35-.19.77-.17 1.1.05L17.52 8.66l2.16 1.24-2.16 5.44zM5.74 20.27l9.72-5.6-9.72-8.94v14.54z"/>
                </svg>
                Android (8.0+)
              </div>
            </div>
          </div>

          {/* Right: QR + rating */}
          <div className="dl-animate opacity-0 translate-y-10 transition-all duration-600 flex flex-col items-center gap-8">
            {/* QR code placeholder */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-3xl" />
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl">
                <div className="w-48 h-48 relative">
                  {/* QR code grid simulation */}
                  <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-0.5 p-2">
                    {Array.from({ length: 100 }).map((_, i) => {
                      // Create a QR-like pattern
                      const row = Math.floor(i / 10);
                      const col = i % 10;
                      const isCorner =
                        (row < 3 && col < 3) ||
                        (row < 3 && col > 6) ||
                        (row > 6 && col < 3);
                      const isCornerInner =
                        (row === 1 && col === 1) ||
                        (row === 1 && col === 8) ||
                        (row === 8 && col === 1);
                      const isRandom =
                        Math.sin(i * 2.5 + 1.3) > 0.2;
                      const filled = isCorner || isCornerInner || (!isCornerInner && isRandom);
                      return (
                        <div
                          key={i}
                          className={`rounded-sm ${filled ? "bg-forest" : "bg-gray-100"}`}
                        />
                      );
                    })}
                  </div>
                  {/* Center logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                        <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="#C87C2A" opacity="0.2"/>
                        <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" stroke="#C87C2A" strokeWidth="2" fill="none"/>
                        <text x="20" y="25" textAnchor="middle" fill="#C87C2A" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif">7</text>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-center text-forest/60 text-sm font-medium mt-3">
                  Scan to download
                </p>
                <p
                  className="text-center text-forest/35 text-xs mt-1 arabic"
                  style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                >
                  امسح للتنزيل
                </p>
              </div>
            </div>

            {/* Rating card */}
            <div className="bg-white/8 border border-white/15 rounded-2xl p-6 text-center space-y-3 w-full max-w-xs">
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-6 h-6 text-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white font-bold text-4xl stat-number">4.9</p>
              <p className="text-white/50 text-sm">Based on 2,400+ reviews</p>
              <p
                className="text-white/30 text-xs arabic"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                بناءً على أكثر من 2400 تقييم
              </p>

              <div className="gold-divider" />

              <div className="flex justify-center gap-6 text-sm">
                <div className="text-center">
                  <p className="text-white font-semibold">12K+</p>
                  <p className="text-white/40 text-xs">Downloads</p>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <p className="text-white font-semibold">50+</p>
                  <p className="text-white/40 text-xs">Communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
