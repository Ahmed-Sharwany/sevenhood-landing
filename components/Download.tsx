"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

function AppleStoreLarge() {
  return (
    <svg viewBox="0 0 120 40" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="var(--ink-950)" />
      <rect x="0.5" y="0.5" width="119" height="39" rx="7.5" stroke="rgba(244,241,234,.15)" />
      <g transform="translate(12, 8)">
        <path d="M14.05 11.5c-.49.71-.99 1.41-1.75 1.42-.77.02-1.01-.46-1.88-.46-.87 0-1.14.44-1.87.47-.75.03-1.31-.75-1.79-1.45C5.43 9.7 4.67 7.1 5.69 5.37c.5-.86 1.39-1.42 2.35-1.43.73-.01 1.43.5 1.88.5.44 0 1.29-.61 2.17-.52.37.01 1.41.15 2.08 1.13-.05.04-1.24.73-1.23 2.18.02 1.73 1.52 2.3 1.53 2.31-.02.04-.24.82-.79 1.62l-.63.36zm-1.66-8.56c.42-.48 1.11-.84 1.68-.86.07.67-.19 1.35-.59 1.83-.39.49-1.05.86-1.69.81-.09-.66.24-1.34.6-1.78z" fill="#F4F1EA" />
      </g>
      <text x="32" y="14" fontFamily="Geist Mono, monospace" fontSize="7" fill="rgba(244,241,234,.5)">Download on the</text>
      <text x="32" y="27" fontFamily="Geist, sans-serif" fontSize="13" fontWeight="500" fill="#F4F1EA">App Store</text>
    </svg>
  );
}

function PlayStoreLarge() {
  return (
    <svg viewBox="0 0 120 40" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="120" height="40" rx="8" fill="var(--ink-950)" />
      <rect x="0.5" y="0.5" width="119" height="39" rx="7.5" stroke="rgba(244,241,234,.15)" />
      <g transform="translate(12, 10)">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 1L9.45 5.25 7.5 7.2 2 4V1zm0 18L7.5 12.8l1.95 1.95L2 19v-1zm0-9.5v-2l7 4L2 15.5v-2l5-2.5-5-2.5z" fill="#F4F1EA" />
      </g>
      <text x="32" y="14" fontFamily="Geist Mono, monospace" fontSize="7" fill="rgba(244,241,234,.5)">Get it on</text>
      <text x="32" y="27" fontFamily="Geist, sans-serif" fontSize="13" fontWeight="500" fill="#F4F1EA">Google Play</text>
    </svg>
  );
}

