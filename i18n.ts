import { TValidLocale, TValidOffer, defaultLocale, locales, offers } from 'config';

const dictionaries: Record<(typeof offers)[number], Record<(typeof locales)[number], () => Promise<any>>> = {
  7777: {
    en: () => import('dictionaries/7777/en').then((module) => module.default),
    id: () => import('dictionaries/7777/id').then((module) => module.default),
    th: () => import('dictionaries/7777/th').then((module) => module.default),
    tl: () => import('dictionaries/7777/tl').then((module) => module.default),
    de: () => import('dictionaries/7777/de').then((module) => module.default),
    es: () => import('dictionaries/7777/es').then((module) => module.default),
    fr: () => import('dictionaries/7777/fr').then((module) => module.default),
    it: () => import('dictionaries/7777/it').then((module) => module.default),
    pt: () => import('dictionaries/7777/pt').then((module) => module.default),
  },
  9241: {
    en: () => import('dictionaries/9241/en').then((module) => module.default),
    id: () => import('dictionaries/9241/id').then((module) => module.default),
    th: () => import('dictionaries/9241/th').then((module) => module.default),
    tl: () => import('dictionaries/9241/tl').then((module) => module.default),
    de: () => import('dictionaries/9241/de').then((module) => module.default),
    es: () => import('dictionaries/9241/es').then((module) => module.default),
    fr: () => import('dictionaries/9241/fr').then((module) => module.default),
    it: () => import('dictionaries/9241/it').then((module) => module.default),
    pt: () => import('dictionaries/9241/pt').then((module) => module.default),
  },
  9998: {
    en: () => import('dictionaries/9998/en').then((module) => module.default),
    id: () => import('dictionaries/9998/id').then((module) => module.default),
    th: () => import('dictionaries/9998/th').then((module) => module.default),
    tl: () => import('dictionaries/9998/tl').then((module) => module.default),
    de: () => import('dictionaries/9998/de').then((module) => module.default),
    es: () => import('dictionaries/9998/es').then((module) => module.default),
    fr: () => import('dictionaries/9998/fr').then((module) => module.default),
    it: () => import('dictionaries/9998/it').then((module) => module.default),
    pt: () => import('dictionaries/9998/pt').then((module) => module.default),
  },
  9999: {
    en: () => import('dictionaries/9999/en').then((module) => module.default),
    id: () => import('dictionaries/9999/id').then((module) => module.default),
    th: () => import('dictionaries/9999/th').then((module) => module.default),
    tl: () => import('dictionaries/9999/tl').then((module) => module.default),
    de: () => import('dictionaries/9999/de').then((module) => module.default),
    es: () => import('dictionaries/9999/es').then((module) => module.default),
    fr: () => import('dictionaries/9999/fr').then((module) => module.default),
    it: () => import('dictionaries/9999/it').then((module) => module.default),
    pt: () => import('dictionaries/9999/pt').then((module) => module.default),
  },
  default: {
    en: () => import('dictionaries/default/en').then((module) => module.default),
    id: () => import('dictionaries/default/id').then((module) => module.default),
    th: () => import('dictionaries/default/th').then((module) => module.default),
    tl: () => import('dictionaries/default/tl').then((module) => module.default),
    de: () => import('dictionaries/default/de').then((module) => module.default),
    es: () => import('dictionaries/default/es').then((module) => module.default),
    fr: () => import('dictionaries/default/fr').then((module) => module.default),
    it: () => import('dictionaries/default/it').then((module) => module.default),
    pt: () => import('dictionaries/default/pt').then((module) => module.default),
  },
};

export const getDictionary = async (offer: TValidOffer, locale: TValidLocale) => {
  const dictionary = await dictionaries[offer][locale]();
  return dictionary;
};
