'use client';
import AutoExit from '@components/Monetization/AutoExit';
import NonUnique from '@components/Monetization/NonUnique';
import Reverse from '@components/Monetization/Reverse';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import React, { useEffect } from 'react';
import mixpanel from '@lib/mixpanel';
import { useGetParam } from '@hooks/useGetParam';
import { hasCookie, setCookie } from 'cookies-next';
import production from '@utils/isProd';
import { AppProvider } from '@context/Context';
import debug from '@utils/isDebug';


interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  const { valueString: offerId } = useGetParam('offer_id');
  const beenHere = hasCookie('beenHere');

  useEffect(() => {
    if (production && !debug) {
      if (beenHere) {
        mixpanel.track('loadedAgain', {
          offerId: offerId,
        });
      } else {
        // Cookie to track if user has been here before within 30 minutes
        setCookie('beenHere', 1, { path: '/', maxAge: 60 * 30 });
        mixpanel.track('loaded', {
          offerId: offerId,
        });
      }
    }
  }, []);

  return (
    <AppProvider>
      {production && !debug && <AutoExit />}
      {production && !debug && <Reverse />}
      {production && !debug && <NonUnique />}
      <LazyMotion features={async () => (await import('@utils/domAnimation')).default}>
        <AnimatePresence>{children}</AnimatePresence>
      </LazyMotion>
    </AppProvider>
  );
};
export default Providers;
