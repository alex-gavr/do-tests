export const runtime = 'experimental-edge';
import { db } from '@db/db';
import { surveyAnswers, surveyQuestions } from '@db/schema';
import { eq } from 'drizzle-orm';
// import SurveyContainer from '@components/SurveyContainer';
import dynamic from 'next/dynamic';
const SurveyContainer = dynamic(() => import('@components/SurveyContainer'));

const Page = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const offerId = parseInt(searchParams.offer_id ? searchParams.offer_id : '0');

  const offerQuestions = await db.select().from(surveyQuestions).where(eq(surveyQuestions.offer_id, offerId));

  const offerAnswers = await db.select().from(surveyAnswers).where(eq(surveyAnswers.offer_id, offerId));

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 py-10 sm:px-4'>
      <SurveyContainer questions={offerQuestions} answers={offerAnswers} />
    </main>
  );
};

export default Page;
