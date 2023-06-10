'use client';
import { useAppContext } from '@context/Context';
import { TrophyIcon } from '@heroicons/react/24/solid';
import CreateUser from './CreateUser';

interface IScoresContainerProps {
  country: string;
  score: string;
  hintsAvailable: string;
}

const ScoresContainer = ({ country, score, hintsAvailable }: IScoresContainerProps) => {
  const { gameState: state } = useAppContext();
  if (
    state.user.currentScore === null ||
    state.user.currentScore === undefined ||
    isNaN(state.user.currentScore)
  ) {
    localStorage.removeItem('gameState');
    return <CreateUser country={country} />;
  }

  return (
    <div className='flex w-full flex-row items-start justify-between px-4'>
      <div className='flex flex-row items-center justify-start gap-2'>
        <TrophyIcon className='h-8 w-8 text-yellow-300' />
        <p className='text-slate-100'>{state.user.topScore}</p>
      </div>
      <div className='flex flex-col items-end justify-center '>
        <p className='text-white'> {score}: {state.user.currentScore}</p>
        <p className='text-xs text-emerald-300'> {hintsAvailable}: {state.user.hintsAvailable}</p>
      </div>
    </div>
  );
};

export default ScoresContainer;
