"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Lang = "EN" | "AR";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  isAr: boolean;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LangContextType>({
  lang: "EN",
  setLang: () => {},
  isAr: false,
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");

  // Update <html> dir and lang attributes when language changes
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "AR" ? "ar" : "en");
    document.documentElement.setAttribute("dir", lang === "AR" ? "rtl" : "ltr");
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        isAr: lang === "AR",
        dir: lang === "AR" ? "rtl" : "ltr",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
