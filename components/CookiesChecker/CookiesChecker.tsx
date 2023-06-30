'use client';
import { useAppContext } from '@context/Context';
import production from '@utils/isProd';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { GameEvents } from 'types/TrackEvents';

const CookieChecker = () => {
  const router = useRouter();
  const { surveyState } = useAppContext();

  useEffect(() => {


    const checkCookiesEnabled = () => {
      const cookieEnabled = navigator.cookieEnabled;
      if (!cookieEnabled) {
        console.log('Cookies are disabled');
        // Track these users
        if (production) {
          const eventData: TGameEventProperties = {
            track: GameEvents.cookiesDisabled,
            offerId: 'populations-game',
          };
          sendEvent('game', eventData);
        }

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
