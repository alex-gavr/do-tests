import { hasCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';

const WEEK = 60 * 60 * 24 * 7;

const NonUnique = () => {
  const router = useRouter();
  // NonUnique Block
  const nonUnique = hasCookie('nonUnique');
  const path = router.pathname === '/' ? true : false;
  useEffect(() => {
    if (!nonUnique) {
      setCookie('nonUnique', 'true', { path: '/', maxAge: WEEK, secure: true });
    } else if (path && nonUnique) {
      // NonUnique exit (middleware costs too fucking much)
      router.push('https://whoursie.com/4/5729771');
    }
  }, [nonUnique, path]);
  return <Fragment />;
};

export default NonUnique;
