import { useRouter } from 'next/router';
import React, { Fragment, useEffect } from 'react';
// import { event } from 'nextjs-google-analytics';
// import ym from 'react-yandex-metrika';

const Reverse = () => {
  const router = useRouter();
  // REVERSE
  useEffect(() => {
    router.beforePopState(({ as }) => {
      // Reverse exit
      // event('reverse_exit', { value: 1 });
      // ym('reachGoal', 'reverseExit');
      router.push('https://woafoame.net/4/5708374');
      return false;
    });
    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);
  return <Fragment />;
};

export default Reverse;
