'use client';
import { useAppContext } from '@context/Context';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const CookieChecker = () => {
  const router = useRouter();
  const { surveyState } = useAppContext();

  useEffect(() => {
    const checkCookiesEnabled = () => {
      const cookieEnabled = navigator.cookieEnabled;
      if (!cookieEnabled) {
        console.log('Cookies are disabled');

        // Redirect to ad
        const url = makeExitUrl(surveyState.exits.cookiesDisabled, ExitType.onclick);
        window.open(url, '_blank');
        router.replace(url);
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
