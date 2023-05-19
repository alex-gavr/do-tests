import VignetteUi from './VignetteUi';

interface IVignetteProps {
  params: {
    id: string;
  };
}

const Vignette = ({ params }: IVignetteProps) => {
  const { id } = params;
  // const vignetteData = await getVignetteData(id);

  return (
    <>
      <VignetteUi id={id} />
    </>
  );
};

export default Vignette;
