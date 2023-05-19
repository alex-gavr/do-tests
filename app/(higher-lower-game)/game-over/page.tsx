// import ButtonsContainer from './ButtonsContainer';
import { redirect } from 'next/navigation';
import { cookies } from 'next/dist/client/components/headers';
import ShowVignette from './ShowVignette';
// import ScoresContainer from '@components/HigherLowerGameUi/ScoresContainer';
import dynamic from 'next/dynamic';

const ButtonsContainer = dynamic(() => import('./ButtonsContainer'), {
  ssr: false,
});
const ScoresContainer = dynamic(() => import('@components/HigherLowerGameUi/ScoresContainer'), {
  ssr: false,
});

interface IPageProps {}

const Page = async ({}: IPageProps) => {
  const cookiesList = cookies();
  const lost = cookiesList.has('lost');

  if (lost !== true) {
    redirect('/higher-lower-game');
  }

  return (
    <>
    <ShowVignette />
      <div className='relative flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 py-4 px-2'>
        <div className='absolute top-4 w-full'>
          <ScoresContainer />
        </div>
        <div className='flex flex-col items-center justify-center gap-8 place-self-center'>
          {/* <h1 className='text-2xl text-white'>Game Over!</h1> */}
          <ButtonsContainer />
        </div>
      </div>
    </>
  );
};

export default Page;
