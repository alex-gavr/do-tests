// import { useAppSelector } from '@/services/hook';

import { AppContext } from '@context/Context';
import { m } from 'framer-motion';
import { useContext } from 'react';

const ProgressBar = () => {
  const { state } = useContext(AppContext);

  // TODO: This should be removed when there is data
  const data = []

  // we add here question about age
  const allQuestions =  data.length  + 1;

  const progress = state.currentStep / allQuestions;

  return (
    <m.div
      className='transform-origin-0 fixed left-0 right-0 top-0 h-5 bg-red-800'
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress }}
      transition={{ duration: 2 }}
    />
  );
};

export default ProgressBar;
