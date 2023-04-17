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
    <m.div
      className='transform-origin-0 fixed left-0 right-0 top-0 h-2 bg-indigo-800'
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress }}
      transition={{ duration: 2 }}
    />
  );
};

export default ProgressBar;
