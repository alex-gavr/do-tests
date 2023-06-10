export const defaultLocale = 'en';
export const defaultCountry = 'rs';
export const defaultOffer = 'default';
export const locales = ['en', 'id', 'th', 'tl', 'it', 'de', 'fr', 'pt', 'es'] as const;
export const offers = [7777, 9241, 9998, 9999, 'default'] as const;

export type TValidLocale = (typeof locales)[number];
export type TValidOffer = (typeof offers)[number];
export type TLanguage = {
  language: TValidLocale;
};
