import Debug from '@app/Debug';
import { IServerProps } from '@app/page';
import { useServerSearchParams } from '@hooks/useServerSearchParams';
import { TSurvey, surveySchema } from 'types/Survey';
import { z } from 'zod';
import dynamic from 'next/dynamic';
import { shoppingSurveyData } from '@configs/ShoppingSurvey/ShoppingSurveyData';
import Privacy from '@app/Privacy';
import ProgressBar from '@components/ProgressBar';
import { ValidLocale, getTranslator } from 'i18n';
// import SurveyContainer from '@components/SurveyContainer';
import { kv } from '@vercel/kv';

const SurveyContainer = dynamic(() => import('@components/SurveyContainer'));

const Page = async ({ searchParams }: IServerProps) => {
  const { language, country, debug, offerId } = useServerSearchParams(searchParams);
  const surveyData = await getSurveyDataFromRedis(offerId, language);
  // const surveyData = shoppingSurveyData;
  const t = await getTranslator(language as ValidLocale);

  return (
    <>
      <ProgressBar />
      <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 py-10 sm:px-4'>
        {debug && <Debug debug={debug} />}
        {offerId === 9998 ? (
          <Privacy text1={t.ShoppingSurvey.privacy.text1} text2={t.ShoppingSurvey.privacy.text2} />
        ) : null}
        {surveyData !== undefined ? (
          <SurveyContainer offerId={offerId} surveyData={surveyData} />
        ) : (
          <p>There was a problem</p>
        )}
      </main>
    </>
  );
};

export default Page;

const getSurveyDataFromRedis = async (offerId: number | 'default', lang: string) => {
  // DEFAULT CASE
  if (offerId === 'default') {
    try {
      const defaultSurveyData = await kv.get(`offer:default:lang:en`);
      const validatedDefaultSurveyData = surveySchema.parse(defaultSurveyData);
      return validatedDefaultSurveyData;
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Invalid offer data', error);
      }
      console.error('Invalid request', error);
    }
  }
  // SPECIFIC OFFER ID CASE
  if (typeof offerId === 'number') {
    try {
      const surveyData = (await kv.get(`offer:${offerId}:lang:${lang}`)) as TSurvey | null;
      if (surveyData === null) {
        const defaultSurveyData = await kv.get(`offer:default:lang:en`);
        const validatedDefaultSurveyData = surveySchema.parse(defaultSurveyData);
        return validatedDefaultSurveyData;
      } else {
        const validatedSurveyData = surveySchema.parse(surveyData);
        return validatedSurveyData;
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Invalid offer data', error);
      }
      console.error('Invalid request', error);
    }
  }
};


