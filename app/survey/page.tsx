export const runtime = 'experimental-edge';
import { db } from '@db/db';
import {
  careerSurveyAnswers,
  careerSurveyQuestions,
  defaultSurveyAnswers,
  defaultSurveyQuestions,
} from '@db/schema';
// import SurveyContainer from '@components/SurveyContainer';
import dynamic from 'next/dynamic';
const SurveyContainer = dynamic(() => import('@components/SurveyContainer'));

const Page = async ({ searchParams }: {searchParams: { [key: string]: string | undefined }}) => {
  
  const offerId = searchParams.offer_id === undefined ? 'default' : parseInt(searchParams.offer_id);

  const questionsTable = offerId === 9241 ? careerSurveyQuestions : defaultSurveyQuestions;
  const answersTable = offerId === 9241 ? careerSurveyAnswers : defaultSurveyAnswers;

  // This helps to avoid waterfalls
  const offerQuestionsData = db.select().from(questionsTable);
  const offerAnswersData = db.select().from(answersTable);
  const [offerQuestions, offerAnswers] = await Promise.all([offerQuestionsData, offerAnswersData]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 py-10 sm:px-4'>
      <SurveyContainer questions={offerQuestions} answers={offerAnswers} />
    </main>
  );
};

export default Page;
