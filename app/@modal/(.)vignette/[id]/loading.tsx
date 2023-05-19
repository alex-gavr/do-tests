interface ILoadingProps {}

const Loading = ({}: ILoadingProps) => {
  return (
    <div className='fixed bottom-0 top-0 left-0 right-0 flex flex-col items-center justify-center bg-black/60 px-4'>
      <div className=' flex h-40 min-w-[280px] max-w-sm flex-col items-center justify-center gap-4 rounded-lg bg-slate-300 p-4 shadow-2xl'>
        <div className='flex flex-row items-center justify-start gap-4'>
          {/* IMG */}
          <div className='flex-shrink-0 overflow-hidden rounded-lg h-16 w-16 bg-neutral-500 animate-pulse' />
          {/* TEXT */}
          <div className='flex flex-col justify-start gap-3'>
            <h2 className='w-40 h-8 bg-neutral-500 rounded-md animate-pulse'></h2>
            <p className='w-40 h-4 bg-neutral-500 rounded-md animate-pulse'></p>
          </div>
        </div>
        {/* BUTTONS */}
        <div className='flex w-full flex-row justify-between gap-2'>
          {/* button close */}
          <div className='w-20 rounded-lg border border-gray-400 bg-transparent px-4 py-5 animate-pulse' />
          {/* button con */}
          <div className='rounded-lg border border-slate-400 bg-blue-500 px-6 py-5 flex-1 animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default Loading;