function QRCode() {
  return (
    <div className="w-44 h-44 relative">
      <div
        className="absolute inset-0 rounded-[var(--r-lg)] p-3"
        style={{ background: "#fff" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fsevenhood.app&color=0B0C0A&bgcolor=FFFFFF&margin=6&ecc=M"
          alt="Scan to download Sevenhood"
          width={160}
          height={160}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

const badges = {
  EN: [
    { label: "Saudi-First Design" },
    { label: "Fully Bilingual" },
    { label: "Launching Soon" },
  ],
  AR: [
    { label: "مصمَّم للمملكة" },
    { label: "ثنائي اللغة" },
    { label: "قريباً في المتاجر" },
  ],
};

export default function Download() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const bs = isAr ? badges.AR : badges.EN;

  return (
    <section
      id="download"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bone-100)" }}
      ref={ref}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Subtle radial accents */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,165,107,.1) 0%, transparent 65%)",
          transform: "translate(-25%, -25%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-16 items-center`}>

          {/* Copy */}
          <div className={`flex flex-col gap-8 ${isAr ? "order-2 items-end text-right" : "order-1"}`}>
            <div className="reveal">
              <span className="eyebrow">
                <span className="dot" style={{ background: "var(--gold-500)", boxShadow: "0 0 0 4px rgba(201,165,107,.15)" }} />
                {isAr ? "قريباً" : "Coming Soon"}
              </span>
            </div>

            <div className="reveal" style={{ transitionDelay: "0.08s" }}>
              {isAr ? (
                <h2
                  className="text-[clamp(42px,6vw,80px)] leading-[0.95] tracking-[-0.03em] font-medium"
                  style={{ fontFamily: "IBM Plex Sans Arabic, sans-serif" }}
                >
                  حمّل سابع جار
                  <br />
                  <em
                    className="font-normal"
                    style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--gold-600)" }}
                  >
                    اليوم
                  </em>
                </h2>
              ) : (
                <h2 className="text-[clamp(42px,6vw,80px)] leading-[0.95] tracking-[-0.035em] font-medium">
                  Download
                  <br />
                  <em
                    className="font-normal"
                    style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--gold-600)" }}
                  >
                    Sevenhood
                  </em>
                  <br />
                  Today
                </h2>
              )}
            </div>

            <p
              className="reveal text-[18px] leading-[1.55] text-[--fg-muted] max-w-[50ch]"
              style={{
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
              <a href="#" className="block w-48 hover:-translate-y-0.5 transition-transform duration-[140ms]">
                <AppleStoreLarge />
              </a>
              <a href="#" className="block w-48 hover:-translate-y-0.5 transition-transform duration-[140ms]">
                <PlayStoreLarge />
              </a>
            </div>

            {/* Platform compat */}
            <div
              className={`reveal flex items-center gap-5 ${isAr ? "flex-row-reverse" : ""}`}
              style={{ transitionDelay: "0.26s" }}
            >
              {[
                { icon: "🍎", label: "iPhone (iOS 15+)" },
                { icon: "🤖", label: "Android (8.0+)" },
              ].map((p, i) => (
                <>
                  {i > 0 && (
                    <div key={`sep-${i}`} className="w-px h-4" style={{ background: "var(--hairline-strong)" }} />
                  )}
                  <div
                    key={p.label}
                    className={`flex items-center gap-2 text-[13px] text-[--fg-soft] ${isAr ? "flex-row-reverse" : ""}`}
                  >
                    <span>{p.icon}</span>
                    <span style={{ fontFamily: "Geist Mono, monospace" }}>{p.label}</span>
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* QR + badges */}
          <div
            className={`reveal flex flex-col items-center gap-8 ${isAr ? "order-1" : "order-2"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            {/* QR code */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[var(--r-2xl)] blur-2xl"
                style={{ background: "rgba(201,165,107,.2)" }}
              />
              <div
                className="relative rounded-[var(--r-2xl)] p-6 flex flex-col items-center gap-3"
                style={{
                  background: "var(--bg-elev)",
                  border: "1px solid var(--hairline)",
                  boxShadow: "var(--sh-2)",
                }}
              >
                <QRCode />
                <div className="text-center">
                  <p
                    className="text-[13px] font-medium text-[--fg]"
                    style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                  >
                    {isAr ? "امسح للانتقال إلى الموقع" : "Scan to visit sevenhood.app"}
                  </p>
                  <p
                    className="text-[11px] text-[--fg-soft] font-mono mt-0.5"
                    style={{ fontFamily: "Geist Mono, monospace" }}
                  >
                    sevenhood.app
                  </p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div
              className="w-full max-w-xs rounded-[var(--r-xl)] p-5 flex flex-col gap-4"
              style={{
                background: "var(--bg-elev)",
                border: "1px solid var(--hairline)",
                boxShadow: "var(--sh-1)",
              }}
            >
              <p
                className="text-[10.5px] font-mono uppercase tracking-[.14em] text-[--fg-soft]"
                style={{ fontFamily: "Geist Mono, monospace" }}
              >
                {isAr ? "ما يميّزنا" : "What We Stand For"}
              </p>

              {bs.map((badge, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className="w-8 h-8 rounded-[var(--r-md)] flex items-center justify-center shrink-0"
                    style={{ background: "var(--gold-50)", border: "1px solid var(--gold-200)" }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "var(--gold-600)" }} />
                  </div>
                  <p
                    className="text-[14px] font-medium text-[--fg]"
                    style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                  >
                    {badge.label}
                  </p>
                </div>
              ))}

              <div className="gold-divider" />

              <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                <div className="w-2 h-2 rounded-full bg-[--gold-500] animate-pulse shrink-0" />
                <p
                  className="text-[12px] text-[--gold-600]"
                  style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : { fontFamily: "Geist Mono, monospace", letterSpacing: ".06em" }}
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
