'use client';
import { AppContext } from '@context/Context';
import { m } from 'framer-motion';
import { useContext } from 'react';

const ProgressBar = () => {
  const { state } = useContext(AppContext);

  if (state.surveyLength === 0) {
    return null;
  }

  const progress = state.currentStep / state.surveyLength;

  return (
    <div className='flex flex-col item-center content-center fixed left-0 right-0 top-0'>
      <m.div
        className='origin-left w-full h-2 bg-gradient-to-r from-rose-400 to-violet-500'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default ProgressBar;
