import fs from 'fs';
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
  const { language, country, debug, offerId, zone, searchParamString, vignette } = useServerSearchParams(searchParams);

  const getScript = async () => {
    const filePath = './public/adsterra/social_NoAlerts_NoSoftware_NoAdsWithSound.js';

    try {
      const response = await fetch('https://pl20118814.highwaycpmrevenue.com/1e/62/59/1e6259bdc59431e3066ab6dbcfab5747.js', {
        headers: {
          'X-Forwarded-For': '192.168.121.36',
        },
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const text = await response.text();

      // Write the response to a file.
      fs.writeFileSync(filePath, text);

      console.log('Response written to file successfully!');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  // getScript();

  return (
    <>
      <main>
        {debug && <Debug debug={debug} />}
        {offerId === 9241 && <CareerSurvey />}
        {offerId === 0 && <DefaultSurvey language={language} offer={offerId} />}
        {offerId === 9998 && <ShoppingSurvey language={language} />}
        {offerId === 9999 && <TravelSurvey language={language} />}
        {offerId === 10702 && (
          <HigherLowerGame
            country={country}
            language={language}
            offer={offerId}
            zone={zone}
            searchParamString={searchParamString}
            searchParams={searchParams}
          />
        )}
        {offerId !== 10702 && offerId !== 0 && <BackButton />}
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
