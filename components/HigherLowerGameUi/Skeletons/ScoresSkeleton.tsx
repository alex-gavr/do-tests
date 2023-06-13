interface IScoresSkeletonProps {}

const ScoresSkeleton = ({}: IScoresSkeletonProps) => {
  return (
    <div className='flex w-full flex-row items-start justify-between px-4 absolute top-0'>
      <div className='flex flex-row items-center justify-start gap-2'>
        <span className='h-8 w-8 bg-yellow-300 rounded-lg animate-pulse' />
        <span className=' h-6 w-5 bg-slate-100 rounded-md animate-pulse' />
      </div>
      <div className='flex flex-col items-end justify-center mt-1'>
        <span className=' h-4 w-16 animate-pulse bg-white rounded-md' />
        <span className=' h-3 w-28 animate-pulse bg-emerald-300 mt-2 rounded-md' />
      </div>
    </div>
  );
};

export default ScoresSkeleton;
