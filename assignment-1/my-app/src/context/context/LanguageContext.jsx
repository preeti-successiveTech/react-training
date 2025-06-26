"use client";

import { createContext, useState } from "react";

export const LanguageContext = createContext();

export const ShowSwitcher = ({ children }) => {
  const en = "Hi, I am in English.";
  const sp = "Hola, estoy en español.";
  const [language, setLanguage] = useState(en);

  const toggle = () => {


    if (language == en) {
      setLanguage(sp);
    } else {
      setLanguage(en);
    }
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};
