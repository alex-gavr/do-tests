'use client';
import { AppContext } from '@context/Context';
import makeExitUrl from '@utils/makeExitUrl';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import mixpanel from '@lib/mixpanel';
import { useGetParam } from '@hooks/useGetParam';
import production from '@utils/isProd';
import debug from '@utils/isDebug';

const MINUTE = 60;

interface IProps {
  freeAccess?: string;
  secondsWord?: string;
  offerExpired?: string;
}
const CountDown = ({
  freeAccess = 'free access ends in',
  secondsWord = 'seconds',
  offerExpired = 'offer expired',
}: IProps) => {
  const router = useRouter();
  const { valueString: offerId } = useGetParam('offer_id');
  const { state } = useContext(AppContext);
  const [time, setTime] = useState(MINUTE);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((currentCount) => currentCount - 1);
    }, 1000);
    if (time < 0 && production && !debug) {
      mixpanel.track('accessAutoExit', { offerId });
      if (state.exits.accessAutoExit) {
        const url = makeExitUrl(state.exits.accessAutoExit);
        router.replace(url);
      }
    }

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      {time > 0 ? (
        <>
          <p className='text-center text-xs text-slate-950 sm:text-sm md:text-base'>{freeAccess}</p>
          <p className='rounded-lg bg-indigo-200 px-4 py-1 text-xs text-slate-950 sm:text-sm md:text-base'>
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
