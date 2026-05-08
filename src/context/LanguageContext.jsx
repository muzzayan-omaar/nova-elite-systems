import { createContext, useContext, useState } from "react";

import en from "../locales/en";
import ar from "../locales/ar";

const LanguageContext = createContext();

const translations = {
  en,
  ar,
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      <div dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}