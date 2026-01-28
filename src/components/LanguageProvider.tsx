"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "en" | "hi" | "mr";

type Dictionary = {
  book: string;
  services: string;
  about: string;
  blog: string;
  contact: string;
  menu: string;
  callNow: string;
  whatsapp: string;
  hours: string;
};

const dictionaries: Record<Language, Dictionary> = {
  en: {
    book: "Book Appointment",
    services: "Services",
    about: "About",
    blog: "Blog",
    contact: "Contact",
    menu: "Menu",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    hours: "Working Hours",
  },
  hi: {
    book: "अपॉइंटमेंट बुक करें",
    services: "सेवाएँ",
    about: "हमारे बारे में",
    blog: "ब्लॉग",
    contact: "संपर्क",
    menu: "मेनू",
    callNow: "कॉल करें",
    whatsapp: "व्हाट्सऐप",
    hours: "कार्य समय",
  },
  mr: {
    book: "अपॉइंटमेंट बुक करा",
    services: "सेवा",
    about: "आमच्याबद्दल",
    blog: "ब्लॉग",
    contact: "संपर्क",
    menu: "मेनू",
    callNow: "कॉल करा",
    whatsapp: "व्हॉट्सअॅप",
    hours: "कामाचे वेळापत्रक",
  },
};

const LanguageContext = createContext({
  language: "en" as Language,
  setLanguage: (_lang: Language) => {},
  t: dictionaries.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved && dictionaries[saved]) {
      setLanguage(saved);
    }
  }, []);

  const value = useMemo(() => {
    return {
      language,
      setLanguage: (lang: Language) => {
        localStorage.setItem("lang", lang);
        setLanguage(lang);
      },
      t: dictionaries[language],
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
