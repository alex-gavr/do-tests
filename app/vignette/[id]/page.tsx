import getVignetteData from '@utils/Vignette/getVignetteData';
import Image from 'next/image';
import SendImpression from './SendImpression';
import Buttons from './Buttons';
import ButtonForProxy from './ButtonForProxy';

interface IVignetteProps {
  params: {
    id: string;
  };
}

const Vignette = async ({ params }: IVignetteProps) => {
  const { id } = params;
  const vignetteData = await getVignetteData(id);

  if (vignetteData === undefined) {
    return <ButtonForProxy />;
  }

  return (
    <>
      <SendImpression url={vignetteData.impression_url} />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className=' flex min-w-[280px] max-w-sm flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-2xl'>
          <div className='flex w-full flex-row items-center justify-start gap-4'>
            <div className='flex-shrink-0 overflow-hidden rounded-lg'>
              <Image
                src={vignetteData.icon}
                alt='ad'
                width={192}
                height={192}
                className='h-16 w-16 bg-black object-contain'
              />
            </div>
            <div className='flex flex-col justify-start'>
              <h2 className='text-lg leading-6'>{vignetteData.title}</h2>
              <p className='text-sm'>{vignetteData.text}</p>
            </div>
          </div>
          <div className='flex w-full flex-row justify-between gap-4'>
            <Buttons link={vignetteData.click} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vignette;
