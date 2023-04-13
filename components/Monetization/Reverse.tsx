'use client';
import { AppContext } from '@context/Context';
import { useRouter } from 'next/navigation';

import React, { Fragment, useContext, useEffect } from 'react';
// import { event } from 'nextjs-google-analytics';
// import ym from 'react-yandex-metrika';

const Reverse = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const reverse = state.exits.reverse;
  // REVERSE
  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      if (reverse) {
        window.location.href = reverse;
      }
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [router]);
  return <Fragment />;
};

export default Reverse;
