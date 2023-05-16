import { IVignette } from "@context/vignette/vignetteStateType";

const getVignetteData = async () => {
  try {
    const data = await fetch(process.env.NEXT_PUBLIC_VIGNETTE_URL).then((res) => res.json());
    console.log(data.ads[0]);
    return data.ads[0] as IVignette;
  } catch (error) {
    console.log(error);
  }
};
export default getVignetteData;
