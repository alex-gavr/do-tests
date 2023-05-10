'use client';
import { AppContext } from '@context/Context';
import makeExitUrl from '@utils/makeExitUrl';
import { notFound, useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import production from '@utils/isProd';
import debug from '@utils/isDebug';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { sendEvent } from '@utils/sendEvent';
import { TrackEvents } from 'types/TrackEvents';
import { cn } from '@utils/cn';
import { hasCookie, setCookie } from 'cookies-next';

const TIMER = 180;
const MINUTE = 60;

interface IProps {
  freeAccess?: string;
  secondsWord?: string;
  offerExpired?: string;
  className?: string;
}
const CountDown = ({
  freeAccess = 'free access ends in',
  secondsWord = 'seconds',
  offerExpired = 'offer expired',
  className,
}: IProps) => {
  const router = useRouter();
  const { offerId } = useClientSearchParams();
  const { state } = useContext(AppContext);
  const [time, setTime] = useState(TIMER);
  // const minutes = Math.floor(time / MINUTE);
  // const seconds = time % MINUTE;
  const alreadyAccessAutoExit = hasCookie('accessAutoExit');

  useEffect(() => {
    if (alreadyAccessAutoExit) {
      notFound();
    }
    const interval = setInterval(() => {
      setTime((currentCount) => currentCount - 1);
    }, 1000);
    if (time < 0 && production && !debug) {
      setCookie('accessAutoExit', 1, { path: '/', maxAge: 60 * 30 });
      const eventData = {
        track: TrackEvents.accessAutoExit,
        offerId: offerId,
      };
      sendEvent(eventData);

      if (state.exits.accessAutoExit) {
        const url = makeExitUrl(state.exits.accessAutoExit);
        window.open(url, '_blank');
        router.replace(url);
      }
    }

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      {time > 0 ? (
        <>
          <p className='text-center text-xs text-slate-950 sm:text-sm'>{freeAccess}</p>
          <p
            className={cn('rounded-lg bg-indigo-200 px-2 py-1 text-xs text-slate-950 sm:text-sm', className)}
          >
            {/* 0{minutes}: */}
            {time} {secondsWord}
          </p>
        </>
      ) : (
        <p>{offerExpired}</p>
      )}
    </div>
  );
};

export default CountDown;
