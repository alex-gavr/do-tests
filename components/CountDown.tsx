import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
// import { FlexCCC } from '@/styles/core';
// import ym from 'react-yandex-metrika';

const MINUTE = 60;

const CountDown = () => {
  const router = useRouter();
  const [time, setTime] = useState(MINUTE);
  const minutes = Math.floor(time / MINUTE);
  const seconds = time - minutes * MINUTE;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((currentCount) => currentCount - 1);
    }, 1000);
    if (time < 0 && process.env.NODE_ENV === 'production') {
      // ym('reachGoal', 'countDownExit');
      // router.push('https://intorterraon.com/4/5708884');
    }

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className='fixed top-1 z-10 flex items-center justify-center gap-2'>
      {time > 0 ? (
        <>
          <p className='text-center'>free access ends in</p>
          <p className='rounded-lg bg-purple-900 px-4 py-1 text-base text-white md:text-lg lg:text-xl xl:text-2xl'>
            {seconds} seconds
          </p>
        </>
      ) : (
        <p>offer expired</p>
      )}
    </div>
  );
};

export default CountDown;
