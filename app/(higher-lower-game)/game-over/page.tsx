import { redirect } from 'next/navigation';
import { cookies } from 'next/dist/client/components/headers';
import ShowVignette from './ShowVignette';
import dynamic from 'next/dynamic';
import LeaderboardWithPlayer from './LeaderboardWithPlayer';
import { getDictionary } from 'i18n';
import { TValidLocale } from 'config';
import { THigherLowerGameDictionary } from 'dictionaries/7777/en';
import { IServerProps } from '@app/page';
import { useServerSearchParams } from '@hooks/useServerSearchParams';

const GameOverHeader = dynamic(() => import('./GameOverHeader'), {
  ssr: false,
});
const GameOverFooter = dynamic(() => import('./GameOverFooter'), {
  ssr: false,
});

const Page = async ({ searchParams }: IServerProps) => {
  const cookiesList = cookies();
  const lost = cookiesList.has('lost');

  if (lost !== true) {
    redirect('/?offer_id=7777');
  }
  const { language } = useServerSearchParams(searchParams);
  const d = (await getDictionary(7777, language as TValidLocale)) as THigherLowerGameDictionary;

  return (
    <>
      <ShowVignette />
      <div className='relative flex min-h-screen w-full flex-col items-start justify-center gap-4 bg-slate-900 px-2 py-4'>
        <div className='flex min-h-screen w-full flex-col items-center justify-start gap-8 place-self-center'>
          <GameOverHeader headerTexts={d.gameOver.header} />
          <div className='mb-16 flex w-full flex-1 flex-col items-center justify-start gap-4'>
            <LeaderboardWithPlayer language={language} />
          </div>
          <div className='fixed bottom-0 w-full max-w-2xl rounded-t-md bg-gray-600 bg-opacity-40 bg-clip-padding p-2 backdrop-blur-sm backdrop-filter'>
            <GameOverFooter footerTexts={d.gameOver.footer} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
