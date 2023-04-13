'use client'
import { AppContext } from '@context/Context';
import { useRouter } from 'next/navigation';

import React, { Fragment, useContext, useEffect, useState } from 'react';
// import { event } from 'nextjs-google-analytics';
// import ym from 'react-yandex-metrika';
import { useEventListener } from 'usehooks-ts';

const THIRTY_SECONDS = 30;

const AutoExit = () => {
  const router = useRouter();
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
      // event('auto_exit', { value: 1 });
      // ym('reachGoal', 'autoExit');
      if (state.exits.autoExit) {
        router.push(state.exits.autoExit);
      }
    }
    // clean up the interval
    return () => clearInterval(interval);
  }, [count, router]);

  return <Fragment />;
};

export default AutoExit;
