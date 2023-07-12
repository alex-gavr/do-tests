import { SearchParamsOptions } from '@hooks/useServerSearchParams';

export enum ExitType {
  onclick = 'onclick',
  ipp = 'ipp',
  ippWithRotationOnBackend = 'ippWithRotationOnBackend',
  vignette = 'vignette',
  reverse = 'reverse',
}

//  we receive zone if onclick and url if ipp or vignette
const makeExitUrl = (zone: number | string, type: ExitType) => {
  if (typeof window !== 'undefined') {
    const currentUrl = new URL(window.location.href);
    const zoneEntry = currentUrl.searchParams.get(SearchParamsOptions.zone) ?? '';
    const requestVar = currentUrl.searchParams.get(SearchParamsOptions.requestVar) ?? '';
    const bannerId = currentUrl.searchParams.get(SearchParamsOptions.bannerId) ?? '';
    const campaignId = currentUrl.searchParams.get(SearchParamsOptions.campaignId) ?? '';
    const osVersion = currentUrl.searchParams.get(SearchParamsOptions.osVersion) ?? '';
    const clickId = currentUrl.searchParams.get(SearchParamsOptions.subId) ?? '';
    const abTest = currentUrl.searchParams.get(SearchParamsOptions.abTest)?? '';

    const queryParams = new URLSearchParams();

    // Adding search parameters
    queryParams.set('var', `${zoneEntry}`);
    queryParams.set('ymid', `${requestVar}`);
    queryParams.set('b', `${bannerId}`);
    queryParams.set('campaignid', `${campaignId}`);
    queryParams.set('osversion', `${osVersion}`);
    queryParams.set('click_id', `${clickId}`);
    queryParams.set('ab2r', `${abTest}`);

    let baseUrl: string = '';
    if (type === ExitType.onclick) {
      baseUrl = `${process.env.NEXT_PUBLIC_ONCLICK_DOMAIN}/${process.env.NEXT_PUBLIC_ONCLICK_CODE}/${zone}/`;
    }
    if (type === ExitType.reverse) {
      baseUrl = `${process.env.NEXT_PUBLIC_DOMAIN_REVERSE}/${process.env.NEXT_PUBLIC_ONCLICK_CODE}/${zone}/`;
    }
    if (type === ExitType.ipp) {
      baseUrl = `${process.env.NEXT_PUBLIC_FORMATS_DOMAIN_DATA}/${zone}`;
    }
    if (type === ExitType.ippWithRotationOnBackend) {
      queryParams.set('zz', `${zone}`);
      baseUrl = `${process.env.NEXT_PUBLIC_MARKER_DOMAIN_ROTATION}`;
    }
    if (type === ExitType.vignette) {
      baseUrl = `${process.env.NEXT_PUBLIC_FORMATS_DOMAIN_DATA}/${zone}`;
    }

    const url = new URL(baseUrl);
    url.search = queryParams.toString();
    return url.href;

  } else {
    throw new Error('You cannot get exit url on backend');
  }
};
export default makeExitUrl;

// https://careersurvey.top/?offer_id=10702&z=6085938&s=698631152912838677&b=18233048&campaignid=7119450&var=%20&ymid=698631152912838677&var_3=%20&geo=NL&abtest=296069
