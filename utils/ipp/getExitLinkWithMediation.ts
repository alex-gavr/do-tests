import production from '@utils/isProd';
import makeExitUrl from '@utils/makeExitUrl';

type Ipp = {
  click: string;
};

const getIppLink = async (zone: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_IPP_URL}${zone}`;
    const data = await fetch(url).then((res) => res.json());
    const res = data.ads[0] as Ipp;
    // const url = res.click.slice(15);
    if (production) {
      const domain = window.location.origin;
      const stringAfterDomain = res.click.substring(domain.length);
      const url = `https://in-page-push.net${stringAfterDomain}`;
      return url;
    } else {
      const domain = 'https://localhost/';
      const stringAfterDomain = res.click.substring(domain.length);
      const url = `https://in-page-push.net/${stringAfterDomain}`;
      console.log(url);
      return url;

    }
  } catch (error) {
    console.log(error);
  }
};
const getExitLinkWithMediation = async (ippZone: number, onclickZone: number) => {
  const getIpp = await getIppLink(ippZone);

  if (getIpp === undefined) {
    const getOnclick = makeExitUrl(onclickZone);
    return getOnclick;
  } else {
    return getIpp;
  }
};

export default getExitLinkWithMediation;
