// export const runtime = 'edge';

import BackButton from '@components/Monetization/BackButton';
import CareerSurvey from './(careerSurvey)/CareerSurvey';
import DefaultSurvey from './(defaultSurvey)/DefaultSurvey';
import TravelSurvey from './(travelSurvey)/TravelSurvey';

interface ISearchParams {
  locale?: 'en' | 'id';
  offer_id?: string | undefined;
  debug?: string | undefined;
}
export interface IServerProps {
  // params: { lang: string; country: string };
  searchParams?: ISearchParams;
}

const StartingPage = async ({ searchParams }: IServerProps) => {
  const language = searchParams?.locale ?  searchParams?.locale : 'en';

  const offerId = searchParams?.offer_id ? parseInt(searchParams.offer_id) : undefined;
  const debug = searchParams?.debug ? true : false;

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 pb-10 pt-20 sm:px-4'>
      {debug && (
        <p className='fixed right-2 top-2 rounded bg-slate-900 px-4 py-2 text-xs text-emerald-300 border border-red-500'>
          You are in a debug mode
        </p>
      )}
      {offerId === 9241 && <CareerSurvey />}
      {offerId === undefined && <DefaultSurvey />}
      {/* @ts-ignore */}
      {offerId === 9999 && <TravelSurvey language={language} />}
      <BackButton />
    </main>
  );
};

export default StartingPage;
