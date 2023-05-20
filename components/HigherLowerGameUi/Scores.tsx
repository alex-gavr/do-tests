'use client';
import { useAppContext } from '@context/Context';
import { TrophyIcon } from '@heroicons/react/24/solid';

interface IScoresProps {}

const Scores = ({}: IScoresProps) => {
  const { gameState: state } = useAppContext();

  return (
    <div className='flex w-full flex-row items-start justify-between px-4'>
      <div className='flex flex-row items-center justify-start gap-2'>
        <TrophyIcon className='h-8 w-8 text-yellow-300' />
        <p className='text-slate-100'>{state.user.topScore}</p>
      </div>
      <div className='flex flex-col items-end justify-center '>
        <p className='text-white'> score: {state.score}</p>
        <p className='text-xs text-emerald-300'> hints available: {state.user.hintsAvailable}</p>
      </div>
    </div>
  );
};

export default Scores;
