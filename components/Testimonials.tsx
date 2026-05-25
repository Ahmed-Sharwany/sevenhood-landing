"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Sevenhood completely transformed how we manage Roshn Front. Our residents love the app — maintenance requests are resolved 3x faster and we've seen a dramatic reduction in complaints.",
    quoteAr:
      "سابع جار غيّر طريقة إدارتنا لمشروع روشن فرونت بشكل جذري. سكاننا يحبون التطبيق — طلبات الصيانة تُحل بسرعة ثلاثة أضعاف.",
    name: "Mohammed Al-Qahtani",
    nameAr: "محمد القحطاني",
    role: "Director of Operations",
    company: "Roshn Group",
    avatar: "M",
    avatarBg: "bg-emerald-700",
    rating: 5,
  },
  {
    quote:
      "The visitor management system alone has been a game-changer for our gated community. Residents issue passes in seconds and our security team has full visibility at all times.",
    quoteAr:
      "نظام إدارة الزوار وحده كان تحولاً جذرياً لمجتمعنا المسوّر. يصدر السكان التصاريح في ثوانٍ وفريق الأمن لديه رؤية كاملة في جميع الأوقات.",
    name: "Sara Al-Hamad",
    nameAr: "سارة الحمد",
    role: "Community Manager",
    company: "Diriyah Gate Authority",
    avatar: "S",
    avatarBg: "bg-blue-700",
    rating: 5,
  },
  {
    quote:
      "We evaluated five platforms before choosing Sevenhood. The Arabic language support is flawless, the UI is premium, and the team's support has been exceptional throughout.",
    quoteAr:
      "قيّمنا خمس منصات قبل اختيار سابع جار. دعم اللغة العربية مثالي والواجهة فاخرة والفريق كان استثنائياً طوال الوقت.",
    name: "Faisal Al-Otaibi",
    nameAr: "فيصل العتيبي",
    role: "VP Real Estate",
    company: "PIF Communities",
    avatar: "F",
    avatarBg: "bg-purple-700",
    rating: 5,
  },
  {
    quote:
      "As a resident, the app is simply beautiful. I book the gym, track my maintenance requests, and stay connected with my community all in one place. Nothing else compares.",
    quoteAr:
      "كساكن، التطبيق جميل ببساطة. أحجز الصالة الرياضية وأتابع طلباتي وأبقى متواصلاً مع مجتمعي — كل شيء في مكان واحد.",
    name: "Noura Al-Rashidi",
    nameAr: "نورة الرشيدي",
    role: "Resident",
    company: "AlUla Heritage Villas",
    avatar: "N",
    avatarBg: "bg-rose-700",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current
            ?.querySelectorAll(".testi-animate")
            .forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
              }, i * 100);
            });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="testi-animate opacity-0 translate-y-10 transition-all duration-600">
            <span className="badge bg-forest/8 border border-forest/15 text-forest/70">
              <span className="text-gold">◆</span> Trusted Across KSA
            </span>
          </div>
          <div className="testi-animate opacity-0 translate-y-10 transition-all duration-600 space-y-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-forest leading-tight">
              Loved by communities
              <span className="block text-gold">across Saudi Arabia</span>
            </h2>
            <p
              className="text-2xl text-forest/30 arabic"
              style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
            >
              محبوب من المجتمعات في كل أنحاء المملكة
            </p>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testi-animate testimonial-card opacity-0 translate-y-10 transition-all duration-600 bg-white rounded-3xl p-8 shadow-card border border-gray-100"
            >
              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <blockquote className="mt-4 space-y-3">
                <p className="text-forest/75 text-base leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p
                  className="text-forest/40 text-sm leading-relaxed arabic border-t border-gray-100 pt-3"
                  style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                >
                  &ldquo;{t.quoteAr}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-forest font-semibold text-sm">{t.name}</p>
                    <span
                      className="text-forest/40 text-xs arabic-inline"
                      style={{
                        fontFamily: "'Noto Kufi Arabic', Arial, sans-serif",
                      }}
                    >
                      {t.nameAr}
                    </span>
                  </div>
                  <p className="text-forest/50 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo cloud */}
        <div className="mt-14 testi-animate opacity-0 translate-y-10 transition-all duration-600">
          <p className="text-center text-forest/40 text-sm mb-6 font-medium">
            Trusted by Saudi Arabia&apos;s leading developers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Roshn Group", "PIF", "KAFD", "Diriyah Gate", "NEOM", "AlUla"].map((co) => (
              <div key={co} className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-forest/50 font-semibold text-sm hover:border-gold/30 hover:text-gold transition-all duration-200">
                {co}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
