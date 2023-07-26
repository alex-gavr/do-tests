'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const CookieChecker = () => {
  const router = useRouter();

  useEffect(() => {
    const checkCookiesEnabled = () => {
      const cookieEnabled = navigator.cookieEnabled;
      if (!cookieEnabled) {
        console.log('Cookies are disabled');
        router.replace('https://google.com');
      } else {
        console.log('Cookies are enabled');
        // do nothing
      }
    };

    checkCookiesEnabled();
  }, []);

  return null;
};

export default CookieChecker;
