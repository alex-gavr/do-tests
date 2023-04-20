export const runtime = 'experimental-edge';
import { db } from '@db/db';
import { careerSurveyAnswers, careerSurveyQuestions, defaultSurveyAnswers, defaultSurveyQuestions } from '@db/schema';
// import SurveyContainer from '@components/SurveyContainer';
import dynamic from 'next/dynamic';
const SurveyContainer = dynamic(() => import('@components/SurveyContainer'));

const Page = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const offerId = parseInt(searchParams.offer_id ? searchParams.offer_id : '0');

  const questionsTable = offerId === 9241 ? careerSurveyQuestions : defaultSurveyQuestions;
  const answersTable = offerId === 9241 ? careerSurveyAnswers : defaultSurveyAnswers;

  const offerQuestions = await db.select().from(questionsTable);
  const offerAnswers = await db.select().from(answersTable);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 py-10 sm:px-4'>
      <SurveyContainer questions={offerQuestions} answers={offerAnswers} />
    </main>
  );
};

export default Page;
