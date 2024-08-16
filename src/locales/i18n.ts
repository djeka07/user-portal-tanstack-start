import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { dict as enDict } from "./en";
import { dict as svDict } from './sv';

i18n.use(initReactI18next).init({
  resources: {
    en: enDict,
    sv: svDict
  },
  lng: "en",
});