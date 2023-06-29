import { TValidLocale, TValidOffer, defaultCountry, defaultLocale, defaultOffer } from 'config';
import { useSearchParams } from 'next/navigation';
import { SearchParamsOptions, TSearchParams } from './useServerSearchParams';

export const useClientSearchParams = () => {
  const searchParams = useSearchParams();

  const offerIdParam = (searchParams.get(SearchParamsOptions.offerId) as TSearchParams['offer_id']) ?? defaultOffer;
  const offerId = offerIdParam !== defaultOffer ? parseInt(offerIdParam) : defaultOffer;

  const language = (searchParams.get(SearchParamsOptions.locale) as TSearchParams['locale']) ?? defaultLocale;
  const country = (searchParams.get(SearchParamsOptions.country) as TSearchParams['country']) ?? defaultCountry;
  const debug = (searchParams.get(SearchParamsOptions.debug) as TSearchParams['debug']) ? true : false;

  const zone = (searchParams.get(SearchParamsOptions.zone) as TSearchParams['z']) ?? '';
  const requestVar = (searchParams.get(SearchParamsOptions.requestVar) as TSearchParams['var']) ?? '';
  const ymid = (searchParams.get(SearchParamsOptions.ymid) as TSearchParams['ymid']) ?? '';
  const var3 = (searchParams.get(SearchParamsOptions.var3) as TSearchParams['var_3']) ?? '';
  const abTest = (searchParams.get(SearchParamsOptions.abTest) as TSearchParams['ab2']) ?? '';
  const osVersion = (searchParams.get(SearchParamsOptions.osVersion) as TSearchParams['os_version']) ?? '';
  const bannerId = (searchParams.get(SearchParamsOptions.bannerId) as TSearchParams['b']) ?? '';
  const campaignId = (searchParams.get(SearchParamsOptions.campaignId) as TSearchParams['campaignid']) ?? '';

  return {
    language: language as TValidLocale,
    country,
    offerId: offerId as TValidOffer,
    debug,
    zone,
    requestVar,
    ymid,
    var3,
    abTest,
    osVersion,
    bannerId,
    campaignId,
  };
};
