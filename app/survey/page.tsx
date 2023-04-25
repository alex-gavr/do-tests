export const runtime = 'nodejs';

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

const Page = async ({ searchParams }: IServerProps) => {
  const offerId = searchParams?.offer_id === undefined ? 'default' : parseInt(searchParams.offer_id);
  const language = searchParams?.locale;

  const questionsTable = offerId === 9241 ? careerSurveyQuestions : defaultSurveyQuestions;
  const answersTable = offerId === 9241 ? careerSurveyAnswers : defaultSurveyAnswers;

  const questionToQuery =
    language === 'id' ? travelSurveyQuestions.questionId : travelSurveyQuestions.questionEn;
  const answersToQuery = language === 'id' ? travelSurveyAnswers.textId : travelSurveyAnswers.textEn;

  // This helps to avoid waterfalls
  const offerQuestionsDataMultiLanguage = db
    .select({
      id: travelSurveyQuestions.id,
      question: questionToQuery,
    })
    .from(travelSurveyQuestions);

  const offerAnswersDataMultiLanguage = db
    .select({
      id: travelSurveyAnswers.id,
      text: answersToQuery,
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
