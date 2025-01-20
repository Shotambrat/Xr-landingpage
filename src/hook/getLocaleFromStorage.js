export const getLanguageFromStorageOrCookie = () => {
  const storedLang = localStorage.getItem('i18nextLng');

  const cookieLang = document.cookie
    .split('; ')
    .find((row) => row.startsWith('i18next='))
    ?.split('=')[1];

  return storedLang || cookieLang || 'uz';
};