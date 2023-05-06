import BackButton from '@components/Monetization/BackButton';
import Debug from './Debug';
import { ISearchParams, useServerSearchParams } from '@hooks/useServerSearchParams';
import CareerSurvey from './(CareerSurvey)/CareerSurvey';
import DefaultSurvey from './(DefaultSurvey)/DefaultSurvey';
import TravelSurvey from './(TravelSurvey)/TravelSurvey';


export interface IServerProps {
  params: {
    offerId: number | 'default';
  };
  searchParams: ISearchParams;
}

const StartingPage = async ({ searchParams, params }: IServerProps) => {
  const { language, country, debug, offerId } = useServerSearchParams(searchParams);
  // console.log(language, country, debug, offerId);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 pb-10 pt-20 sm:px-4'>
      <Debug debug={debug} />
      {offerId === 9241 && <CareerSurvey />}
      {offerId === 'default' && <DefaultSurvey />}
      {/* @ts-expect-error Async Server Component */}
      {offerId === 9999 && <TravelSurvey language={language} />}
      <BackButton />
    </main>
  );
};

export default StartingPage;
