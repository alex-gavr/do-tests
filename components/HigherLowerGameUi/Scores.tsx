'use client';

import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { TrophyIcon } from '@heroicons/react/24/solid';
import { useContext, useEffect, useState } from 'react';

interface IScoresProps {
  highestScore: string;
  hints: string;
}

const Scores = ({ hints, highestScore: h }: IScoresProps) => {
  const { state, dispatch } = useContext(AppContext);
  const hint = parseInt(hints);
  const highestScore = parseInt(h);

  useEffect(() => {
    dispatch({ type: ActionsType.setNumberOfHintsAvailable, payload: hint });
    dispatch({ type: ActionsType.setHighestScore, payload: highestScore });
  }, [hint, highestScore]);

  // const hints: number | null = useReadLocalStorage('hints');
  return (
    <div className='flex w-full flex-row items-start justify-between px-4'>
      <div className='flex flex-row items-center justify-start gap-2'>
        <TrophyIcon className='h-8 w-8 text-yellow-300' />
        <p className='text-slate-100'>{state.higherLowerGame.highestScore}</p>
      </div>
      <div className='flex flex-col items-end justify-center '>
        <p className='text-white'> score: {state.higherLowerGame.score}</p>
        <p className='text-xs text-slate-300'>
          {' '}
          hints available: {state.higherLowerGame.hint.numberOfHintsAvailable}
        </p>
      </div>
    </div>
  );
};

export default Scores;
