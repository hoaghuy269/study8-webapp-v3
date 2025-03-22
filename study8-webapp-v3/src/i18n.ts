import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import viTranslation from './locales/vi.json';

const storedLanguage = localStorage.getItem('language') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            vi: { translation: viTranslation }
        },
        lng: storedLanguage,
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;
