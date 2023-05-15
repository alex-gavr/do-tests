import { TrophyIcon } from '@heroicons/react/24/solid';

interface ILoadingProps {}

const Loading = ({}: ILoadingProps) => {
  return (
    <div className='relative flex min-h-screen flex-col items-center gap-4 bg-slate-900 px-2 py-4'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <h1 className='text-center text-4xl text-cyan-300'>Leaderboard</h1>
        <TrophyIcon className='h-8 w-8 text-yellow-300' />
      </div>
      <p className='text-center text-lg text-neutral-200'>TOP 25 Legends of the game</p>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
        <div
          key={index}
          className=' flex h-11 w-full max-w-2xl animate-pulse flex-row items-center justify-between gap-1 rounded-sm bg-neutral-800 px-2 py-2 capitalize'
        />
      ))}
    </div>
  );
};

export default Loading;
