import { TValidLocale, TValidOffer, defaultCountry, defaultLocale, defaultOffer } from 'config';

// Left side used in code, right side in browser
export enum SearchParamsOptions {
  locale = 'locale',
  debug = 'debug',
  country = 'country',
  offerId = 'offer_id',
  zone = 'z',
  requestVar = 'var',
  ymid = 'ymid',
  var3 = 'var_3',
  abTest = 'ab2',
  osVersion = 'os_version',
  bannerId = 'b',
  campaignId = 'campaignid',
  subId = 's'
}

type TSearchParamsKeys = keyof typeof SearchParamsOptions;
export type TSearchParams = Partial<Record<SearchParamsOptions, string>>;

export const useServerSearchParams = (searchParams: TSearchParams) => {
  const language = searchParams.locale ?? defaultLocale;
  const country = searchParams?.country ?? defaultCountry;
  const debug = searchParams?.debug ? true : false;

  const offerIdValue = searchParams?.offer_id ? parseInt(searchParams.offer_id) : defaultOffer;
  const offerId = isNaN(offerIdValue) ? defaultOffer : offerIdValue;

  const zone = searchParams?.z ? searchParams.z : '';
  const requestVar = searchParams?.var ? searchParams.var : '';
  const ymid = searchParams?.ymid ? searchParams.ymid : '';
  const var3 = searchParams?.var_3 ? searchParams.var_3 : '';
  const abTest = searchParams?.ab2 ? searchParams.ab2 : '';
  const osVersion = searchParams?.os_version ? searchParams.os_version : '';
  const bannerId = searchParams?.b? searchParams.b : '';
  const campaignId = searchParams?.campaignid? searchParams.campaignid : '';
  const subId = searchParams?.s? searchParams.s : '';

  return {
    language: language as TValidLocale,
    country,
    debug,
    offerId: offerId as TValidOffer,
    zone,
    requestVar,
    ymid,
    var3,
    abTest,
    osVersion,
    bannerId,
    campaignId,
    subId,
  };
};
