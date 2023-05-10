import Debug from "@app/Debug";
import { IServerProps } from "@app/page";
import SurveyContainer from "@components/SurveyContainer";
import { careerSurveyAnswers, careerSurveyQuestions, defaultSurveyAnswers, defaultSurveyQuestions, travelSurveyAnswers, travelSurveyQuestions } from "@db/schema";
import { useServerSearchParams } from "@hooks/useServerSearchParams";
import { connect } from "@planetscale/database";
import { getBestDBLocation } from "@utils/getBestDBLocation";
import { drizzle } from 'drizzle-orm/planetscale-serverless';



const Page = async ({ searchParams }: IServerProps) => {
  const { language, country, debug, offerId } = useServerSearchParams(searchParams);

  const { username, password } = getBestDBLocation(country);

  const config = {
    host: process.env.DATABASE_HOST,
    username: username,
    password: password,
  };

  const connection = connect(config);

  const db = drizzle(connection);

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

  const surveyData = offerQuestions.map((question) => {
    const answers = offerAnswers.filter((answer) => answer.questionId === question.id);
    const answersWithoutQuestion = answers.map((answer) => {
      return {
        id: answer.id,
        text: answer.text,
        styleVariant: answer.styleVariant,
        leadsTo: answer.leadsTo,
      };
    });
    return {
      id: question.id,
      question: question.question,
      answers: answersWithoutQuestion,
    };
  });

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 py-10 sm:px-4'>
      {debug && <Debug debug={debug} />}
      <SurveyContainer offerId={offerId} surveyData={surveyData} />
    </main>
  );
};

export default Page;
