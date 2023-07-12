import { IVignette } from '@app/vignette/[id]/VignetteUi';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import makeExitUrlFromUrl, { UrlType } from '@utils/makeExitUrlFromUrl';

const getVignetteData = async (zone: string) => {
  try {
    const url = makeExitUrl(zone, ExitType.vignette);
    const data = (await fetch(url).then((res) => res.json()));
    const d = data.ads as IVignette[];

    const readyData = d.map((i) => {
      const mutatedUrl = makeExitUrlFromUrl(i.click, UrlType.vignette);
      return {
        ...i,
        click: mutatedUrl,
      };
    });
    return readyData[0] as IVignette;
  } catch (error) {
    console.log(error);
  }
};
export default getVignetteData;
