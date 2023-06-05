import { redirect } from 'next/navigation';
import { cookies } from 'next/dist/client/components/headers';
import ShowVignette from './ShowVignette';
// import ButtonsContainer from './ButtonsContainer';
// import ScoresContainer from '@components/HigherLowerGameUi/ScoresContainer';

import dynamic from 'next/dynamic';

const ButtonsContainer = dynamic(() => import('./ButtonsContainer'), { ssr: false });
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
      <div className='relative flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 px-2 py-4'>
        <div className='absolute top-4 w-full'>
          <ScoresContainer />
        </div>
        <div className='flex flex-col items-center justify-center gap-8 place-self-center'>
          <ButtonsContainer />
        </div>
      </div>
    </>
  );
};

export default Page;
