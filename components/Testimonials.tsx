"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const pillars = {
  EN: [
    {
      icon: "🇸🇦",
      title: "Built for Saudi Arabia",
      description:
        "Designed from the ground up for the Kingdom's real estate landscape — aligned with Vision 2030, PDPL-compliant, and deeply rooted in Saudi culture and community values.",
      color: "border-emerald-500/20",
      glow: "from-emerald-500/10 to-transparent",
    },
    {
      icon: "🌐",
      title: "Genuinely Bilingual",
      description:
        "Not a translation — a native bilingual experience. Every screen, every notification, every interaction is crafted with equal care in both Arabic and English.",
      color: "border-blue-500/20",
      glow: "from-blue-500/10 to-transparent",
    },
    {
      icon: "🔒",
      title: "Enterprise-Grade Security",
      description:
        "Bank-level encryption, full PDPL compliance, and role-based access control. Your residents' data is protected with the highest standards in the industry.",
      color: "border-gold/20",
      glow: "from-gold/10 to-transparent",
    },
    {
      icon: "🤖",
      title: "AI-Powered Features",
      description:
        "The first community platform in KSA with built-in AI interior design — letting residents transform their spaces with a simple photo. Innovation built in, not bolted on.",
      color: "border-pink-500/20",
      glow: "from-pink-500/10 to-transparent",
    },
  ],
  AR: [
    {
      icon: "🇸🇦",
      title: "مصمّم للمملكة العربية السعودية",
      description:
        "بُني من الأساس ليخدم السوق العقاري في المملكة — متوافق مع رؤية 2030، ملتزم بنظام حماية البيانات الشخصية، ومتجذّر في ثقافة المجتمع السعودي وقيمه.",
      color: "border-emerald-500/20",
      glow: "from-emerald-500/10 to-transparent",
    },
    {
      icon: "🌐",
      title: "ثنائي اللغة حقيقياً",
      description:
        "ليست مجرد ترجمة — بل تجربة ثنائية اللغة أصيلة. كل شاشة وكل إشعار وكل تفاعل مصمَّم بعناية متساوية باللغتين العربية والإنجليزية.",
      color: "border-blue-500/20",
      glow: "from-blue-500/10 to-transparent",
    },
    {
      icon: "🔒",
      title: "أمان على مستوى المؤسسات",
      description:
        "تشفير بمستوى البنوك، امتثال كامل لنظام حماية البيانات الشخصية، وتحكم في الصلاحيات بالأدوار. بيانات سكانك محمية بأعلى معايير الصناعة.",
      color: "border-gold/20",
      glow: "from-gold/10 to-transparent",
    },
    {
      icon: "🤖",
      title: "مدعوم بالذكاء الاصطناعي",
      description:
        "أول منصة مجتمعية في المملكة تضم تصميماً داخلياً بالذكاء الاصطناعي — تتيح للسكان تحويل مساحاتهم بصورة واحدة فقط. ابتكار حقيقي، لا مجرد إضافة.",
      color: "border-pink-500/20",
      glow: "from-pink-500/10 to-transparent",
    },
  ],
};

