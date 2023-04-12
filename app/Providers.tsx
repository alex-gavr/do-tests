'use client';
import { AppProvider } from '@context/Context';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import { PropsWithChildren } from 'react';
// import { AppProvider } from '@/context/Context';

export function Providers({ children }: PropsWithChildren) {
  return (
    <AppProvider>
      <LazyMotion features={async () => (await import('@utils/domAnimation')).default}>
        <AnimatePresence>{children}</AnimatePresence>
      </LazyMotion>
    </AppProvider>
  );
}
