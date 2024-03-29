import { TValidLocale, TValidOffer, defaultCountry, defaultLocale, defaultOffer } from 'config';
import { useSearchParams } from 'next/navigation';
import { SearchParamsOptions, TSearchParams } from './useServerSearchParams';
import { hasMacros, replaceMacrosWithEmptyString } from '@utils/replaceMacros';

export const useClientSearchParams = () => {
  if (typeof window !== 'undefined') {
    const doesHasMacros = hasMacros(window.location.href);
    if (doesHasMacros) {
      replaceMacrosWithEmptyString(window.location.href);
    }
  }
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
  const abTest = (searchParams.get(SearchParamsOptions.abTest) as TSearchParams['abtest']) ?? '';
  const osVersion = (searchParams.get(SearchParamsOptions.osVersion) as TSearchParams['os_version']) ?? '';
  const bannerId = (searchParams.get(SearchParamsOptions.bannerId) as TSearchParams['b']) ?? '';
  const campaignId = (searchParams.get(SearchParamsOptions.campaignId) as TSearchParams['campaignid']) ?? '';
  const subId = (searchParams.get(SearchParamsOptions.subId) as TSearchParams['s']) ?? '';
  const oaid = (searchParams.get(SearchParamsOptions.oaid) as TSearchParams['oaid']) ?? '';
  const vignette = (searchParams.get(SearchParamsOptions.vignette) as TSearchParams['vignette']) ?? '';

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
    subId,
    oaid,
    vignette,
  };
};
