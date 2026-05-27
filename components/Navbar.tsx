"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";

const navLinks = {
  EN: [
    { href: "#features", label: "Features" },
    { href: "#operators", label: "For Operators" },
    { href: "#download", label: "Download" },
    { href: "#contact", label: "Contact" },
  ],
  AR: [
    { href: "#features", label: "المميزات" },
    { href: "#operators", label: "للمشغلين" },
    { href: "#download", label: "تحميل التطبيق" },
    { href: "#contact", label: "اتصل بنا" },
  ],
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, isAr } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = isAr ? navLinks.AR : navLinks.EN;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0D2818]/96 backdrop-blur-2xl shadow-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between h-20 ${isAr ? "flex-row-reverse" : ""}`}>

          {/* Logo */}
          <a href="#" className={`flex items-center gap-3 group ${isAr ? "flex-row-reverse" : ""}`}>
            <div className="relative w-10 h-10 flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="#C87C2A" opacity="0.15"/>
                <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" stroke="#C87C2A" strokeWidth="1.5" fill="none"/>
                <text x="20" y="25" textAnchor="middle" fill="#C87C2A" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">7</text>
              </svg>
            </div>
            <div className={`flex flex-col ${isAr ? "items-end" : ""}`}>
              <span className="text-white font-bold text-xl leading-none tracking-tight group-hover:text-gold transition-colors duration-200">
                {isAr ? "سابع جار" : "Sevenhood"}
              </span>
              <span className="text-gold/70 text-xs leading-none mt-0.5 font-light">
                {isAr ? "Sevenhood" : "سابع جار"}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={`hidden md:flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
            {/* Language Toggle */}
            <button
              onClick={() => setLang(isAr ? "EN" : "AR")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/40 text-xs font-semibold transition-all duration-200"
            >
              <span className="text-xs">🌐</span>
              <span>{isAr ? "English" : "عربي"}</span>
            </button>

            {/* Operator Console CTA */}
            <a
              href="https://admin.sevenhood.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white/20 text-white/70 text-sm font-medium rounded-xl hover:bg-white/8 hover:border-white/40 transition-all duration-200"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr ? "بوابة المشغل" : "Operator Console"}
            </a>

            {/* Primary CTA */}
            <a
              href="#download"
              className="px-5 py-2.5 bg-gold hover:bg-gold-light text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr ? "ابدأ الآن" : "Get Started"}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden mobile-menu-enter bg-[#081A10]/98 backdrop-blur-xl border-t border-white/10"
          dir={isAr ? "rtl" : "ltr"}
        >
          <div className="px-6 py-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-sm font-medium ${isAr ? "justify-end" : ""}`}
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => { setLang(isAr ? "EN" : "AR"); setMobileOpen(false); }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/20 text-white/60 text-sm font-semibold"
              >
                🌐 {isAr ? "Switch to English" : "التبديل إلى العربية"}
              </button>
              <a
                href="https://admin.sevenhood.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-center py-2.5 border border-white/20 text-white/60 text-sm font-medium rounded-xl hover:bg-white/8"
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {isAr ? "بوابة المشغل" : "Operator Console"}
              </a>
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="text-center py-3 bg-gold text-white text-sm font-semibold rounded-xl shadow-gold"
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {isAr ? "ابدأ الآن" : "Get Started"}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
