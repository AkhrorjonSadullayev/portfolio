import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // JSON tarjima fayllarini yuklash uchun
  .use(LanguageDetector) // Foydalanuvchi brauzer tilini aniqlash uchun
  .use(initReactI18next) // React uchun i18next integratsiyasi
  .init({
    fallbackLng: 'en', // Agar til topilmasa, inglizcha ishlatiladi
    debug: true, // Konsolda diagnostika uchun
    interpolation: {
      escapeValue: false, // Xavfsiz interpolatsiya
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // ✅ To‘g‘ri yo‘l
    },
  });

export default i18n;
