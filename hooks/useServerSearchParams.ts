import { defaultCountry, defaultLocale, defaultOffer } from "@utils/defaultValues";


export interface ISearchParams {
  locale?: 'en' | 'id';
  offer_id?: string | undefined;
  debug?: string | undefined;
  country?: string | undefined;
}

export const useServerSearchParams = ( searchParams: ISearchParams) => {
  const language = searchParams?.locale ?? defaultLocale;
  const country = searchParams?.country ?? defaultCountry;
  const debug = searchParams?.debug ? true : false;
  const offerId = searchParams?.offer_id ? parseInt(searchParams.offer_id) : defaultOffer;

  return {
    language,
    country,
    offerId: offerId as number | "default",
    debug,
  };
};
