'use client';
import AutoExit from '@components/Monetization/AutoExit';
import Reverse from '@components/Monetization/Reverse';
import { AppProvider } from '@context/Context';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import { PropsWithChildren } from 'react';

const production = process.env.NODE_ENV === 'production';
export function Providers({ children }: PropsWithChildren) {
  return (
    <AppProvider>
      {production && <AutoExit />}
      {production && <Reverse />}
      {/* {production && <NonUnique />} */}
      <LazyMotion features={async () => (await import('@utils/domAnimation')).default}>
        <AnimatePresence>{children}</AnimatePresence>
      </LazyMotion>
    </AppProvider>
  );
}
