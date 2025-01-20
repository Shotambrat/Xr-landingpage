import { useTranslation } from "react-i18next";

export const useChangeLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
    document.cookie = `i18next=${lang}; path=/; secure; samesite=strict`;
    window.location.pathname = `/${lang}/`;
  };

  return { changeLanguage };
};
