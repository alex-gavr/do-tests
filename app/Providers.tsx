'use client';
// import { AppProvider } from '@/context/Context';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      {children}
    </>
  );
}
