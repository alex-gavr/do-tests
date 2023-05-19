import { IVignette } from '@context/vignette/vignetteStateType';

const getVignetteData = async (zone: string) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_VIGNETTE_URL}${zone}`,{credentials: 'same-origin'}).then((res) => {
      console.log(res);
      return res.json();
    });
    // console.log(data);
    return data.ads[0] as IVignette;
  } catch (error) {
    console.log(error);
  }
};
export default getVignetteData;
