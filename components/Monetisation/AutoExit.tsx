import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
// import { event } from 'nextjs-google-analytics';
// import ym from 'react-yandex-metrika';
import { useEventListener } from 'usehooks-ts';

const THIRTY_SECONDS = 30;

const AutoExit = () => {
  const router = useRouter();
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
      router.push('https://intorterraon.com/4/5708884');
    }
    // clean up the interval
    return () => clearInterval(interval);
  }, [count, router]);

  return <Fragment />;
};

export default AutoExit;
