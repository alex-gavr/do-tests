'use client';
import { useAppContext } from '@context/Context';
import { createRoundFeedback } from '@utils/HigherLowerGame/createRoundFeedback';
import { THigherLowerGameDictionary } from '@i18n/10702/en';
import { useMemo } from 'react';

interface ITextResultsProps {
  place: number;
  heading: THigherLowerGameDictionary['gameOver']['heading'];
  roundScoreFeedbackTexts: THigherLowerGameDictionary['gameOver']['roundScoreFeedback'];
  topScoreFeedbackTexts: THigherLowerGameDictionary['gameOver']['topScoreFeedback'];
  positiveFeedbackTexts: THigherLowerGameDictionary['gameOver']['positiveFeedback'];
}

const TextResults = ({
  place,
  heading,
  roundScoreFeedbackTexts,
  topScoreFeedbackTexts,
  positiveFeedbackTexts,
}: ITextResultsProps) => {
  const { gameState: state } = useAppContext();

  const { roundScoreFeedback, topScoreFeedback } = useMemo(() => {
    const { roundScoreFeedback, topScoreFeedback } = createRoundFeedback(
      state.user.currentScore,
      state.user.topScore,
      place,
      roundScoreFeedbackTexts,
      topScoreFeedbackTexts,
      positiveFeedbackTexts,
    );
    return { roundScoreFeedback, topScoreFeedback };
  }, [state.user.currentScore, state.user.topScore, place]);

  return (
    <>
      <div className='flex w-full flex-col items-center justify-center gap-2'>
        <p className='text-3xl text-slate-200'>
          {heading}: {state.user?.currentScore}
        </p>
        <div>
          <p className='text-center tracking-wider text-emerald-300'>{roundScoreFeedback}</p>
          <p className='mt-1 px-1 text-center tracking-wider text-emerald-300'>{topScoreFeedback}</p>
        </div>
      </div>
    </>
  );
};

export default TextResults;
