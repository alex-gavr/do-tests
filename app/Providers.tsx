'use client';
import AutoExit from '@components/Monetization/AutoExit';
import NonUnique from '@components/Monetization/NonUnique';
import Reverse from '@components/Monetization/Reverse';
import { AppProvider } from '@context/Context';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import React, { useEffect } from 'react';
import mixpanel from '@lib/mixpanel';
import { useGetParam } from '@hooks/useGetParam';
import InitialReverse from '@components/Monetization/InitialReverse';

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  const production = process.env.NODE_ENV === 'production';
  const { valueString: offerId } = useGetParam('offer_id');

  useEffect(() => {
    {
      production &&
        mixpanel.track('loaded', {
          offerId: offerId,
        });
    }
  }, []);
  return (
    <AppProvider>
      {production && <AutoExit />}
      {production && <Reverse />}
      {production && <NonUnique />}
      {production && <InitialReverse />}
      <LazyMotion features={async () => (await import('@utils/domAnimation')).default}>
        <AnimatePresence>{children}</AnimatePresence>
      </LazyMotion>
    </AppProvider>
  );
};
export default Providers;
