"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    en: { title: "Portfolio Management",  description: "Manage your entire portfolio of projects, buildings, towers, and units from a single unified dashboard. Full visibility across all your assets." },
    ar: { title: "إدارة المحافظ العقارية", description: "أدِر مشاريعك ومبانيك وأبراجك ووحداتك بالكامل من لوحة تحكم موحدة — رؤية شاملة لجميع أصولك." },
    no: "01",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    en: { title: "Smart Bookings",   description: "Reserve amenities — pools, gyms, meeting rooms, event halls — with intelligent conflict prevention and automated reminders." },
    ar: { title: "الحجوزات الذكية",  description: "احجز المرافق بكل سهولة — المسابح والصالات والغرف — مع منع التعارضات تلقائياً وتذكيرات فورية." },
    no: "02",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    en: { title: "Maintenance Requests", description: "Submit, track, and resolve maintenance tickets in real-time. Photo uploads, priority levels, and technician assignment built in." },
    ar: { title: "طلبات الصيانة",        description: "أرسل طلبات الصيانة وتابعها لحظة بلحظة — مع رفع الصور وتحديد الأولويات وتعيين الفنيين." },
    no: "03",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    en: { title: "Community Hub",  description: "Connect with neighbours, discover community events, share announcements, and build the social fabric of your community." },
    ar: { title: "مركز المجتمع",    description: "تواصل مع جيرانك، شارك في الفعاليات وأعلِن الأخبار — وابنِ روابط مجتمعية حقيقية." },
    no: "04",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    en: { title: "Visitor Access Control", description: "Issue digital visitor passes, manage gate access, track arrivals, and maintain full security logs for your community." },
    ar: { title: "إدارة الزوار",           description: "أصدر تصاريح زيارة رقمية، أدِر البوابات بأمان تام، وتتبّع الوصول مع سجلات أمنية كاملة." },
    no: "05",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    en: { title: "AI Interior Design",  description: "Transform your home with AI-powered design. Upload your space, describe your vision, and get stunning professional results." },
    ar: { title: "تصميم بالذكاء الاصطناعي", description: "حوّل منزلك بسحر الذكاء الاصطناعي — ارفع صورة مساحتك وصِف رؤيتك واحصل على نتائج مذهلة." },
    no: "06",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="section-padding"
      style={{ background: "var(--bg-elev)" }}
      ref={sectionRef}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-16 flex flex-col gap-4 ${isAr ? "items-end text-right" : ""}`}>
          <div className="reveal">
            <span className="eyebrow">
              <span className="dot" />
              {isAr ? "مميزات المنصة" : "Platform Features"}
            </span>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.08s" }}>
            {isAr ? (
              <h2
                className="text-[clamp(36px,4.5vw,58px)] leading-[1.05] tracking-[-0.025em] font-medium"
                style={{ fontFamily: "IBM Plex Sans Arabic, sans-serif" }}
              >
                كل ما يحتاجه مجتمعك
                <br />
                <em
                  className="font-normal"
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontStyle: "italic",
                    color: "var(--fg-muted)",
                  }}
                >
                  للازدهار والنجاح
                </em>
              </h2>
            ) : (
              <h2 className="text-[clamp(36px,4.5vw,58px)] leading-[1.05] tracking-[-0.025em] font-medium">
                Everything your community
                <br />
                <em
                  className="font-normal"
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontStyle: "italic",
                    color: "var(--fg-muted)",
                  }}
                >
                  needs to thrive
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
              ? "سابع جار يجمع كل الأدوات التي يحتاجها سكانك وفريق إدارتك — في منصة واحدة مصممة بإتقان."
              : "Sevenhood brings together every tool your residents and management team need — in one beautifully designed platform."}
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[--hairline] rounded-[var(--r-2xl)] overflow-hidden border border-[--hairline]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal bg-[--bg-elev] p-7 flex flex-col gap-5 hover:bg-[--bg-sunken] transition-colors duration-[140ms] cursor-default"
              style={{ transitionDelay: `${0.06 * index}s` }}
            >
              {/* Number + icon row */}
              <div className="flex items-start justify-between gap-4">
                <span
                  className="text-[10.5px] text-[--fg-soft] font-mono uppercase tracking-[.16em]"
                  style={{ fontFamily: "Geist Mono, monospace" }}
                >
                  {feature.no}
                </span>
                <div
                  className="w-9 h-9 rounded-[var(--r-md)] flex items-center justify-center text-[--fg-muted] border border-[--hairline]"
                  style={{ background: "var(--bg-sunken)" }}
                >
                  {feature.icon}
                </div>
              </div>

              {/* Text */}
              <div className={`flex flex-col gap-2 ${isAr ? "text-right" : ""}`}>
                <h3
                  className="text-[18px] font-medium tracking-[-0.012em] text-[--fg]"
                  style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                >
                  {isAr ? feature.ar.title : feature.en.title}
                </h3>
                <p
                  className="text-[14px] leading-[1.6] text-[--fg-muted]"
                  style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                >
                  {isAr ? feature.ar.description : feature.en.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`reveal mt-8 p-8 rounded-[var(--r-2xl)] border border-[--hairline] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${isAr ? "md:flex-row-reverse" : ""}`}
          style={{ background: "var(--bone-50)", transitionDelay: "0.3s" }}
        >
          <div className={isAr ? "text-right" : ""}>
            <h3
              className="text-[20px] font-medium tracking-[-0.015em] text-[--fg]"
              style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
            >
              {isAr ? "هل أنت مستعد لتحويل مجتمعك؟" : "Ready to transform your community?"}
            </h3>
            <p
              className="text-[14px] text-[--fg-muted] mt-1"
              style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
            >
              {isAr ? "انضم إلى برنامج الوصول المبكر اليوم." : "Join the early access program today."}
            </p>
          </div>
          <div className={`flex gap-3 shrink-0 ${isAr ? "flex-row-reverse" : ""}`}>
            <a
              href="#download"
              className="btn btn-primary"
              style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
            >
              {isAr ? "حمّل التطبيق" : "Download App"}
            </a>
            <a
              href="#operators"
              className="btn btn-ghost"
              style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
            >
              {isAr ? "للمشغلين" : "For Operators"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
