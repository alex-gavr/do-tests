export const runtime = 'edge';

import { inter, interBold } from '@fonts/Fonts';
import '@styles/globals.css';
import ProgressBar from '@components/ProgressBar';
import { Analytics } from '@vercel/analytics/react';
import Providers from './Providers';
import Script from 'next/script';

export const metadata = {
  title: 'Best offers',
  description: 'Give it a try',
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    pushsdk: '4b56e4173da530d3f2cdd7709ea8e218',
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
      <Script>
        {
          ` var s = document.createElement('script');
            s.src='//deefauph.com/pfe/current/micro.tag.min.js?z=5931129'+'&sw=/sw-check-permissions-17b74.js';
            s.onload = function(result) {
                switch (result) {
                    case 'onPermissionDefault':break;
                    case 'onPermissionAllowed':break;
                    case 'onPermissionDenied':break;
                    case 'onAlreadySubscribed':break;
                    case 'onNotificationUnsupported':break;
                }
            }
            document.head.appendChild(s);`
          }
      </Script>
    </html>
  );
}
