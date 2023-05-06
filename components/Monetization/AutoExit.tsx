'use client';
import { AppContext } from '@context/Context';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { useEventListener } from 'usehooks-ts';
import makeExitUrl from '@utils/makeExitUrl';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { sendEvent } from '@utils/sendEvent';

const THIRTY_SECONDS = 30;

const AutoExit = () => {
  const router = useRouter();
  const { offerId } = useClientSearchParams();
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
      const eventData = {
        track: 'Auto Exit',
        offerId: offerId,
      };
      sendEvent(eventData);
      if (state.exits.autoExit) {
        const url = makeExitUrl(state.exits.autoExit);
        router.replace(url);
      }
    }
    // clean up the interval
    return () => clearInterval(interval);
  }, [count, router]);

  return null;
};

export default AutoExit;
