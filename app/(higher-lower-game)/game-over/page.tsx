import { redirect } from 'next/navigation';
import { cookies } from 'next/dist/client/components/headers';
import ShowVignette from './ShowVignette';
import dynamic from 'next/dynamic';
import LeaderboardWithPlayer from './LeaderboardWithPlayer';
import { getDictionary } from 'i18n';
import { TValidLocale } from 'config';
import { THigherLowerGameDictionary } from 'dictionaries/10702/en';
import { IServerProps } from '@app/page';
import { useServerSearchParams } from '@hooks/useServerSearchParams';

const GameOverHeader = dynamic(() => import('./GameOverHeader'), {
  ssr: false,
  loading: () => <div className='h-[82px] w-full animate-pulse bg-slate-800' />,
});
const GameOverFooter = dynamic(() => import('./GameOverFooter'), {
  ssr: false,
  loading: () => <div className='h-[66px] animate-pulse bg-slate-800' />,
});
// const ShowVignette = dynamic(() => import('./ShowVignette'), {
//   ssr: false,
// });

const Page = async ({ searchParams }: IServerProps) => {
  const cookiesList = cookies();
  const lost = cookiesList.has('lost');
  const { language, searchParamString } = useServerSearchParams(searchParams);

  if (lost !== true) {
    redirect(`/?${searchParamString}`);
  }
  
  const d = (await getDictionary(10702, language as TValidLocale)) as THigherLowerGameDictionary;

  return (
    <>
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
      <ShowVignette />
    </>
  );
};

export default Page;
