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
  abTest = 'abtest',
  osVersion = 'os_version',
  bannerId = 'b',
  campaignId = 'campaignid',
  subId = 's',
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
  const abTest = searchParams?.abtest ? searchParams.abtest : '';
  console.log('🚀 ~ abTest:', abTest)
  
  const osVersion = searchParams?.os_version ? searchParams.os_version : '';
  const bannerId = searchParams?.b ? searchParams.b : '';
  const campaignId = searchParams?.campaignid ? searchParams.campaignid : '';
  const subId = searchParams?.s ? searchParams.s : '';

  const searchParamString = Object.entries({
    offer_id: offerId,
    z: zone,
    var: requestVar,
    ymid,
    var_3: var3,
    ab2: abTest,
    os_version: osVersion,
    b: bannerId,
    campaignid: campaignId,
    s: subId,
  })
    .filter(([_, value]) => value !== '')
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

    

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
    searchParamString
  };
};
