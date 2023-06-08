import { redirect } from 'next/navigation';
import { cookies } from 'next/dist/client/components/headers';
import ShowVignette from './ShowVignette';
// import ButtonsContainer from './ButtonsContainer';
// import ScoresContainer from '@components/HigherLowerGameUi/ScoresContainer';

import dynamic from 'next/dynamic';
import Position from './Position';
import production from '@utils/isProd';
import AutoExit from '@components/Monetization/AutoExit';

const GameOverHeader = dynamic(() => import('./GameOverHeader'), {
  ssr: false,
});
const GameOverFooter = dynamic(() => import('./GameOverFooter'), {
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
      {production && <AutoExit />}
      <ShowVignette />
      <div className='relative flex min-h-screen w-full flex-col items-start justify-center gap-4 bg-slate-900 px-2 py-4'>
        <div className='flex min-h-screen w-full flex-col items-center justify-start gap-8 place-self-center'>
          <GameOverHeader />
          <div className='mb-16 flex w-full flex-1 flex-col items-center justify-start gap-4'>
            <Position />
          </div>
          <div className='fixed bottom-0 w-full rounded-t-md bg-gray-600 bg-opacity-40 bg-clip-padding p-2 backdrop-blur-sm backdrop-filter'>
            <GameOverFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
