import { TValidOffer, defaultCountry, defaultLocale, defaultOffer, defaultZone } from 'config';
import { useSearchParams } from 'next/navigation';
import { ISearchParams } from './useServerSearchParams';

export enum SearchParamsOptions {
  offerId = 'offer_id',
  locale = 'locale',
  debug = 'debug',
  country = 'country',
  zone = 'z',
}

export const useClientSearchParams = () => {
  const searchParams = useSearchParams();

  const offerIdParam =
    (searchParams.get(SearchParamsOptions.offerId) as ISearchParams['offer_id']) ?? defaultOffer;
  const offerId = offerIdParam !== defaultOffer ? parseInt(offerIdParam) : defaultOffer;

  const language = (searchParams.get(SearchParamsOptions.locale) as ISearchParams['locale']) ?? defaultLocale;
  const debug = (searchParams.get(SearchParamsOptions.debug) as ISearchParams['debug']) ? true : false;
  const country =
    (searchParams.get(SearchParamsOptions.country) as ISearchParams['country']) ?? defaultCountry;

  const zoneParam = (searchParams.get(SearchParamsOptions.zone) as ISearchParams['z']) ?? defaultZone;
  const zone = zoneParam !== defaultZone ? parseInt(zoneParam) : defaultZone;

  return {
    language,
    country,
    offerId: offerId as TValidOffer,
    debug,
    zone,
  };
};
