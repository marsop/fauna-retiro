import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import de from './locales/de.json';
import es from './locales/es.json';
import gl from './locales/gl.json';
import vbg from './locales/vbg.json';

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'hashQuery',
  lookup(options) {
    if (typeof window !== 'undefined') {
      const param = options.lookupQuerystring || 'lng';

      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has(param)) {
        return searchParams.get(param) as string;
      }

      const hash = window.location.hash;
      if (hash.includes('?')) {
        const hashParams = new URLSearchParams(hash.substring(hash.indexOf('?')));
        if (hashParams.has(param)) {
          return hashParams.get(param) as string;
        }
      }
    }
    return undefined;
  }
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      de: {
        translation: de,
      },
      es: {
        translation: es,
      },
      gl: {
        translation: gl,
      },
      vbg: {
        translation: vbg,
      },
    },
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['hashQuery', 'querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
    },
  });

export default i18n;
