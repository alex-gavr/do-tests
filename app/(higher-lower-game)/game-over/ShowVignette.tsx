'use client';
import { useAppContext } from '@context/Context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IShowVignetteProps {}

const ShowVignette = ({}: IShowVignetteProps) => {
  const { surveyState } = useAppContext();
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = window.location.search;
      router.push(`/vignette/${surveyState.exits.vignetteGameOver}${params}`);
    }
  }, []);
  return null;
};

export default ShowVignette;
