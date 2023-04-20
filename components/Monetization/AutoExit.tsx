'use client';
import { AppContext } from '@context/Context';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { useEventListener } from 'usehooks-ts';
import makeExitUrl from '@utils/makeExitUrl';
import mixpanel from '@lib/mixpanel';
import { useGetParam } from '@hooks/useGetParam';

const THIRTY_SECONDS = 30;

const AutoExit = () => {
  const router = useRouter();
  const { valueNumber: offerId } = useGetParam('offer_id');
  const { state } = useContext(AppContext);
  const [count, setCount] = useState(THIRTY_SECONDS);
  // AUTO-EXIT
  const updateCount = () => {
    setCount(THIRTY_SECONDS);
  };

  useEventListener('mousemove', updateCount);
  useEventListener('click', updateCount);
  useEventListener('scroll', updateCount);
  useEventListener('touchmove', updateCount);

  useEffect(() => {
    const interval = setInterval(() => {
      // update the state after 1000ms
      setCount((currentCount) => currentCount - 1);
    }, 1000);
    // when count is 0, Auto-Exit happens
    if (count === 0) {
      mixpanel.track('autoExit', {
        offerId,
      });
      if (state.exits.autoExit) {
        const url = makeExitUrl(state.exits.autoExit);
        router.push(url);
      }
    }
    // clean up the interval
    return () => clearInterval(interval);
  }, [count, router]);

  return null;
};

export default AutoExit;
