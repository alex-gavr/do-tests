interface ISurveySkeletonProps {}

const SurveySkeleton = ({}: ISurveySkeletonProps) => {
  return (
    <div className='flex flex-col justify-center items-center w-11/12 gap-4 animate-pulse mt-1'>
      <span className='bg-slate-300 rounded-sm h-6 w-4/6' />
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 max-w-xl '>
        <span className='w-full rounded bg-yellow-500 h-8' />
        <span className='w-full rounded bg-yellow-500 h-8' />
      </div>
    </div>
  );
};

export default SurveySkeleton;
