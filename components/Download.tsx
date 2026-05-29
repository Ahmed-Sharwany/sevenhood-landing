"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

function AppleStoreLarge() {
  return (
    <svg viewBox="0 0 140 48" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="48" rx="10" fill="#0B0C0A" />
      <rect x="0.5" y="0.5" width="139" height="47" rx="9.5" stroke="rgba(244,241,234,.2)" />
      <g transform="translate(14, 10)">
        <path d="M14.05 11.5c-.49.71-.99 1.41-1.75 1.42-.77.02-1.01-.46-1.88-.46-.87 0-1.14.44-1.87.47-.75.03-1.31-.75-1.79-1.45C5.43 9.7 4.67 7.1 5.69 5.37c.5-.86 1.39-1.42 2.35-1.43.73-.01 1.43.5 1.88.5.44 0 1.29-.61 2.17-.52.37.01 1.41.15 2.08 1.13-.05.04-1.24.73-1.23 2.18.02 1.73 1.52 2.3 1.53 2.31-.02.04-.24.82-.79 1.62l-.63.36zm-1.66-8.56c.42-.48 1.11-.84 1.68-.86.07.67-.19 1.35-.59 1.83-.39.49-1.05.86-1.69.81-.09-.66.24-1.34.6-1.78z" fill="#F4F1EA" />
      </g>
      <text x="36" y="18" fontFamily="Geist Mono, monospace" fontSize="8" fill="rgba(244,241,234,.45)">Download on the</text>
      <text x="36" y="33" fontFamily="Geist, sans-serif" fontSize="15" fontWeight="600" fill="#F4F1EA">App Store</text>
    </svg>
  );
}

function PlayStoreLarge() {
  return (
    <svg viewBox="0 0 140 48" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="140" height="48" rx="10" fill="#0B0C0A" />
      <rect x="0.5" y="0.5" width="139" height="47" rx="9.5" stroke="rgba(244,241,234,.2)" />
      <g transform="translate(14, 12)">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 1L9.45 5.25 7.5 7.2 2 4V1zm0 18L7.5 12.8l1.95 1.95L2 19v-1zm0-9.5v-2l7 4L2 15.5v-2l5-2.5-5-2.5z" fill="#F4F1EA" />
      </g>
      <text x="36" y="18" fontFamily="Geist Mono, monospace" fontSize="8" fill="rgba(244,241,234,.45)">Get it on</text>
      <text x="36" y="33" fontFamily="Geist, sans-serif" fontSize="15" fontWeight="600" fill="#F4F1EA">Google Play</text>
    </svg>
  );
}

