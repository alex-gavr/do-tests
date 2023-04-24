import { Dictionary } from 'dictionaries/en';

export const defaultLocale = 'en';
export const locales = ['en', 'id'] as const;
export type ValidLocale = (typeof locales)[number];

type PathnameLocale = {
  pathname: string;
  locale?: never;
};
type ISOLocale = {
  pathname?: never;
  locale: string;
};

type LocaleSource = PathnameLocale | ISOLocale;

export const getLocalePartsFrom = ({ locale }: LocaleSource) => {
  const localeParts = locale?.toLowerCase().split('-');
  const lang = localeParts ? localeParts[0] : defaultLocale;
  return {
    lang,
  };
};

const dictionaries: Record<ValidLocale, any> = {
  en: () => import('dictionaries/en').then((module) => module.default),
  id: () => import('dictionaries/id').then((module) => module.default),
} as const;

export const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]();
  return dictionary as Dictionary;
  // console.log(dictionary);
  // return (key: string, params?: { [key: string]: string | number }) => {
  //   console.log(key);

  //   let translation = key.split('.').reduce((obj, key) => obj && obj[key], dictionary);
  //   if (!translation) {
  //     return key;
  //   }
  //   // if (params && Object.entries(params).length) {
  //   //   Object.entries(params).forEach(([key, value]) => {
  //   //     translation = translation!.replace(`{{ ${key} }}`, String(value));
  //   //   });
  //   // }
  //   return translation;
  // };
};
