'use client';
import AutoExit from '@components/Monetization/AutoExit';
import NonUnique from '@components/Monetization/NonUnique';
import Reverse from '@components/Monetization/Reverse';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import React, { useEffect } from 'react';
// import mixpanel from '@lib/mixpanel';
import { hasCookie, setCookie } from 'cookies-next';
import production from '@utils/isProd';
import { AppProvider } from '@context/Context';
import debug from '@utils/isDebug';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { sendEvent } from '@utils/sendEvent';

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  const { offerId } = useClientSearchParams();
  const beenHere = hasCookie('beenHere');

  useEffect(() => {
    if (production && !debug) {
      if (beenHere) {
        const eventData = {
          track: 'Loaded Again',
          offerId: offerId,
        };
        sendEvent(eventData);
      } else {
        // Cookie to track if user has been here before within 30 minutes
        setCookie('beenHere', 1, { path: '/', maxAge: 60 * 30 });
        const eventData = {
          track: 'Loaded',
          offerId: offerId,
        };
        sendEvent(eventData);
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
