import { TValidLocale, TValidOffer, locales, offers } from 'config';

const dictionaries: Record<(typeof offers)[number], Record<(typeof locales)[number], () => Promise<any>>> = {
  10702: {
    en: () => import('i18n/10702/en').then((module) => module.default),
    id: () => import('i18n/10702/id').then((module) => module.default),
    th: () => import('i18n/10702/th').then((module) => module.default),
    tl: () => import('i18n/10702/tl').then((module) => module.default),
    de: () => import('i18n/10702/de').then((module) => module.default),
    es: () => import('i18n/10702/es').then((module) => module.default),
    fr: () => import('i18n/10702/fr').then((module) => module.default),
    it: () => import('i18n/10702/it').then((module) => module.default),
    pt: () => import('i18n/10702/pt').then((module) => module.default),
  },
  9241: {
    en: () => import('i18n/9241/en').then((module) => module.default),
    id: () => import('i18n/9241/id').then((module) => module.default),
    th: () => import('i18n/9241/th').then((module) => module.default),
    tl: () => import('i18n/9241/tl').then((module) => module.default),
    de: () => import('i18n/9241/de').then((module) => module.default),
    es: () => import('i18n/9241/es').then((module) => module.default),
    fr: () => import('i18n/9241/fr').then((module) => module.default),
    it: () => import('i18n/9241/it').then((module) => module.default),
    pt: () => import('i18n/9241/pt').then((module) => module.default),
  },
  9998: {
    en: () => import('i18n/9998/en').then((module) => module.default),
    id: () => import('i18n/9998/id').then((module) => module.default),
    th: () => import('i18n/9998/th').then((module) => module.default),
    tl: () => import('i18n/9998/tl').then((module) => module.default),
    de: () => import('i18n/9998/de').then((module) => module.default),
    es: () => import('i18n/9998/es').then((module) => module.default),
    fr: () => import('i18n/9998/fr').then((module) => module.default),
    it: () => import('i18n/9998/it').then((module) => module.default),
    pt: () => import('i18n/9998/pt').then((module) => module.default),
  },
  9999: {
    en: () => import('i18n/9999/en').then((module) => module.default),
    id: () => import('i18n/9999/id').then((module) => module.default),
    th: () => import('i18n/9999/th').then((module) => module.default),
    tl: () => import('i18n/9999/tl').then((module) => module.default),
    de: () => import('i18n/9999/de').then((module) => module.default),
    es: () => import('i18n/9999/es').then((module) => module.default),
    fr: () => import('i18n/9999/fr').then((module) => module.default),
    it: () => import('i18n/9999/it').then((module) => module.default),
    pt: () => import('i18n/9999/pt').then((module) => module.default),
  },
  0: {
    en: () => import('i18n/0/en').then((module) => module.default),
    id: () => import('i18n/0/id').then((module) => module.default),
    th: () => import('i18n/0/th').then((module) => module.default),
    tl: () => import('i18n/0/tl').then((module) => module.default),
    de: () => import('i18n/0/de').then((module) => module.default),
    es: () => import('i18n/0/es').then((module) => module.default),
    fr: () => import('i18n/0/fr').then((module) => module.default),
    it: () => import('i18n/0/it').then((module) => module.default),
    pt: () => import('i18n/0/pt').then((module) => module.default),
  },
};

export const getDictionary = async (offer: TValidOffer, locale: TValidLocale) => {
  const dictionary = await dictionaries[offer][locale]();
  return dictionary;
};