function QRCode() {
  return (
    <div
      className="relative rounded-[var(--r-xl)] p-4"
      style={{
        background: "white",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.9) inset",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fsevenhood.app&color=0B0C0A&bgcolor=FFFFFF&margin=6&ecc=M"
        alt="Scan to download Sevenhood"
        width={144}
        height={144}
        className="block"
        loading="lazy"
        style={{ borderRadius: "8px" }}
      />
    </div>
  );
}

const features = {
  EN: [
    { icon: "🇸🇦", text: "Saudi-First Design"   },
    { icon: "🌐", text: "Fully Bilingual"        },
    { icon: "🔒", text: "PDPL Compliant"         },
    { icon: "⚡", text: "Real-Time Everything"   },
  ],
  AR: [
    { icon: "🇸🇦", text: "مصمَّم للمملكة"            },
    { icon: "🌐", text: "ثنائي اللغة بالكامل"        },
    { icon: "🔒", text: "امتثال PDPL"               },
    { icon: "⚡", text: "كل شيء في الوقت الفعلي"    },
  ],
};

export default function Download() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const feats = isAr ? features.AR : features.EN;

  return (
    <section
      id="download"
      className="section-padding relative overflow-hidden"
      ref={ref}
      dir={isAr ? "rtl" : "ltr"}
      style={{ background: "var(--ink-950)" }}
    >
      {/* Aurora orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute"
          style={{
            width: "700px", height: "500px",
            top: "-100px", left: "-200px",
            background: "radial-gradient(ellipse 60% 60% at 30% 40%, rgba(201,165,107,0.1) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "500px", height: "400px",
            bottom: "-80px", right: "-100px",
            background: "radial-gradient(ellipse 60% 60% at 70% 60%, rgba(201,165,107,0.07) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.016] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dl-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#C9A56B" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dl-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Copy */}
          <div className={`flex flex-col gap-8 ${isAr ? "order-2 items-end text-right" : "order-1"}`}>
            <div className="reveal">
              <span
                className="eyebrow"
                style={{ borderColor: "rgba(201,165,107,.28)", color: "var(--gold-500)" }}
              >
                <span className="dot" style={{ background: "var(--gold-500)", boxShadow: "0 0 8px rgba(201,165,107,0.6)" }} />
                {isAr ? "قريباً" : "Coming Soon"}
              </span>
            </div>

            <div className="reveal" style={{ transitionDelay: "0.08s" }}>
              {isAr ? (
                <h2
                  className="font-medium"
                  style={{
                    fontFamily: "IBM Plex Sans Arabic, sans-serif",
                    fontSize: "clamp(48px,7vw,88px)",
                    lineHeight: "0.94",
                    letterSpacing: "-0.03em",
                    color: "#F4F1EA",
                  }}
                >
                  حمّل سابع جار
                  <br />
                  <em
                    style={{
                      fontFamily: "Instrument Serif, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      background: "linear-gradient(110deg, #8F6F36, #C9A56B, #E8CC9A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    اليوم
                  </em>
                </h2>
              ) : (
                <h2
                  className="font-medium"
                  style={{
                    fontSize: "clamp(48px,7vw,88px)",
                    lineHeight: "0.94",
                    letterSpacing: "-0.04em",
                    color: "#F4F1EA",
                  }}
                >
                  Download
                  <br />
                  <em
                    style={{
                      fontFamily: "Instrument Serif, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      background: "linear-gradient(110deg, #8F6F36, #C9A56B, #E8CC9A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Sevenhood
                  </em>
                  <br />
                  <span style={{ color: "rgba(244,241,234,.35)" }}>Today.</span>
                </h2>
              )}
            </div>

            <p
              className="reveal text-[18px] leading-[1.6]"
              style={{
                color: "var(--ink-300)",
                maxWidth: "48ch",
                transitionDelay: "0.14s",
                ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
              }}
            >
              {isAr
                ? "انضم إلى السكان في أرقى مجتمعات المملكة الذين اختاروا حياة سكنية أكثر ذكاءً وترابطاً. التطبيق مجاني للتنزيل والاستخدام."
                : "Join residents across Saudi Arabia's finest communities who've upgraded to smarter, more connected living. Free to download, free to use."}
            </p>

            {/* Store buttons */}
            <div
              className={`reveal flex flex-col sm:flex-row gap-3 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              <a href="#" className="block w-[140px] hover:-translate-y-1 transition-transform duration-200">
                <AppleStoreLarge />
              </a>
              <a href="#" className="block w-[140px] hover:-translate-y-1 transition-transform duration-200">
                <PlayStoreLarge />
              </a>
            </div>

            {/* Feature pills */}
            <div
              className={`reveal flex flex-wrap gap-2 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ transitionDelay: "0.26s" }}
            >
              {feats.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full ${isAr ? "flex-row-reverse" : ""}`}
                  style={{
                    background: "rgba(244,241,234,.05)",
                    border: "1px solid rgba(244,241,234,.1)",
                    fontSize: "13px",
                    color: "rgba(244,241,234,.65)",
                    fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : "Geist, sans-serif",
                  }}
                >
                  <span>{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>

            {/* Platform compat */}
            <div
              className={`reveal flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ transitionDelay: "0.3s" }}
            >
              {[
                { icon: "🍎", label: "iPhone (iOS 15+)" },
                { icon: "🤖", label: "Android (8.0+)" },
              ].map((p, i) => (
                <div key={p.label} className={`flex items-center gap-4 ${i > 0 ? "" : ""}`}>
                  {i > 0 && <div className="w-px h-4" style={{ background: "rgba(244,241,234,.12)" }} />}
                  <div
                    className={`flex items-center gap-2 text-[13px] ${isAr ? "flex-row-reverse" : ""}`}
                    style={{ color: "rgba(244,241,234,.35)", fontFamily: "Geist Mono, monospace" }}
                  >
                    <span>{p.icon}</span>
                    <span>{p.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QR card */}
          <div
            className={`reveal flex flex-col items-center gap-6 ${isAr ? "order-1" : "order-2"}`}
            style={{ transitionDelay: "0.12s" }}
          >
            {/* QR card */}
            <div
              className="relative rounded-[var(--r-2xl)] p-8 flex flex-col items-center gap-6 w-full max-w-sm"
              style={{
                background: "rgba(244,241,234,.04)",
                border: "1px solid rgba(244,241,234,.1)",
                boxShadow: "0 40px 80px rgba(0,0,0,.4)",
              }}
            >
              {/* Glow behind card */}
              <div
                className="absolute inset-0 rounded-[var(--r-2xl)] pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,165,107,0.1) 0%, transparent 70%)" }}
              />

              <div className="relative z-10 flex flex-col items-center gap-4">
                <QRCode />

                <div className="text-center">
                  <p
                    className="text-[14px] font-semibold"
                    style={{ color: "#F4F1EA", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                  >
                    {isAr ? "امسح للانتقال إلى الموقع" : "Scan to visit sevenhood.app"}
                  </p>
                  <p
                    className="text-[11.5px] mt-1"
                    style={{ color: "rgba(244,241,234,.3)", fontFamily: "Geist Mono, monospace" }}
                  >
                    sevenhood.app
                  </p>
                </div>

                <div className="gold-divider w-full" />

                {/* Early access badge */}
                <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: "var(--gold-500)", boxShadow: "0 0 8px rgba(201,165,107,0.6)" }}
                  />
                  <p
                    className="text-[12.5px] font-medium"
                    style={{
                      color: "var(--gold-500)",
                      ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : { fontFamily: "Geist Mono, monospace", letterSpacing: ".06em" }),
                    }}
                  >
                    {isAr ? "الوصول المبكر متاح الآن" : "Early Access Now Open"}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats below QR */}
            <div
              className="grid grid-cols-2 gap-3 w-full max-w-sm"
            >
              {[
                { num: isAr ? "٢٤٠٠+" : "2,400+", label: isAr ? "وحدة مُدارة"   : "Units managed"      },
                { num: isAr ? "مجاناً" : "Free",   label: isAr ? "للسكان"         : "For residents"      },
                { num: isAr ? "٤٫٩★"  : "4.9★",   label: isAr ? "تقييم المتجر"  : "App store rating"   },
                { num: isAr ? "<٢٤ ساعة" : "<24h", label: isAr ? "وقت الإعداد"  : "Setup time"         },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-[var(--r-lg)] text-center"
                  style={{
                    background: "rgba(244,241,234,.03)",
                    border: "1px solid rgba(244,241,234,.07)",
                  }}
                >
                  <p
                    className="text-[20px] font-bold"
                    style={{
                      color: "#F4F1EA",
                      letterSpacing: "-0.03em",
                      fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : undefined,
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    className="text-[11px] mt-0.5"
                    style={{
                      color: "rgba(244,241,234,.3)",
                      fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : "Geist Mono, monospace",
                      letterSpacing: isAr ? 0 : ".06em",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
