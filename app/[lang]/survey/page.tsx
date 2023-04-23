export const runtime = 'experimental-edge';
import { IServerProps } from '@app/page';
import { db } from '@db/db';
import {
  careerSurveyAnswers,
  careerSurveyQuestions,
  defaultSurveyAnswers,
  defaultSurveyQuestions,
  travelSurveyAnswers,
  travelSurveyQuestions,
} from '@db/schema';
import dynamic from 'next/dynamic';
const SurveyContainer = dynamic(() => import('@components/SurveyContainer'));

const Page = async ({ params, searchParams }: IServerProps) => {
  const offerId = searchParams.offer_id === undefined ? 'default' : parseInt(searchParams.offer_id);
  const language = params.lang === 'id' ? params.lang : 'en';
  

  const questionsTable = offerId === 9241 ? careerSurveyQuestions : defaultSurveyQuestions;

  const answersTable = offerId === 9241 ? careerSurveyAnswers : defaultSurveyAnswers;

  // This helps to avoid waterfalls
  const offerQuestionsDataMultiLanguage = db
    .select({
      id: travelSurveyQuestions.id,
      question: language === 'id' ? travelSurveyQuestions.questionId : travelSurveyQuestions.questionEn,
    })
    .from(travelSurveyQuestions);

  const offerAnswersDataMultiLanguage = db
    .select({
      id: travelSurveyAnswers.id,
      text: language === 'id' ? travelSurveyAnswers.textId : travelSurveyAnswers.textEn,
      styleVariant: travelSurveyAnswers.styleVariant,
      questionId: travelSurveyAnswers.questionId,
      leadsTo: travelSurveyAnswers.leadsTo,
    })
    .from(travelSurveyAnswers);

  const offerQuestionsData =
    offerId === 9999 ? offerQuestionsDataMultiLanguage : db.select().from(questionsTable);
  const offerAnswersData = offerId === 9999 ? offerAnswersDataMultiLanguage : db.select().from(answersTable);

  const [offerQuestions, offerAnswers] = await Promise.all([offerQuestionsData, offerAnswersData]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 py-10 sm:px-4'>
      <SurveyContainer questions={offerQuestions} answers={offerAnswers} />
    </main>
  );
};

export default Page;
