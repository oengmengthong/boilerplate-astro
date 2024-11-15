import enTranslations from '../i18n/translations/en.json';
import kmTranslations from '../i18n/translations/km.json';
import zhTranslations from '../i18n/translations/zh.json';
import jaTranslations from '../i18n/translations/ja.json';

const translations = {
  en: enTranslations,
  km: kmTranslations,
  zh: zhTranslations,
  ja: jaTranslations
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  return lang in translations ? lang : 'en';
}

export function useTranslatedPath(lang: string) {
  return function translatePath(path: string) {
    return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
  };
}

export function useI18n(url: URL) {
  const lang = getLangFromUrl(url);

  function t(key: string): string {
    const parts = key.split('.');
    let value = translations[lang];
    for (const part of parts) {
      value = value?.[part];
      if (!value) return key;
    }
    return value as string;
  }

  const translatePath = useTranslatedPath(lang);

  return {
    lang,
    t,
    translatePath
  };
}