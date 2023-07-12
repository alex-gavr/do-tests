import { SearchParamsOptions } from '@hooks/useServerSearchParams';

export enum UrlType {
  ipp = 'ipp',
  onclick = 'onclick',
  vignette = 'vignette',
}

//  we receive zone if onclick and url if ipp or vignette
const makeExitUrlFromUrl = (url: string, urlType: UrlType) => {
  if (typeof window !== 'undefined') {
    const currentUrl = new URL(window.location.href);
    const zoneEntry = currentUrl.searchParams.get(SearchParamsOptions.zone) ?? '';
    const requestVar = currentUrl.searchParams.get(SearchParamsOptions.requestVar) ?? '';
    // const bannerId = currentUrl.searchParams.get(SearchParamsOptions.bannerId) ?? '';
    const campaignId = currentUrl.searchParams.get(SearchParamsOptions.campaignId) ?? '';
    const osVersion = currentUrl.searchParams.get(SearchParamsOptions.osVersion) ?? '';
    const clickId = currentUrl.searchParams.get(SearchParamsOptions.subId) ?? '';
    const abTest = currentUrl.searchParams.get(SearchParamsOptions.abTest) ?? '';

    const queryParams = new URLSearchParams();

    // Adding search parameters
    queryParams.set('var', `${zoneEntry}`);
    queryParams.set('ymid', `${requestVar}`);
    queryParams.set('campaignid', `${campaignId}`);
    queryParams.set('osversion', `${osVersion}`);
    queryParams.set('click_id', `${clickId}`);
    queryParams.set('ab2r', `${abTest}`);

    let newExitUrl = new URL(url);
    if (urlType === UrlType.ipp || urlType === UrlType.vignette) {
      // params from backend
      const zone = newExitUrl.searchParams.get('_z') ?? '';
      const bannerId = newExitUrl.searchParams.get(SearchParamsOptions.bannerId) ?? '';

      queryParams.set('_z', `${zone}`);
      queryParams.set('b', `${bannerId}`);
    }
    if (urlType === UrlType.onclick) {
      const userId = newExitUrl.searchParams.get('userId') ?? '';
      queryParams.set('userId', `${userId}`);
    }

    newExitUrl.search = queryParams.toString();
    return newExitUrl.href;
  } else {
    throw new Error('You cannot get exit url on backend');
  }
};
export default makeExitUrlFromUrl;
