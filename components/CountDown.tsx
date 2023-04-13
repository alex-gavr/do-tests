'use client';
import { AppContext } from '@context/Context';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
// import ym from 'react-yandex-metrika';

const MINUTE = 60;

const CountDown = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const [time, setTime] = useState(MINUTE);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((currentCount) => currentCount - 1);
    }, 1000);
    if (time < 0 && process.env.NODE_ENV === 'production') {
      // ym('reachGoal', 'countDownExit');
      if (state.exits.accessAutoExit) {
        router.push(state.exits.accessAutoExit);
      }
    }

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className='fixed top-1 z-10 flex flex-col items-center justify-center gap-2'>
      {time > 0 ? (
        <>
          <p className='text-center'>free access ends in</p>
          <p className='rounded-lg bg-purple-900 px-4 py-1 text-base text-white md:text-lg'>
            {time} seconds
          </p>
        </>
      ) : (
        <p>offer expired</p>
      )}
    </div>
  );
};

export default CountDown;
