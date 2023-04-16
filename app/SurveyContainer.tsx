'use client';
import Button from '@components/Button/Button';
import { useContext } from 'react';
import { AppContext } from '@context/Context';
import { TSurveyData } from '@db/schema';

const SurveyContainer = ({ results }: TSurveyData) => {
  const { state } = useContext(AppContext);
  const arrayLength = results.length;

  const className = 'flex flex-wrap w-full justify-center items-center gap-4'

  if (results === null) {
    return null;
  }
  const currentQuestion = results.filter((result) => result.id === state.currentStep);
  
  return (
    <section className='flex flex-col items-center justify-center gap-6 rounded-2xl bg-gray-100 p-4 shadow-xl shadow-gray-300 sm:gap-8 sm:p-8'>
      <h1 className='text-xl sm:text-2xl md:text-3xl'>{currentQuestion[0].question}</h1>
      <div className={className}>
        {currentQuestion[0].answers.map((answer) => (
          <Button type='button' variant={answer.styleVariant} key={answer.id} arrayLength={arrayLength}>
            {answer.text}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default SurveyContainer;
