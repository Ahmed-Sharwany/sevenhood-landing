"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const pillars = {
  EN: [
    {
      icon: "🏛️",
      accentColor: "#C9A56B",
      accentBg: "rgba(201,165,107,0.08)",
      title: "Built for Saudi Arabia",
      description: "Designed from the ground up for the Kingdom's real estate landscape — aligned with Vision 2030, PDPL-compliant, and rooted in Saudi community values.",
    },
    {
      icon: "🌐",
      accentColor: "#3E5878",
      accentBg: "rgba(62,88,120,0.08)",
      title: "Genuinely Bilingual",
      description: "Not a translation — a native bilingual experience. Every screen and notification is crafted with equal care in both Arabic and English.",
    },
    {
      icon: "🔒",
      accentColor: "#566656",
      accentBg: "rgba(86,102,86,0.08)",
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, full PDPL compliance, and role-based access control. Residents' data protected to the highest standards.",
    },
    {
      icon: "✦",
      accentColor: "#8F6F36",
      accentBg: "rgba(143,111,54,0.08)",
      title: "AI-Powered Features",
      description: "The first community platform in KSA with built-in AI interior design — letting residents transform their spaces with a simple photo.",
    },
  ],
  AR: [
    {
      icon: "🏛️",
      accentColor: "#C9A56B",
      accentBg: "rgba(201,165,107,0.08)",
      title: "مصمّم للمملكة العربية السعودية",
      description: "بُني من الأساس ليخدم السوق العقاري في المملكة — متوافق مع رؤية 2030، ملتزم بنظام حماية البيانات الشخصية، ومتجذّر في قيم المجتمع السعودي.",
    },
    {
      icon: "🌐",
      accentColor: "#3E5878",
      accentBg: "rgba(62,88,120,0.08)",
      title: "ثنائي اللغة حقيقياً",
      description: "ليست مجرد ترجمة — بل تجربة ثنائية اللغة أصيلة. كل شاشة وكل إشعار مصمَّم بعناية متساوية باللغتين العربية والإنجليزية.",
    },
    {
      icon: "🔒",
      accentColor: "#566656",
      accentBg: "rgba(86,102,86,0.08)",
      title: "أمان على مستوى المؤسسات",
      description: "تشفير بمستوى البنوك، امتثال كامل لنظام حماية البيانات الشخصية، وتحكم في الصلاحيات بالأدوار. بيانات سكانك محمية بأعلى معايير الصناعة.",
    },
    {
      icon: "✦",
      accentColor: "#8F6F36",
      accentBg: "rgba(143,111,54,0.08)",
      title: "مدعوم بالذكاء الاصطناعي",
      description: "أول منصة مجتمعية في المملكة تضم تصميماً داخلياً بالذكاء الاصطناعي — تتيح للسكان تحويل مساحاتهم بصورة واحدة فقط.",
    },
  ],
};

