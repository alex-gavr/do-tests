'use client';

import { TDefaultDictionary } from '@i18n/0/en';
import { useEffect } from 'react';

interface IDefaultAssessmentProps {
  t: TDefaultDictionary;
  setShowThankYou: (show: boolean) => void;
  setShowAssessment: (show: boolean) => void;
}

const DefaultAssessment = ({ t, setShowThankYou, setShowAssessment }: IDefaultAssessmentProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAssessment(false);
      setShowThankYou(true);
      // if (typeof window !== 'undefined') {
      //   const params = window.location.search;
      //   router.replace(`/thank-you${params}`);
      // }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='flex w-full max-w-5xl flex-col items-center justify-center z-20 min-h-[70vh]'>
        <div className='flex min-h-[70vh] flex-col items-start justify-center gap-6 rounded-md bg-neutral-900 px-4 py-6'>
          <h1 className='animate-fade-up text-slate-100 text-center text-3xl font-bold'>{t.Assessment.title}</h1>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2'>
              <p className='animate-fade-up text-sm animate-delay-700 sm:text-base text-slate-300'>{t.Assessment.p1}</p>
              <img src='/images/financeSurvey/tick.svg' alt='tick' className='h-5 w-5 animate-fade-left animate-delay-1000' />
            </div>
            <div className='flex flex-row gap-2'>
              <p className='animate-fade-up text-sm animate-delay-[1.5s] sm:text-base text-slate-300'>{t.Assessment.p2}</p>
              <img src='/images/financeSurvey/tick.svg' alt='tick' className='h-5 w-5 animate-fade-left animate-delay-[2s]' />
            </div>
          </div>
          <div className='mb-4 h-2.5 w-full rounded-full bg-gray-700'>
            <div className='h-2.5 animate-widthGrowth rounded-full bg-yellow-500 animate-duration-[3s] animate-ease-in-out' />
          </div>
        </div>
      </div>
      <span className='rain' />
    </>
  );
};

export default DefaultAssessment;
