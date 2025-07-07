import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enLang from "../public/locales/en/translation.json";
import uaLang from "../public/locales/ua/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: enLang },
      ua: { translation: uaLang },
    },
    lng: "ua",
    fallbackLng: "en", // якщо мова не визначилась

    detection: {
      // порядок визначення мови
      order: ["localStorage", "navigator", "htmlTag"],
      // де зберігати
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;  
