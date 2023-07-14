'use client';
import { TDefaultDictionary } from '@i18n/0/en';
import { useState } from 'react';
import { LeadsTo, financeSurveyData } from './SurveyData';
import { getExitLinkFromBackend } from '@utils/ipp/getExitLinkFromBackend';
import production from '@utils/isProd';
import { setCookie } from 'cookies-next';
import { initBack } from '@components/Monetization/InitBack';
// import DefaultThankYou from './DefaultThankYou';
// import DefaultAssessment from './DefaultAssessment';
import dynamic from 'next/dynamic';
import SurveySkeleton from './SurveySkeleton';
import { getRandomZone } from '@utils/monetizationHelpers/getRandomZone';
import { useAppContext } from '@context/Context';

const DefaultThankYou = dynamic(() => import('./DefaultThankYou'), {
  ssr: false,
  loading: () => (
    <div className='min-h-[77vh] w-11/12 max-w-2xl flex-col items-center justify-center gap-4 md:gap-8 rounded-md bg-neutral-900 px-2 py-4 animate-pulse' />
  ),
});
const DefaultAssessment = dynamic(() => import('./DefaultAssessment'), {
  ssr: false,
  loading: () => (
    <div className='min-h-[70vh] w-11/12 max-w-2xl flex-col items-center justify-center gap-4 md:gap-8 rounded-md bg-neutral-900 px-2 py-4 animate-pulse' />
  ),
});

interface ISurveyProps {
  texts: TDefaultDictionary;
}

const Survey = ({ texts }: ISurveyProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [showSurvey, setShowSurvey] = useState<boolean>(true);
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);
  const { surveyState: state } = useAppContext();

  const surveyData = financeSurveyData(texts.MainSection.SurveyTexts);
  const filteredQuestion = surveyData.filter((question) => question.id === currentQuestion)[0];

  const handleButtonClick = async (leadsTo: LeadsTo) => {
    if (leadsTo === LeadsTo.nextQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    }

    if (leadsTo === LeadsTo.teenExit) {
      const teenExitIpp = getRandomZone(state.exits.financeExits.ipp_teen);
      const teenExitPopsIpp = state.exits.financeExits.ipp_teen_pops;

      const main = getExitLinkFromBackend(teenExitIpp);
      const pops = getExitLinkFromBackend(teenExitPopsIpp);
      const [mainUrl, popsUrl] = await Promise.all([main, pops]);

      if (production) {
        setCookie('nonUniqueTeen', 1, { maxAge: 60 * 60 * 24 * 7 });
        initBack(state.exits.financeExits.onclick_back_zone);
        window.open(mainUrl, '_blank');
        window.location.replace(popsUrl);
      } else {
        console.log('teen exit');
        console.log(`mainUrl = `, mainUrl);
        console.log(`popsUrl = `, popsUrl);
      }
    }

    if (leadsTo === LeadsTo.thankYouPage) {
      setShowSurvey(false);
      setShowAssessment(true);
      // if (typeof window !== 'undefined') {
      //   const params = window.location.search;
      //   window.location.href = `/assessment${params}`;
      // }
    }
  };

  return (
    <>
      {showThankYou && <DefaultThankYou t={texts} />}
      {showAssessment && <DefaultAssessment t={texts} setShowThankYou={setShowThankYou} setShowAssessment={setShowAssessment} />}
      {showSurvey && (
        <>
          {/* <SurveySkeleton /> */}
          <h1 className='text-center text-xl tracking-wide md:text-4xl text-slate-50'>{texts.MainSection.title}</h1>
          <p className='text-slate-300 text-sm'>{texts.MainSection.paragraph}</p>
          <div className='flex flex-col justify-center items-center w-11/12 gap-4'>
            <h1 className={'text-center text-xl font-bold text-slate-200'}>{filteredQuestion.question}</h1>
            <div className={'grid w-full grid-cols-1 gap-4 sm:grid-cols-2 max-w-xl'}>
              {filteredQuestion.answers.map((answer) => (
                <button
                  type={'button'}
                  onClick={() => handleButtonClick(answer.to)}
                  key={answer.id}
                  className={'w-full cursor-pointer rounded bg-yellow-500 px-5 py-1 text-center text-black'}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Survey;
