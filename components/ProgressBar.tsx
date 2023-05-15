'use client';
import { useAppContext } from '@context/Context';
import { m } from 'framer-motion';

const ProgressBar = () => {
  const { surveyState: state } = useAppContext();

  if (state.surveyLength === 0) {
    return null;
  }

  const progress = state.currentStep / state.surveyLength;

  return (
    <div className='item-center fixed left-0 right-0 top-0 flex flex-col content-center'>
      <m.div
        className='h-2 w-full origin-left bg-gradient-to-r from-rose-400 to-violet-500'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default ProgressBar;
