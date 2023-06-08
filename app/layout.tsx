export const runtime = 'edge';

import { inter, interBold } from '@fonts/Fonts';
import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Providers from './Providers';
import Script from 'next/script';

export const metadata = {
  title: 'Best offers',
  description: 'Give it a try',
  icons: {
    icon: '/favicon.ico',
  },
};

interface IProps {
  children: React.ReactNode;
  modal: React.ReactNode;
  // params: { key: string };
}

export default function RootLayout({ children, modal }: IProps) {
  return (
    <html lang={'en'} className={`${interBold.variable} ${inter.variable}`}>
      <Script
        src='https://uwoaptee.com/pfe/current/micro.tag.min.js?z=5893057&sw=/sw-check-permissions.js'
        strategy='lazyOnload'
        async
      />
      <Providers>
        <body className='relative'>
          {children}
          {modal}
        </body>
      </Providers>
      <Analytics mode='production' />
    </html>
  );
}
