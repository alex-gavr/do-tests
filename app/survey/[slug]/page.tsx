import { surveyAnswers1, surveyQuestions1 } from '@db/db';
// import SurveyContainer from '@components/SurveyContainer';
import dynamic from 'next/dynamic';
const SurveyContainer = dynamic(() => import('@components/SurveyContainer'));

const Page = async ({ params }: { params: { slug: string } }) => {
  // const results = await surveyData;
  const questions = await surveyQuestions1;
  const answers = await surveyAnswers1;
  const slug = parseInt(params.slug);
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 py-10 sm:px-4'>
      {slug < answers.length ? (
        <SurveyContainer questions={questions} answers={answers} />
      ) : (
        <h1>Such question doesn't exit</h1>
      )}
    </main>
  );
};

export default Page;
