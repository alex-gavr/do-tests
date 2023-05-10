import { defaultLocale } from '@utils/defaultValues';
import { Dictionary } from 'dictionaries/en';

export const locales = ['en', 'id', 'th', 'tl'] as const;
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
  th: () => import('dictionaries/th').then((module) => module.default),
  tl: () => import('dictionaries/tl').then((module) => module.default),
} as const;

export const getTranslator = async (locale: ValidLocale) => {
  const dictionary = await dictionaries[locale]();
  return dictionary as Dictionary;
};
