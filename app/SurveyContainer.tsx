import Button from '@components/Button/Button';
import React from 'react';

const SurveyContainer = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-6 rounded-2xl bg-gray-100 p-4 shadow-xl shadow-gray-300 sm:gap-8 sm:p-8'>
      <h1 className='text-xl sm:text-2xl md:text-3xl'>Как вы зарабатываете на жизнь?</h1>
      <div className='grid max-w-2xl grid-cols-2 gap-4 md:gap-6'>
        <Button type='button' variant='primary'>
          Съездить в отпуск всей семьей
        </Button>
        <Button type='button' variant='secondary'>
          Купить квартиру или дом
        </Button>
        <Button type='button' variant='agree'>
          Купить суперкар
        </Button>
        <Button type='button' variant='disagree'>
          Открыть своё дело
        </Button>
      </div>
    </section>
  );
};

export default SurveyContainer;
