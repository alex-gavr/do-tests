import React from 'react';

const Loading = () => {
  return (
    <section className='flex min-h-screen w-full items-center justify-center'>
      <div className='flex w-72 sm:w-80 md:w-96 max-w-[600px] flex-col items-center justify-center gap-6 rounded-2xl bg-gray-100 px-4 py-6 shadow-xl shadow-gray-300 sm:gap-8 sm:p-8'>
        <span className='h-6 w-3/5 animate-pulse rounded-md bg-slate-400' />
        <div className='flex h-10 w-full flex-row justify-center gap-8 px-4'>
          <span className='h-full w-4/6 animate-pulse rounded-md bg-slate-400' />
          <span className='h-full w-4/6 animate-pulse rounded-md bg-slate-400' />
        </div>
      </div>
    </section>
  );
};

export default Loading;
