"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", en: "Features", ar: "المميزات" },
    { href: "#operators", en: "For Operators", ar: "للمشغلين" },
    { href: "#download", en: "Download", ar: "التحميل" },
    { href: "#contact", en: "Contact", ar: "اتصل بنا" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0D2818]/95 backdrop-blur-xl shadow-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Logo Mark */}
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <polygon
                  points="20,2 38,11 38,29 20,38 2,29 2,11"
                  fill="#C87C2A"
                  opacity="0.15"
                />
                <polygon
                  points="20,2 38,11 38,29 20,38 2,29 2,11"
                  stroke="#C87C2A"
                  strokeWidth="1.5"
                  fill="none"
                />
                <text
                  x="20"
                  y="25"
                  textAnchor="middle"
                  fill="#C87C2A"
                  fontSize="14"
                  fontWeight="700"
                  fontFamily="Inter, sans-serif"
                >
                  7
                </text>
              </svg>
            </div>
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl leading-none tracking-tight group-hover:text-gold transition-colors duration-200">
                Sevenhood
              </span>
              <span
                className="text-gold/80 text-xs leading-none mt-0.5 arabic-inline"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                سابع جار
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {lang === "EN" ? link.en : (
                  <span className="arabic-inline" style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}>
                    {link.ar}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/40 text-xs font-semibold transition-all duration-200"
            >
              <span className="text-xs">🌐</span>
              <span>{lang === "EN" ? "عربي" : "English"}</span>
            </button>

            {/* CTA */}
            <a
              href="#download"
              className="px-5 py-2.5 bg-gold hover:bg-gold-light text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
            >
              {lang === "EN" ? (
                "Get Started"
              ) : (
                <span className="arabic-inline" style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}>
                  ابدأ الآن
                </span>
              )}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mobile-menu-enter bg-[#081A10]/98 backdrop-blur-xl border-t border-white/10">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-sm font-medium"
              >
                <span>{link.en}</span>
                <span
                  className="text-white/40 arabic-inline text-xs"
                  style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                >
                  {link.ar}
                </span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => setLang(lang === "EN" ? "AR" : "EN")}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/20 text-white/60 text-sm font-semibold"
              >
                🌐 {lang === "EN" ? "التبديل إلى العربية" : "Switch to English"}
              </button>
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 bg-gold text-white text-sm font-semibold rounded-xl shadow-gold"
              >
                Get Started — ابدأ الآن
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
