export default function Footer() {
  const currentYear = 2026;

  return (
    <footer id="contact" className="bg-[#04100A] border-t border-white/8">
      {/* Contact strip */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="badge bg-gold/15 border border-gold/30 text-gold text-xs">
                Get in Touch
              </span>
              <h2 className="text-3xl font-bold text-white">
                Ready to bring Sevenhood
                <br />
                to your community?
              </h2>
              <p
                className="text-white/40 arabic text-lg"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                هل أنت مستعد لجلب سابع جار إلى مجتمعك؟
              </p>
              <p className="text-white/55 leading-relaxed">
                Our team is ready to walk you through a personalised demo and
                get your community onboarded within days.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                />
                <input
                  type="text"
                  placeholder="Community / Company"
                  className="sm:col-span-2 px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                />
                <button
                  type="submit"
                  className="sm:col-span-2 py-3.5 bg-gold hover:bg-gold-light text-white font-semibold rounded-xl transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
                >
                  Request a Demo →
                </button>
              </div>
              <p className="text-white/30 text-xs text-center">
                We&apos;ll get back to you within 24 hours. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 space-y-5">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="#C87C2A" opacity="0.15"/>
                  <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" stroke="#C87C2A" strokeWidth="1.5" fill="none"/>
                  <text x="20" y="25" textAnchor="middle" fill="#C87C2A" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">7</text>
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-xl">Sevenhood</span>
                <p
                  className="text-gold/70 text-xs arabic-inline block"
                  style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                >
                  سابع جار
                </p>
              </div>
            </a>

            <p className="text-white/45 text-sm leading-relaxed">
              The premium community management platform built for Saudi
              Arabia&apos;s finest residential developments.
            </p>
            <p
              className="text-white/25 text-xs leading-relaxed arabic"
              style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
            >
              سابع جار — للمجتمعات الفاخرة
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: "X", icon: "𝕏" },
                { label: "LinkedIn", icon: "in" },
                { label: "Instagram", icon: "◉" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/6 border border-white/10 hover:bg-white/12 hover:border-gold/30 flex items-center justify-center text-white/60 hover:text-white text-sm font-bold transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-sm">Platform</h3>
            <ul className="space-y-3">
              {[
                { en: "Features", ar: "المميزات" },
                { en: "For Residents", ar: "للسكان" },
                { en: "For Operators", ar: "للمشغلين" },
                { en: "Pricing", ar: "الأسعار" },
                { en: "Integrations", ar: "التكاملات" },
              ].map((link) => (
                <li key={link.en}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors duration-200"
                  >
                    <span>{link.en}</span>
                    <span
                      className="text-white/25 text-xs arabic-inline opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        fontFamily: "'Noto Kufi Arabic', Arial, sans-serif",
                      }}
                    >
                      {link.ar}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-sm">Company</h3>
            <ul className="space-y-3">
              {[
                { en: "About Us", ar: "من نحن" },
                { en: "Careers", ar: "الوظائف" },
                { en: "Blog", ar: "المدونة" },
                { en: "Press Kit", ar: "الصحافة" },
                { en: "Contact", ar: "اتصل بنا" },
              ].map((link) => (
                <li key={link.en}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-white/45 hover:text-white text-sm transition-colors duration-200"
                  >
                    <span>{link.en}</span>
                    <span
                      className="text-white/25 text-xs arabic-inline opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        fontFamily: "'Noto Kufi Arabic', Arial, sans-serif",
                      }}
                    >
                      {link.ar}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold text-sm">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/30 text-xs mb-1">Email</p>
                <a
                  href="mailto:hello@sevenhood.sa"
                  className="text-gold hover:text-gold-light text-sm transition-colors"
                >
                  hello@sevenhood.sa
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-1">Location</p>
                <p className="text-white/55 text-sm">Riyadh, Saudi Arabia</p>
                <p
                  className="text-white/30 text-xs arabic-inline"
                  style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                >
                  الرياض، المملكة العربية السعودية
                </p>
              </div>
              <div>
                <p className="text-white/30 text-xs mb-2">Download</p>
                <div className="flex gap-2">
                  <a
                    href="#download"
                    className="px-3 py-1.5 bg-white/8 border border-white/15 hover:border-gold/40 rounded-lg text-white/60 hover:text-white text-xs transition-all duration-200"
                  >
                    App Store
                  </a>
                  <a
                    href="#download"
                    className="px-3 py-1.5 bg-white/8 border border-white/15 hover:border-gold/40 rounded-lg text-white/60 hover:text-white text-xs transition-all duration-200"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-white/30 text-xs">
              <span>© {currentYear} Sevenhood Technologies. All rights reserved.</span>
              <span
                className="arabic-inline"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                جميع الحقوق محفوظة
              </span>
            </div>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
