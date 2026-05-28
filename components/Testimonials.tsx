"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const pillars = {
  EN: [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Built for Saudi Arabia",
      description: "Designed from the ground up for the Kingdom's real estate landscape — aligned with Vision 2030, PDPL-compliant, and rooted in Saudi community values.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Genuinely Bilingual",
      description: "Not a translation — a native bilingual experience. Every screen and notification is crafted with equal care in both Arabic and English.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, full PDPL compliance, and role-based access control. Residents' data protected to the highest standards.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "AI-Powered Features",
      description: "The first community platform in KSA with built-in AI interior design — letting residents transform their spaces with a simple photo.",
    },
  ],
  AR: [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "مصمّم للمملكة العربية السعودية",
      description: "بُني من الأساس ليخدم السوق العقاري في المملكة — متوافق مع رؤية 2030، ملتزم بنظام حماية البيانات الشخصية، ومتجذّر في قيم المجتمع السعودي.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "ثنائي اللغة حقيقياً",
      description: "ليست مجرد ترجمة — بل تجربة ثنائية اللغة أصيلة. كل شاشة وكل إشعار مصمَّم بعناية متساوية باللغتين العربية والإنجليزية.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "أمان على مستوى المؤسسات",
      description: "تشفير بمستوى البنوك، امتثال كامل لنظام حماية البيانات الشخصية، وتحكم في الصلاحيات بالأدوار. بيانات سكانك محمية بأعلى معايير الصناعة.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: "مدعوم بالذكاء الاصطناعي",
      description: "أول منصة مجتمعية في المملكة تضم تصميماً داخلياً بالذكاء الاصطناعي — تتيح للسكان تحويل مساحاتهم بصورة واحدة فقط.",
    },
  ],
};

const partners = ["Roshn Group", "PIF", "KAFD", "Diriyah Gate", "NEOM", "AlUla"];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
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
        <div className={`mb-16 flex flex-col gap-4 ${isAr ? "items-end text-right" : ""}`}>
          <div className="reveal">
            <span className="eyebrow">
              <span className="dot" />
              {isAr ? "ميزة سابع جار" : "The Sevenhood Difference"}
            </span>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.08s" }}>
            {isAr ? (
              <h2
                className="text-[clamp(36px,4.5vw,58px)] leading-[1.05] tracking-[-0.025em] font-medium"
                style={{ fontFamily: "IBM Plex Sans Arabic, sans-serif" }}
              >
                المنصة التي كانت
                <br />
                <em
                  className="font-normal"
                  style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--fg-muted)" }}
                >
                  المملكة تنتظرها
                </em>
              </h2>
            ) : (
              <h2 className="text-[clamp(36px,4.5vw,58px)] leading-[1.05] tracking-[-0.025em] font-medium">
                The platform Saudi Arabia
                <br />
                <em
                  className="font-normal"
                  style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--fg-muted)" }}
                >
                  has been waiting for
                </em>
              </h2>
            )}
          </div>

          <p
            className="reveal text-[17px] leading-[1.55] text-[--fg-muted] max-w-[58ch]"
            style={{
              transitionDelay: "0.14s",
              ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
            }}
          >
            {isAr
              ? "بُني سابع جار بمعايير عالمية، ليخدم السوق السعودي بعمق وأصالة. ليس منصة معرَّبة — بل منصة سعودية في جوهرها."
              : "Sevenhood is built to global standards with Saudi Arabia at its core. Not a localised product — a Saudi-native platform from day one."}
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[--hairline] rounded-[var(--r-2xl)] overflow-hidden border border-[--hairline] mb-10">
          {pillarList.map((pillar, i) => (
            <div
              key={i}
              className={`reveal bg-[--bg-elev] p-8 flex flex-col gap-4 hover:bg-[--bg-sunken] transition-colors duration-[140ms] ${isAr ? "items-end text-right" : ""}`}
              style={{ transitionDelay: `${0.07 * i}s` }}
            >
              <div
                className="w-10 h-10 rounded-[var(--r-md)] flex items-center justify-center text-[--fg-muted] border border-[--hairline]"
                style={{ background: "var(--bg-sunken)" }}
              >
                {pillar.icon}
              </div>
              <div>
                <h3
                  className="text-[18px] font-medium tracking-[-0.012em] mb-2"
                  style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.6] text-[--fg-muted]"
                  style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Early Access CTA */}
        <div
          className="reveal rounded-[var(--r-2xl)] overflow-hidden relative"
          style={{
            background: "var(--ink-950)",
            transitionDelay: "0.2s",
          }}
        >
          {/* Radial accent */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,165,107,.18) 0%, transparent 65%)" }}
          />

          <div
            className={`relative px-8 py-10 flex flex-col md:flex-row items-start md:items-center gap-8 ${
              isAr ? "md:flex-row-reverse text-right" : "md:justify-between"
            }`}
          >
            <div className="flex flex-col gap-3 flex-1">
              <div className={`flex items-center gap-2 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
                <span className="w-2 h-2 rounded-full bg-[--gold-500] animate-pulse" />
                <span
                  className="text-[--gold-500] text-[11px] font-mono uppercase tracking-[.14em]"
                  style={{ fontFamily: "Geist Mono, monospace" }}
                >
                  {isAr ? "برنامج الوصول المبكر" : "Early Access Program"}
                </span>
              </div>
              <h3
                className="text-[24px] font-medium tracking-[-0.015em]"
                style={{
                  color: "#F4F1EA",
                  ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
                }}
              >
                {isAr
                  ? "كن من أوائل المجتمعات التي تعيش تجربة سابع جار"
                  : "Be among the first communities to experience Sevenhood"}
              </h3>
              <p
                className="text-[15px] leading-[1.55] max-w-[50ch]"
                style={{
                  color: "var(--ink-300)",
                  ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
                }}
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
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                {isAr ? "احجز مقعدك الآن" : "Reserve Your Spot"}
                <svg className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mt-12 reveal" style={{ transitionDelay: "0.24s" }}>
          <p
            className={`text-[12px] font-mono uppercase tracking-[.14em] text-[--fg-soft] mb-6 ${isAr ? "text-right" : ""}`}
            style={{ fontFamily: "Geist Mono, monospace" }}
          >
            {isAr ? "مصمَّم لمجتمعات المطورين الرائدين في المملكة" : "Designed for Saudi Arabia's leading developer communities"}
          </p>
          <div className="flex flex-wrap gap-2">
            {partners.map((co) => (
              <div
                key={co}
                className="px-4 py-2 rounded-[var(--r-md)] border border-[--hairline] text-[--fg-muted] text-[13px] font-medium hover:border-[--gold-400] hover:text-[--gold-600] transition-all duration-[140ms]"
                style={{ background: "var(--bg-elev)" }}
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
