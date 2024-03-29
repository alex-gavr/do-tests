import { ArrowPathIcon } from '@heroicons/react/24/outline';

const SimpleLoader = ({}) => {
  return (
    <div className='min-w-screen flex min-h-screen flex-col items-center justify-center bg-slate-900'>
      <div className='-translate-y-5'>
        <ArrowPathIcon className='h-10 w-10 lg:w-16 lg:h-16 text-emerald-400 animate-spin' />
      </div>
    </div>
  );
};

export default SimpleLoader;
