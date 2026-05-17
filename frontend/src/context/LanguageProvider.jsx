import React, { useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations";
import { LanguageContext } from "./languageContext";

const getNestedValue = (source, path) =>
  path.split(".").reduce((value, key) => value?.[key], source);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("clovique-language");
    return storedLanguage === "uk" ? "uk" : "en";
  });

  useEffect(() => {
    localStorage.setItem("clovique-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const t = (key, replacements = {}) => {
      const phrase =
        getNestedValue(translations[language], key) ??
        getNestedValue(translations.en, key) ??
        key;

      if (typeof phrase !== "string") {
        return key;
      }

      return Object.entries(replacements).reduce(
        (result, [name, replacement]) =>
          result.replaceAll(`{{${name}}}`, replacement),
        phrase,
      );
    };

    return {
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((currentLanguage) =>
          currentLanguage === "en" ? "uk" : "en",
        ),
      t,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};
