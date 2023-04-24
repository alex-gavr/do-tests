// export const runtime = 'experimental-edge';

import { ValidLocale, getTranslator } from 'i18n';
import CareerSurvey from './(careerSurvey)/CareerSurvey';
import DefaultSurvey from './(defaultSurvey)/DefaultSurvey';
import TravelSurvey from './(travelSurvey)/TravelSurvey';

export interface IServerProps {
  // params: { lang: string; country: string };
  searchParams?: { [key: string]: string | undefined };
}

const StartingPage = async ({ searchParams }: IServerProps) => {
  const language = searchParams?.locale

  const offerId = searchParams?.offer_id ? parseInt(searchParams.offer_id) : undefined;

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 pb-10 pt-20 sm:px-4'>
      {offerId === 9241 && <CareerSurvey />}
      {offerId === undefined && <DefaultSurvey />}
      {/* @ts-ignore */}
      {offerId === 9999 && <TravelSurvey language={language} />}
    </main>
  );
};

export default StartingPage;
