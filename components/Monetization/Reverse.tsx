'use client';
import { AppContext } from '@context/Context';
import makeExitUrl from '@utils/makeExitUrl';
import { useRouter } from 'next/navigation';

import React, { useContext, useEffect } from 'react';
// import { event } from 'nextjs-google-analytics';
// import ym from 'react-yandex-metrika';

const Reverse = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  // REVERSE
  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      if (state.exits.reverse) {
        const url = makeExitUrl(state.exits.reverse)
        window.location.href = url;
      }
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [router]);
  return null;
};

export default Reverse;
