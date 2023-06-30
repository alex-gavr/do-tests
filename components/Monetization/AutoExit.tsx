'use client';
import { useAppContext } from '@context/Context';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useEventListener } from 'usehooks-ts';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { sendEvent } from '@utils/sendEvent';
import { TrackEvents } from 'types/TrackEvents';
import { setCookie } from 'cookies-next';

const THIRTY_SECONDS = 30;
const FORTY_SECONDS = 40;

// WARNING: Autoexit works only in game.
const AutoExit = () => {
  const router = useRouter();
  const { offerId } = useClientSearchParams();
  const { surveyState: state } = useAppContext();
  const [count, setCount] = useState(FORTY_SECONDS);

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
      const url = makeExitUrl(state.exits.autoExit, ExitType.onclick);
      if (offerId === 10702) {
        const eventData = {
          track: TrackEvents.autoExit,
          offerId: 'populations-game' as const,
        };
        sendEvent('game', eventData);
      } else {
        const eventData = {
          track: TrackEvents.autoExit,
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }
      if (state.exits.autoExit) {
        setCookie('autoExit', 1, { path: '/', maxAge: 60 * 30 });
        
        window.open(url, '_blank');
        router.replace(url);
      }
    }
    // clean up the interval
    return () => clearInterval(interval);
  }, [count, router]);

  return null;
};

export default AutoExit;
