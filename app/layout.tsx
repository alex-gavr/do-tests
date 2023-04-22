import { inter, interBold } from '@fonts/Fonts';
import '../styles/globals.css';
import ProgressBar from '@components/ProgressBar';
import { Analytics } from '@vercel/analytics/react';
import Providers from './Providers';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const production = process.env.NODE_ENV === 'production';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${interBold.variable} ${inter.variable}`}>
      <Providers>
        <body className='relative'>
          <ProgressBar />
          {children}
        </body>
      </Providers>
      <Analytics />
      {/* Push zone */}
      {production && (
        <script src='https://tobaltoyon.com/pfe/current/tag.min.js?z=5893057' data-cfasync='false' async />
      )}
    </html>
  );
}
