export const runtime = 'edge';

import { inter, interBold } from '@fonts/Fonts';
import '@styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import Providers from './Providers';
import Vignette from '@components/Vignette';

export const metadata = {
  title: 'Best offers',
  description: 'Give it a try',
  icons: {
    icon: '/favicon.ico',
  },
};

interface IProps {
  children: React.ReactNode;
  // params: { key: string };
}

export default function RootLayout({ children }: IProps) {
  
  return (
    <html lang={'en'} className={`${interBold.variable} ${inter.variable}`}>
      <Providers>
        <body className='relative'>
          {children}
          <Vignette />
        </body>
      </Providers>
      <Analytics />
    </html>
  );
}
