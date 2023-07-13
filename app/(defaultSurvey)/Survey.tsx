'use client'
import { TSurveyTexts } from '@i18n/0/en';
import { useState } from 'react';
import { LeadsTo, financeSurveyData } from './SurveyData';
import exitZones from './Exits';
import { getExitLinkFromBackend } from '@utils/ipp/getExitLinkFromBackend';
import production from '@utils/isProd';
import { setCookie } from 'cookies-next';
import { initBack } from '@components/Monetization/InitBack';

interface ISurveyProps {
  texts: TSurveyTexts;
}

const Survey = ({ texts }: ISurveyProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const surveyData = financeSurveyData(texts);
  const filteredQuestion = surveyData.filter((question) => question.id === currentQuestion)[0];

  const handleButtonClick = async (leadsTo: LeadsTo) => {
    if (leadsTo === LeadsTo.nextQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    }

    if (leadsTo === LeadsTo.teenExit) {
      const teenExitIpp = exitZones.ipp_teen[Math.floor(Math.random() * exitZones.ipp_teen.length)];
      const teenExitPopsIpp = exitZones.ipp_teen_pops;

      // const teenExitOnclick = exitZones.onclick_teen[Math.floor(Math.random() * exitZones.onclick_autoexit.length)];
      // const teenExitPopsOnclick = exitZones.onclick_teen_pops;

      const main = getExitLinkFromBackend(teenExitIpp);
      const pops = getExitLinkFromBackend(teenExitPopsIpp);
      const [mainUrl, popsUrl] = await Promise.all([main, pops]);

      if (production) {
        setCookie('nonUniqueTeen', 1, { maxAge: 60 * 60 * 24 * 7 });
        initBack(exitZones.onclick_back_zone);
        window.open(mainUrl, '_blank');
        window.location.replace(popsUrl);
      } else {
        console.log('teen exit');
        console.log(`mainUrl = `, mainUrl);
        console.log(`popsUrl = `, popsUrl);
      }
    }

    if (leadsTo === LeadsTo.thankYouPage) {
      // setAssessment(true);
      if (typeof window !== 'undefined') {
        const params = window.location.search;
        window.location.href = `/assessment${params}`;
      }
    }
  };

  return (
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
  );
};

export default Survey;
