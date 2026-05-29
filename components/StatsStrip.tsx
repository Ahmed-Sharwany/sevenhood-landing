"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

const statsData = {
  EN: [
    { number: "2,400+", label: "Units Under Management", sub: "Across KSA" },
    { number: "97.3%",  label: "Resident Satisfaction",  sub: "Verified Rating" },
    { number: "15+",    label: "Premium Communities",    sub: "Sevenhood Partners" },
    { number: "<24h",   label: "Average Onboarding",     sub: "From Sign-up to Live" },
    { number: "4.9★",   label: "App Store Rating",       sub: "iOS & Android" },
    { number: "3",      label: "Seconds",                sub: "Average Response Time" },
  ],
  AR: [
    { number: "٢٤٠٠+",    label: "وحدة مُدارة",      sub: "في المملكة" },
    { number: "٩٧٫٣٪",    label: "رضا السكان",       sub: "تقييم موثّق" },
    { number: "١٥+",      label: "مجتمع راقٍ",       sub: "شركاء سابع جار" },
    { number: "<٢٤ ساعة", label: "متوسط وقت الإعداد", sub: "من التسجيل حتى الإطلاق" },
    { number: "٤٫٩★",     label: "تقييم متجر التطبيقات", sub: "iOS وAndroid" },
    { number: "٣",        label: "ثوانٍ",             sub: "متوسط وقت الاستجابة" },
  ],
};

function StatCard({ number, label, sub, delay, isAr }: { number: string; label: string; sub: string; delay: number; isAr: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 px-8 py-7 border-r last:border-r-0 group cursor-default transition-all duration-300 hover:bg-[--bone-100]`}
      style={{
        borderColor: "var(--hairline)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, background 0.14s`,
        textAlign: isAr ? "right" : "left",
      }}
    >
      <div className="section-line" />
      <div
        className="stat-huge"
        style={{ fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : undefined }}
      >
        {number}
      </div>
      <div>
        <p
          className="text-[15px] font-semibold tracking-[-0.01em] text-[--fg]"
          style={{ fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : undefined }}
        >
          {label}
        </p>
        <p
          className="text-[12px] text-[--fg-soft] mt-0.5"
          style={{ fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : "Geist Mono, monospace", letterSpacing: isAr ? 0 : ".06em" }}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}

export default function StatsStrip() {
  const { isAr } = useLang();
  const data = isAr ? statsData.AR : statsData.EN;

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)" }}
    >
      {/* Marquee strip */}
      <div className="marquee-strip">
        <div className="marquee-strip-inner">
          {Array.from({ length: 3 }).flatMap(() =>
            (isAr
              ? ["منصة عقارية ذكية", "رؤية 2030", "مبني في المملكة", "ثنائي اللغة", "أمان على مستوى البنوك", "حجوزات ذكية", "إدارة الزوار", "صيانة فورية"]
              : ["Smart Residential Platform", "Vision 2030 Aligned", "KSA-Built", "Natively Bilingual", "Bank-Grade Security", "Smart Bookings", "Visitor Management", "Real-Time Maintenance"]
            ).map((text, i) => (
              <span key={`${text}-${i}`} className="marquee-strip-item">
                <span className="marquee-strip-dot" />
                <span style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif", fontSize: "12px", letterSpacing: 0 } : undefined}>
                  {text}
                </span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* Stats grid */}
      <div
        className="max-w-7xl mx-auto"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {data.map((s, i) => (
          <StatCard
            key={i}
            number={s.number}
            label={s.label}
            sub={s.sub}
            delay={i * 0.08}
            isAr={isAr}
          />
        ))}
      </div>
    </section>
  );
}
