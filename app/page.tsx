import BackButton from '@components/Monetization/BackButton';
import Debug from './Debug';
import { TSearchParams, useServerSearchParams } from '@hooks/useServerSearchParams';
import CareerSurvey from './(careerSurvey)/CareerSurvey';
import DefaultSurvey from './(defaultSurvey)/DefaultSurvey';
import TravelSurvey from './(travelSurvey)/TravelSurvey';
import ShoppingSurvey from './(shoppingSurvey)/ShoppingSurvey';
import HigherLowerGame from './(higher-lower-game)/HigherLowerGame';

export interface IServerProps {
  searchParams: TSearchParams;
}

const StartingPage = async ({ searchParams }: IServerProps) => {
  const { language, country, debug, offerId, zone, searchParamString } = useServerSearchParams(searchParams);

  return (
    <>
      <main>
        {debug && <Debug debug={debug} />}
        {offerId === 9241 && <CareerSurvey />}
        {offerId === 0 && <DefaultSurvey />}
        {offerId === 9998 && <ShoppingSurvey language={language} />}
        {offerId === 9999 && <TravelSurvey language={language} />}
        {offerId === 10702 && (
          <HigherLowerGame country={country} language={language} offer={offerId} zone={zone} searchParamString={searchParamString} />
        )}
        {offerId !== 10702 && <BackButton />}
      </main>
    </>
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
