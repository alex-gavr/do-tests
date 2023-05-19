import { IVignette } from '@context/vignette/vignetteStateType';

const getVignetteData = async (zone: string) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_VIGNETTE_URL}${zone}`).then((res) => res.json());
    // console.log(data.ads[0]);
    return data.ads[0] as IVignette;
  } catch (error) {
    console.log(error);
  }
};
export default getVignetteData;
