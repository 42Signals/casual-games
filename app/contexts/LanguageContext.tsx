import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "~/translations";

type Language = "en" | "es" | "zh" | "ja" | "fr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
};

const LANGUAGE_KEY = 'preferred_language';
const LANGUAGE_EXPIRY = 365 * 24 * 60 * 60 * 1000; // 365 days in milliseconds

// Helper function to get stored language with expiry check
const getStoredLanguage = (): Language | null => {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  if (!stored) return null;

  try {
    const { value, expiry } = JSON.parse(stored);
    if (expiry && Date.now() > expiry) {
      localStorage.removeItem(LANGUAGE_KEY);
      return null;
    }
    return value as Language;
  } catch {
    return null;
  }
};

// Helper function to store language with expiry
const storeLanguage = (lang: Language) => {
  const item = {
    value: lang,
    expiry: Date.now() + LANGUAGE_EXPIRY
  };
  localStorage.setItem(LANGUAGE_KEY, JSON.stringify(item));
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get language from localStorage during initialization
    if (typeof window !== 'undefined') {
      const stored = getStoredLanguage();
      if (stored) return stored;

      // If no stored preference, try to get browser language
      const browserLang = navigator.language.split('-')[0] as Language;
      if (Object.keys(translations).includes(browserLang)) {
        storeLanguage(browserLang);
        return browserLang;
      }
    }
    return "en";
  });

  // Wrapper function to update both state and localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      storeLanguage(lang);
    }
  };

  // Effect to sync language across tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LANGUAGE_KEY && e.newValue) {
        try {
          const { value } = JSON.parse(e.newValue);
          setLanguageState(value as Language);
        } catch {
          // Handle parsing error
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
