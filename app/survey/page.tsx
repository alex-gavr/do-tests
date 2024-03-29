import Debug from '@app/Debug';
import { IServerProps } from '@app/page';
import { useServerSearchParams } from '@hooks/useServerSearchParams';
import { TSurvey, surveySchema } from 'types/Survey';
import { z } from 'zod';
import dynamic from 'next/dynamic';
import { shoppingSurveyData } from '@configs/ShoppingSurvey/ShoppingSurveyData';
import Privacy from '@app/(shoppingSurvey)/Privacy';
import ProgressBar from '@components/ProgressBar';

// import SurveyContainer from '@components/SurveyContainer';
import { kv } from '@vercel/kv';
import { getDictionary } from '@i18n/i18n';
import { TValidLocale } from 'config';
import { TShoppingSurveyDictionary } from '@i18n/9998/en';

const SurveyContainer = dynamic(() => import('@components/SurveyContainer'));

const Page = async ({ searchParams }: IServerProps) => {
  const { language, country, debug, offerId } = useServerSearchParams(searchParams);
  const surveyData = await getSurveyDataFromRedis(offerId, language);
  // const surveyData = shoppingSurveyData;
  const d = (await getDictionary(9998, language as TValidLocale)) as TShoppingSurveyDictionary;

  return (
    <>
      <ProgressBar />
      <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 py-10 sm:px-4'>
        {debug && <Debug debug={debug} />}
        {offerId === 9998 ? <Privacy text1={d.privacy.text1} text2={d.privacy.text2} /> : null}
        {surveyData !== undefined ? <SurveyContainer offerId={offerId} surveyData={surveyData} /> : <p>There was a problem</p>}
      </main>
    </>
  );
};

export default Page;

const getSurveyDataFromRedis = async (offerId: number, lang: string) => {
  // DEFAULT CASE
  if (offerId === 0) {
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
  if (offerId > 0) {
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
