import BackButton from '@components/Monetization/BackButton';
import Debug from './Debug';
import { ISearchParams, useServerSearchParams } from '@hooks/useServerSearchParams';
import CareerSurvey from './(careerSurvey)/CareerSurvey';
import DefaultSurvey from './(defaultSurvey)/DefaultSurvey';
import TravelSurvey from './(travelSurvey)/TravelSurvey';
import ShoppingSurvey from './(shoppingSurvey)/ShoppingSurvey';

export interface IServerProps {
  searchParams: ISearchParams;
}

const StartingPage = async ({ searchParams }: IServerProps) => {
  const { language, country, debug, offerId } = useServerSearchParams(searchParams);

  // const response = await fetch('https://offpichuan.com/rotate?zz=5972907;5972947').then((response) => response.json());
  // console.log(response);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-2 px-2 pb-10 pt-20 sm:px-4'>
      {debug && <Debug debug={debug} />}
      {offerId === 9241 && <CareerSurvey />}
      {offerId === 'default' && <DefaultSurvey />}
      {/* @ts-expect-error Async Server Component */}
      {offerId === 9998 && <ShoppingSurvey language={language} />}
      {/* @ts-expect-error Async Server Component */}
      {offerId === 9999 && <TravelSurvey language={language} />}
      <BackButton />
    </main>
  );
};

export default StartingPage;

// const setSurveyDataToRedis = async (surveyData: TSurvey, offerId: number, lang: string) => {
//   const validData = surveySchema.parse(surveyData);
//   const dataForRedis = JSON.stringify(validData);
//   try {
//     const response = await kv.setnx(`offer:${offerId}:lang:${lang}`, dataForRedis);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
