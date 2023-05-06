export const runtime = 'edge';

import { inter, interBold } from '@fonts/Fonts';
import '@styles/globals.css';
import ProgressBar from '@components/ProgressBar';
import { Analytics } from '@vercel/analytics/react';
import Providers from './Providers';
import Debug from './Debug';

export const metadata = {
  title: 'Best offers',
  description: 'Give it a try',
  icons: {
    icon: '/favicon.ico',
  },
};

interface IProps {
  children: React.ReactNode;
  // params: { lang: string };
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang={'en'} className={`${interBold.variable} ${inter.variable}`}>
      <Providers>
        <body className='relative'>
          <ProgressBar />
          {children}
        </body>
      </Providers>
      <Analytics />
    </html>
  );
}
