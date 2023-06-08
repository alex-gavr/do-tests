'use client';
import { useAppContext } from '@context/Context';
import { createRoundFeedback } from '@utils/HigherLowerGame/createRoundFeedback';
import { useMemo } from 'react';

interface ITextResultsProps {
  place: number;
}

const TextResults = ({ place }: ITextResultsProps) => {
  const { gameState: state } = useAppContext();

  const { roundScoreFeedback, topScoreFeedback } = useMemo(() => {
    const { roundScoreFeedback, topScoreFeedback } = createRoundFeedback(
      state.user.currentScore,
      state.user.topScore,
      place,
    );
    return { roundScoreFeedback, topScoreFeedback };
  }, [state.user.currentScore, state.user.topScore, place]);

  return (
    <>
      <div className='flex w-full flex-col items-center justify-center gap-2'>
        <p className='text-3xl text-slate-200'>Final Score: {state.user?.currentScore}</p>
        <div>
          <p className='text-center tracking-wider text-emerald-300'>{roundScoreFeedback}</p>
          <p className='mt-1 px-1 text-center tracking-wider text-emerald-300'>{topScoreFeedback}</p>
        </div>
      </div>
    </>
  );
};

export default TextResults;
