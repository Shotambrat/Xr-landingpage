import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import uz from './locales/uz.json';
import ru from './locales/ru.json';

const resources = {
  uz: { translation: uz },
  ru: { translation: ru },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'uz',
    debug: true,

    interpolation: {
      escapeValue: true,
    },
    react: {
      useSuspense: false, 
      bindI18n: 'languageChanged loaded', 
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'], 
    },
  });



export default i18n;
