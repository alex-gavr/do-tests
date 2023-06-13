import PlayerCardSkeleton from '@components/HigherLowerGameUi/Skeletons/PlayerCardSkeleton';
import { TrophyIcon } from '@heroicons/react/24/solid';
interface ILeaderboardSuspenseProps {}

const LeaderboardSuspense = ({}: ILeaderboardSuspenseProps) => {
  return (
    <div className='relative flex min-h-screen flex-col items-center gap-4 bg-slate-900 px-2 py-4'>
      <div className='mb-[16px] flex flex-row items-center justify-center gap-2'>
        <span className=' h-8 w-56 animate-pulse rounded-md bg-cyan-300' />
        <TrophyIcon className='h-8 w-8 text-yellow-300' />
      </div>
      <span className='h-4 w-64 animate-pulse rounded-md bg-neutral-200 mb-[2px]' />
      <div className='flex w-full flex-col items-center justify-center gap-2'>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
          <PlayerCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default LeaderboardSuspense;