const partners = [
  "Roshn Group", "PIF", "KAFD", "Diriyah Gate", "NEOM", "AlUla",
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".trust-animate").forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("opacity-100", "translate-y-0");
              el.classList.remove("opacity-0", "translate-y-10");
            }, i * 90);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const pillarList = isAr ? pillars.AR : pillars.EN;

  return (
    <section
      className="section-padding bg-cream"
      ref={ref}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="trust-animate opacity-0 translate-y-10 transition-all duration-600">
            <span className="badge bg-forest/8 border border-forest/15 text-forest/70">
              <span className="text-gold">◆</span>
              {isAr ? "ميزة سابع جار" : "The Sevenhood Difference"}
            </span>
          </div>
          <div className="trust-animate opacity-0 translate-y-10 transition-all duration-600">
            {isAr ? (
              <h2
                className="text-4xl lg:text-5xl font-bold text-forest leading-tight"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                المنصة التي كانت
                <span className="block text-gold">المملكة تنتظرها</span>
              </h2>
            ) : (
              <h2 className="text-4xl lg:text-5xl font-bold text-forest leading-tight">
                The platform Saudi Arabia
                <span className="block text-gold">has been waiting for</span>
              </h2>
            )}
          </div>
          <div className="trust-animate opacity-0 translate-y-10 transition-all duration-600">
            <p
              className="text-forest/60 text-lg max-w-2xl mx-auto leading-relaxed"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr
                ? "بُني سابع جار بمعايير عالمية، ليخدم السوق السعودي بعمق وأصالة. ليس منصة معرَّبة — بل منصة سعودية في جوهرها."
                : "Sevenhood is built to global standards with Saudi Arabia at its core. Not a localised product — a Saudi-native platform from day one."}
            </p>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {pillarList.map((pillar, i) => (
            <div
              key={i}
              className={`trust-animate opacity-0 translate-y-10 transition-all duration-600 bg-white rounded-3xl p-8 border ${pillar.color} shadow-card hover:shadow-gold hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${isAr ? "text-right" : ""}`}
            >
              {/* Background glow */}
              <div className={`absolute top-0 ${isAr ? "left-0" : "right-0"} w-48 h-48 bg-gradient-to-bl ${pillar.glow} rounded-full -translate-y-1/2 ${isAr ? "-translate-x-1/4" : "translate-x-1/4"} pointer-events-none`} />

              <div className={`relative flex items-start gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
                <div className="w-14 h-14 rounded-2xl bg-forest/5 border border-forest/10 flex items-center justify-center text-3xl flex-shrink-0">
                  {pillar.icon}
                </div>
                <div className="space-y-2">
                  <h3
                    className="text-forest font-bold text-xl"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-forest/60 text-sm leading-relaxed"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Early Access CTA Band */}
        <div className="trust-animate opacity-0 translate-y-10 transition-all duration-600">
          <div className="relative bg-forest rounded-3xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/8 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
            </div>

            <div className={`relative px-8 py-10 flex flex-col md:flex-row items-center gap-8 ${isAr ? "md:flex-row-reverse text-right" : "justify-between"}`}>
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <span
                    className="text-gold text-xs font-semibold uppercase tracking-widest"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif", letterSpacing: 0 } : undefined}
                  >
                    {isAr ? "برنامج الوصول المبكر" : "Early Access Program"}
                  </span>
                </div>
                {isAr ? (
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                  >
                    كن من أوائل المجتمعات التي تعيش تجربة سابع جار
                  </h3>
                ) : (
                  <h3 className="text-2xl font-bold text-white">
                    Be among the first communities to experience Sevenhood
                  </h3>
                )}
                <p
                  className="text-white/60 leading-relaxed max-w-lg"
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {isAr
                    ? "نحن نتعاون مع عدد محدود من المجتمعات لبرنامج الوصول المبكر. تواصل معنا الآن لتضمن مكانك."
                    : "We're partnering with a select number of communities for our early access program. Reach out now to secure your spot."}
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-light text-white font-semibold rounded-2xl transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {isAr ? "احجز مقعدك الآن" : "Reserve Your Spot"}
                  <svg
                    className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud — positioned developer communities */}
        <div className="mt-14 trust-animate opacity-0 translate-y-10 transition-all duration-600">
          <p
            className="text-center text-forest/40 text-sm mb-6 font-medium"
            style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
          >
            {isAr ? "مصمَّم لمجتمعات المطورين الرائدين في المملكة" : "Designed for Saudi Arabia's leading developer communities"}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {partners.map((co) => (
              <div
                key={co}
                className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-forest/50 font-semibold text-sm hover:border-gold/30 hover:text-gold transition-all duration-200"
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
