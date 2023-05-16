'use client';
import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { VignetteActionTypes } from '@context/vignette/vignetteActionsType';
import { IVignette } from '@context/vignette/vignetteStateType';
import { TrophyIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

interface IScoresProps {
  highestScore: string;
  hints: string;
  vignetteData: IVignette | undefined;
}

const Scores = ({ hints, highestScore: h, vignetteData }: IScoresProps) => {
  const { gameState: state, gameDispatch: dispatch, vignetteDispatch, vignetteState } = useAppContext();
  const hint = parseInt(hints);
  const highestScore = parseInt(h);

  useEffect(() => {
    if (vignetteData !== undefined && vignetteState.banner_id === null) {
      console.log('i ran');
      vignetteDispatch({ type: VignetteActionTypes.setVignetteData, payload: vignetteData });
    }
  }, []);

  useEffect(() => {
    dispatch({ type: GameActionTypes.setNumberOfHintsAvailable, payload: hint });
    dispatch({ type: GameActionTypes.setHighestScore, payload: highestScore });
  }, [hint, highestScore]);

  // const hints: number | null = useReadLocalStorage('hints');
  return (
    <div className='flex w-full flex-row items-start justify-between px-4'>
      <div className='flex flex-row items-center justify-start gap-2'>
        <TrophyIcon className='h-8 w-8 text-yellow-300' />
        <p className='text-slate-100'>{state.highestScore}</p>
      </div>
      <div className='flex flex-col items-end justify-center '>
        <p className='text-white'> score: {state.score}</p>
        <p className='text-xs text-slate-300'> hints available: {state.hint.numberOfHintsAvailable}</p>
      </div>
    </div>
  );
};

export default Scores;
