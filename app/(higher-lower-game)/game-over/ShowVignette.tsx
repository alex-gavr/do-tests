'use client';
import { useAppContext } from '@context/Context';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IShowVignetteProps {}

const ShowVignette = ({}: IShowVignetteProps) => {
  const { surveyState } = useAppContext();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = window.location.search;
      if (pathname === '/') {
        router.push(`/vignette/${surveyState.exits.vignetteGameStart}${params}`);
      }
      if (pathname === '/game-over') {
        router.push(`/vignette/${surveyState.exits.vignetteGameOver}${params}`);
      }
    }
  }, []);
  return null;
};

export default ShowVignette;
