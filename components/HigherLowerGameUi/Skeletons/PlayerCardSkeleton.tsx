interface IPlayerCardSkeletonProps {}

const PlayerCardSkeleton = ({}: IPlayerCardSkeletonProps) => {
  return (
    <div className=' flex h-[53px] w-full max-w-2xl flex-row items-center justify-between gap-1 rounded-sm bg-neutral-800 px-2 py-2 sm:w-full'>
      <div className='flex flex-row items-center justify-center'>
        {/* Position */}
        <span className='ml-1 mr-3 h-6 w-6 animate-pulse rounded-md bg-slate-950' />
        <div className='flex flex-col items-start justify-start gap-1'>
          {/* User Name */}
          <span className='h-4 w-24 animate-pulse rounded-sm bg-slate-50 sm:w-36' />
          {/* country */}
          <span className='h-3 w-16 animate-pulse rounded-sm bg-neutral-400' />
        </div>
      </div>
      <div className='flex flex-col items-end justify-end gap-1'>
        {/* Highest Score */}
        <span className='h-4 w-20 animate-pulse rounded-sm bg-green-400' />
        {/* Hints Available */}
        <span className='h-3 w-14 animate-pulse rounded-sm bg-neutral-400' />
      </div>
    </div>
  );
};

export default PlayerCardSkeleton;
