'use client';

import getVignetteData from '@utils/Vignette/getVignetteData';
import { useEffect } from 'react';

interface ITestProps {}

const Test = ({}: ITestProps) => {
  useEffect(() => {
    const res = getVignetteData('5959144');
    console.log(res);
  }, []);
  return null;
};

export default Test;
