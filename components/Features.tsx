"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const features = [
  {
    icon: "🏗️",
    en: {
      title: "Portfolio Management",
      description: "Manage your entire portfolio of projects, buildings, towers, and units from a single unified dashboard. Full visibility across all your assets.",
    },
    ar: {
      title: "إدارة المحافظ العقارية",
      description: "أدِر مشاريعك ومبانيك وأبراجك ووحداتك بالكامل من لوحة تحكم موحدة — رؤية شاملة لجميع أصولك.",
    },
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    accent: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: "📅",
    en: {
      title: "Smart Bookings",
      description: "Reserve amenities — pools, gyms, meeting rooms, event halls — with intelligent conflict prevention and automated reminders.",
    },
    ar: {
      title: "الحجوزات الذكية",
      description: "احجز المرافق بكل سهولة — المسابح والصالات والغرف — مع منع التعارضات تلقائياً وتذكيرات فورية.",
    },
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    accent: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: "🔧",
    en: {
      title: "Maintenance Requests",
      description: "Submit, track, and resolve maintenance tickets in real-time. Photo uploads, priority levels, and technician assignment built in.",
    },
    ar: {
      title: "طلبات الصيانة",
      description: "أرسل طلبات الصيانة وتابعها لحظة بلحظة — مع رفع الصور وتحديد الأولويات وتعيين الفنيين.",
    },
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    accent: "bg-orange-500/10 text-orange-400",
  },
  {
    icon: "👥",
    en: {
      title: "Community Hub",
      description: "Connect with neighbours, discover and join community events, share announcements, and build the social fabric of your community.",
    },
    ar: {
      title: "مجتمع متصل",
      description: "تواصل مع جيرانك، انضم للفعاليات وشارك الإعلانات — وابنِ روابط مجتمعية حقيقية.",
    },
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    accent: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: "🔑",
    en: {
      title: "Visitor Access Control",
      description: "Issue digital visitor passes, manage gate access, track arrivals, and maintain full security logs for your community.",
    },
    ar: {
      title: "إدارة الزوار",
      description: "أصدر تصاريح زيارة رقمية، أدِر البوابات بأمان تام، وتتبّع الوصول مع سجلات أمنية كاملة.",
    },
    color: "from-gold/20 to-gold/5",
    border: "border-gold/20",
    accent: "bg-gold/10 text-gold",
  },
  {
    icon: "✨",
    en: {
      title: "AI Interior Design",
      description: "Transform your home with AI-powered interior design. Upload your space, describe your vision, and get stunning professional results.",
    },
    ar: {
      title: "تصميم بالذكاء الاصطناعي",
      description: "حوّل منزلك بسحر الذكاء الاصطناعي — ارفع صورة مساحتك وصِف رؤيتك واحصل على نتائج مذهلة.",
    },
    color: "from-pink-500/20 to-pink-600/5",
    border: "border-pink-500/20",
    accent: "bg-pink-500/10 text-pink-400",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll(".feature-animate");
            cards?.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("opacity-100", "translate-y-0");
                card.classList.remove("opacity-0", "translate-y-10");
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="section-padding bg-white"
      ref={sectionRef}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 space-y-4 ${isAr ? "text-right" : ""}`}>
          <div className="flex justify-center">
            <span className="badge bg-forest/8 border border-forest/15 text-forest/70 inline-flex">
              <span className="text-gold">◆</span>
              {isAr ? "مميزات المنصة" : "Platform Features"}
            </span>
          </div>
          {isAr ? (
            <h2
              className="text-4xl lg:text-5xl font-bold text-forest leading-tight text-center"
              style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
            >
              كل ما يحتاجه مجتمعك
              <span className="block text-gold">للازدهار والنجاح</span>
            </h2>
          ) : (
            <h2 className="text-4xl lg:text-5xl font-bold text-forest leading-tight text-center">
              Everything your community
              <span className="block text-gold">needs to thrive</span>
            </h2>
          )}
          <p
            className="text-forest/60 text-lg max-w-2xl mx-auto leading-relaxed text-center"
            style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
          >
            {isAr
              ? "سابع جار يجمع كل الأدوات التي يحتاجها سكانك وفريق إدارتك — في منصة واحدة مصممة بإتقان."
              : "Sevenhood brings together every tool your residents and management team need — in one beautifully designed platform."}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-animate feature-card opacity-0 translate-y-10 transition-all duration-500 bg-white rounded-3xl p-7 border border-gray-100 shadow-card cursor-default ${isAr ? "text-right" : ""}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} border ${feature.border} flex items-center justify-center text-2xl mb-5`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="text-forest font-bold text-lg leading-tight mb-3"
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {isAr ? feature.ar.title : feature.en.title}
              </h3>

              {/* Description */}
              <p
                className="text-forest/60 text-sm leading-relaxed"
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {isAr ? feature.ar.description : feature.en.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className={`mt-12 p-8 rounded-3xl bg-cream border border-gold/20 flex flex-col md:flex-row items-center justify-between gap-6 ${isAr ? "md:flex-row-reverse text-right" : ""}`}>
          <div>
            <h3
              className="text-forest font-bold text-xl mb-1"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr ? "هل أنت مستعد لتحويل مجتمعك؟" : "Ready to transform your community?"}
            </h3>
            <p
              className="text-forest/50 text-sm"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr ? "انضم إلى برنامج الوصول المبكر اليوم." : "Join the early access program today."}
            </p>
          </div>
          <div className={`flex gap-4 flex-shrink-0 ${isAr ? "flex-row-reverse" : ""}`}>
            <a
              href="#download"
              className="px-6 py-3 bg-forest text-white font-semibold rounded-xl hover:bg-forest-light transition-all duration-200 shadow-forest hover:-translate-y-0.5"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr ? "حمّل التطبيق" : "Download App"}
            </a>
            <a
              href="#operators"
              className="px-6 py-3 border-2 border-forest/20 text-forest font-semibold rounded-xl hover:bg-forest/5 transition-all duration-200"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr ? "للمشغلين" : "For Operators"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
