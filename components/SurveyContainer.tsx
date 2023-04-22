'use client';
import Button from '@components/Button/Button';
import { useContext, useEffect } from 'react';
import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { TSurveyAnswers, TSurveyQuestions } from '@db/schema';

interface IProps {
  questions: Array<TSurveyQuestions>;
  answers: Array<TSurveyAnswers> ;
}

const SurveyContainer = ({ questions, answers }: IProps) => {
  const { state, dispatch } = useContext(AppContext);
  const arrayLength = questions.length;
  const currentQuestion = questions.find((questions) => questions.id === state.currentStep);
  const currentAnswers = answers.filter((answers) => answers.questionId === state.currentStep);

  useEffect(() => {
    if (state.surveyLength !== arrayLength) {
      dispatch({
        type: ActionsType.setSurveyLength,
        payload: {
          surveyLength: arrayLength,
        },
      });
    }
  }, [arrayLength, state.surveyLength]);

  // const filterBoi = slug ? slug : state.currentStep

  if (currentQuestion === null) {
    return null;
  }
  const className = 'flex flex-wrap w-full justify-center items-center gap-4';

  return (
    <section className='flex flex-col items-center justify-center gap-6 rounded-2xl bg-gray-100 px-4 py-6 shadow-xl shadow-gray-300 sm:gap-8 sm:p-8'>
      <h1 className='px-4 text-center text-2xl sm:text-3xl md:text-4xl'>{currentQuestion?.question}</h1>
      <div className={className}>
        {currentAnswers?.map((answer) => (
          <Button to={answer.leadsTo} type='button' variant={answer.styleVariant} key={answer.id}>
            {answer.text}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default SurveyContainer;
