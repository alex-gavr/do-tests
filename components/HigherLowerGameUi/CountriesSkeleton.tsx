interface ICountriesSkeletonProps {}

const CountriesSkeleton = ({}: ICountriesSkeletonProps) => {
  return (
    <div className='absolute top-[132px] flex flex-col flex-wrap justify-center gap-4'>
      <span className='aspect-[17/9] w-72 animate-pulse rounded-lg border-2 bg-slate-700 object-contain sm:w-80' />
      <span className='h-8 w-20 animate-pulse place-self-center rounded-md bg-emerald-300' />
      <span className='aspect-[17/9] w-72 animate-pulse rounded-lg border-2 bg-slate-700 object-contain sm:w-80' />
      <span className='h-12 w-64 animate-pulse place-self-center rounded-md bg-gray-500 md:h-[50px]' />
      <span className='h-12 w-64 animate-pulse place-self-center rounded-md border border-cyan-300 bg-slate-800 mt-[2px] md:mt-[4px] md:h-[50px]' />
    </div>
  );
};

export default CountriesSkeleton;
