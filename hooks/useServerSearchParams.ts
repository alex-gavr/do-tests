import { TValidLocale, TValidOffer, defaultCountry, defaultLocale, defaultOffer, defaultZone } from 'config';


export interface ISearchParams {
  locale?: TValidLocale;
  offer_id?: string | undefined;
  debug?: string | undefined;
  country?: string | undefined;
  z?: string | undefined;
}

export const useServerSearchParams = (searchParams: ISearchParams) => {
  const language = searchParams?.locale ?? defaultLocale;
  const country = searchParams?.country ?? defaultCountry;
  const debug = searchParams?.debug ? true : false;
  const offerId = searchParams?.offer_id ? parseInt(searchParams.offer_id) : defaultOffer;
  const zone = searchParams?.z ? parseInt(searchParams.z) : defaultZone;

  return {
    language,
    country,
    offerId: offerId as TValidOffer,
    debug,
    zone,
  };
};
