import triggerImpression from '@utils/Vignette/triggerImpression';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import makeExitUrlFromUrl, { UrlType } from '@utils/makeExitUrlFromUrl';

type IppData = {
  banner_id: number;
  title: string;
  text: string;
  icon: string;
  image: string;
  click: string;
  impression_url: string;
  buttons?: {
    name: string;
    url: string;
  }[];
};

const getIppLink = async (zone: number) => {
  try {
    const url = makeExitUrl(zone, ExitType.ipp) ?? '';

    // zone example 6020461
    const data = await fetch(url)
      .then((res) => res.json())
      .catch((error) => console.log(error));

    const empty = Object.keys(data).length === 0 ? true : false;
    if (empty) {
      throw new Error('No data from IPP');
    } else {
      const res = data.ads[0] as IppData;
      triggerImpression(res.impression_url);
      const exitUrl = makeExitUrlFromUrl(res.click, UrlType.ipp);

      return exitUrl;
    }
  } catch (error) {
    console.error(error);
  }
};

const getIppIfErrorGetOnclick = async (ippZone: number, onclickZone: number) => {
  const getIpp = await getIppLink(ippZone);

  if (getIpp === undefined) {
    const getOnclick = makeExitUrl(onclickZone, ExitType.onclick);
    return getOnclick;
  } else {
    return getIpp;
  }
};

export default getIppIfErrorGetOnclick;
