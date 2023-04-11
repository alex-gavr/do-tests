'use client';
import GlobalCss from '@/styles/GlobalCss';
import Normalize from '@/styles/Normalize';
// import { AppProvider } from '@/context/Context';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalCss />
      <Normalize />
      {children}
    </>
  );
}
