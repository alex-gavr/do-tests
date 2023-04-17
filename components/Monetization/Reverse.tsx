'use client';
import { AppContext } from '@context/Context';
import makeExitUrl from '@utils/makeExitUrl';
import { useRouter } from 'next/navigation';
import mixpanel from '@lib/mixpanel';
import React, { useContext, useEffect } from 'react';

const Reverse = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  // REVERSE
  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      mixpanel.track('reverse');
      if (state.exits.reverse) {
        const url = makeExitUrl(state.exits.reverse);
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