const partners = ["Roshn Group", "PIF", "KAFD", "Diriyah Gate", "NEOM", "AlUla", "Dar Al Arkan", "Emaar KSA"];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const pillarList = isAr ? pillars.AR : pillars.EN;

  return (
    <section
      className="section-padding"
      style={{ background: "var(--bg-elev)" }}
      ref={ref}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-16 flex flex-col gap-5 ${isAr ? "items-end text-right" : ""}`}>
          <div className="reveal">
            <span className="eyebrow">
              <span className="dot" />
              {isAr ? "ميزة سابع جار" : "The Sevenhood Difference"}
            </span>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.08s" }}>
            {isAr ? (
              <h2
                className="font-medium"
                style={{
                  fontFamily: "IBM Plex Sans Arabic, sans-serif",
                  fontSize: "clamp(38px,5vw,64px)",
                  lineHeight: "1.02",
                  letterSpacing: "-0.02em",
                }}
              >
                المنصة التي كانت
                <br />
                <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "var(--fg-muted)" }}>
                  المملكة تنتظرها
                </em>
              </h2>
            ) : (
              <h2
                className="font-medium"
                style={{
                  fontSize: "clamp(38px,5vw,64px)",
                  lineHeight: "1.02",
                  letterSpacing: "-0.035em",
                }}
              >
                The platform Saudi Arabia
                <br />
                <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "var(--fg-muted)" }}>
                  has been waiting for
                </em>
              </h2>
            )}
          </div>

          <p
            className="reveal text-[17px] leading-[1.6] text-[--fg-muted]"
            style={{
              maxWidth: "56ch",
              transitionDelay: "0.14s",
              ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
            }}
          >
            {isAr
              ? "بُني سابع جار بمعايير عالمية، ليخدم السوق السعودي بعمق وأصالة. ليس منصة معرَّبة — بل منصة سعودية في جوهرها."
              : "Sevenhood is built to global standards with Saudi Arabia at its core. Not a localised product — a Saudi-native platform from day one."}
          </p>
        </div>

        {/* Pillars grid — 2x2, each with hover accent reveal */}
        <div
          className="reveal grid md:grid-cols-2 gap-px rounded-[var(--r-2xl)] overflow-hidden mb-10"
          style={{
            background: "var(--hairline)",
            border: "1px solid var(--hairline)",
            transitionDelay: "0.1s",
          }}
        >
          {pillarList.map((pillar, i) => (
            <div
              key={i}
              className={`group relative bg-[--bg-elev] p-8 flex flex-col gap-5 cursor-default overflow-hidden transition-colors duration-200 hover:bg-[--bg-sunken] ${isAr ? "items-end text-right" : ""}`}
            >
              {/* Top accent line (reveals on hover) */}
              <div
                className="absolute top-0 left-0 right-0 h-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(${isAr ? "270" : "90"}deg, ${pillar.accentColor}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[var(--r-md)] flex items-center justify-center text-[22px] border transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: pillar.accentBg,
                  borderColor: `${pillar.accentColor}22`,
                }}
              >
                {pillar.icon}
              </div>

              <div>
                <h3
                  className="text-[19px] font-semibold tracking-[-0.015em] mb-2.5"
                  style={{ color: "var(--fg)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-[14.5px] leading-[1.65] text-[--fg-muted]"
                  style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Early Access CTA — dramatic dark block */}
        <div
          className="reveal relative overflow-hidden rounded-[var(--r-2xl)]"
          style={{
            background: "var(--ink-950)",
            transitionDelay: "0.18s",
          }}
        >
          {/* Radial accent corner */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "500px", height: "400px",
              top: "-100px",
              right: isAr ? "auto" : "-100px",
              left: isAr ? "-100px" : "auto",
              background: "radial-gradient(ellipse 60% 60% at 60% 40%, rgba(201,165,107,0.18) 0%, transparent 65%)",
              filter: "blur(40px)",
            }}
          />

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="56" height="56" patternUnits="userSpaceOnUse">
                  <path d="M 56 0 L 0 0 0 56" fill="none" stroke="#C9A56B" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div
            className={`relative z-10 px-8 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center gap-8 ${
              isAr ? "md:flex-row-reverse text-right" : "md:justify-between"
            }`}
          >
            <div className="flex flex-col gap-4 flex-1">
              <div className={`flex items-center gap-2.5 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--gold-500)", boxShadow: "0 0 8px rgba(201,165,107,0.7)" }}
                />
                <span
                  style={{
                    color: "var(--gold-500)",
                    fontSize: "11px",
                    fontFamily: "Geist Mono, monospace",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                  }}
                >
                  {isAr ? "برنامج الوصول المبكر" : "Early Access Program"}
                </span>
              </div>
              <h3
                className="text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] leading-[1.1]"
                style={{ color: "#F4F1EA", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
              >
                {isAr
                  ? "كن من أوائل المجتمعات التي تعيش تجربة سابع جار"
                  : "Be among the first communities\nto experience Sevenhood"}
              </h3>
              <p
                className="text-[15.5px] leading-[1.6]"
                style={{ color: "var(--ink-300)", maxWidth: "48ch", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
              >
                {isAr
                  ? "نحن نتعاون مع عدد محدود من المجتمعات لبرنامج الوصول المبكر. تواصل معنا الآن لتضمن مكانك."
                  : "We're partnering with a select number of communities for our early access program. Reach out now to secure your spot."}
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                className="btn btn-gold btn-lg"
                style={{ ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
              >
                {isAr ? "احجز مقعدك الآن" : "Reserve Your Spot"}
                <svg className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Partner logo cloud */}
        <div className="mt-14 reveal" style={{ transitionDelay: "0.22s" }}>
          <p
            className={`text-[11.5px] font-mono uppercase tracking-[.16em] text-[--fg-soft] mb-6 ${isAr ? "text-right" : ""}`}
            style={{ fontFamily: "Geist Mono, monospace" }}
          >
            {isAr ? "مصمَّم لمجتمعات المطورين الرائدين في المملكة" : "Designed for Saudi Arabia's leading developer communities"}
          </p>
          <div className={`flex flex-wrap gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
            {partners.map((co) => (
              <div
                key={co}
                className="px-4 py-2.5 rounded-[var(--r-md)] border border-[--hairline] text-[13px] font-medium transition-all duration-150 hover:border-[--gold-400] hover:text-[--gold-600] cursor-default"
                style={{ background: "var(--bg-elev)", color: "var(--fg-muted)" }}
              >
                {co}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
