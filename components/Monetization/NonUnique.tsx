'use client';
import { AppContext } from '@context/Context';
import { hasCookie, setCookie } from 'cookies-next';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment, useContext, useEffect } from 'react';

const WEEK = 60 * 60 * 24 * 7;

const NonUnique = () => {
  const router = useRouter();
  const pathname = usePathname()
  const { state } = useContext(AppContext);
  // NonUnique Block
  const nonUnique = hasCookie('nonUnique');
  const path = pathname === '/' ? true : false;
  useEffect(() => {
    if (!nonUnique) {
      setCookie('nonUnique', 'true', { path: '/', maxAge: WEEK, secure: true });
    } else if (path && nonUnique) {
      if (state.exits.nonUniqueExit) {
        router.push(state.exits.nonUniqueExit);
      }
    }
  }, [nonUnique, path]);
  return <Fragment />;
};

export default NonUnique;