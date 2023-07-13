'use client';
import exitZones from '@app/(defaultSurvey)/Exits';
import { useAppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import { sendEvent } from '@utils/sendEvent';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { TrackEvents } from 'types/TrackEvents';
import { initBack } from './InitBack';

const Reverse = () => {
  const { surveyState: state } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  const { offerId } = useClientSearchParams();
  // REVERSE
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = window.location.search;
      if (pathname === '/') {
        history.pushState(null, 'Finance Survey', `/${searchParams}`);
      } else if (pathname === '/assessment') {
        history.pushState(null, 'Finance Survey', `/assessment${searchParams}`);
      } else if (pathname === '/thank-you') {
        history.pushState(null, 'Finance Survey', `/thank-you${searchParams}`);
      }
    }

    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      if (state.exits.reverse) {
        const zone = exitZones.onclick_reverse_zone[Math.floor(Math.random() * exitZones.onclick_reverse_zone.length)];
        const url = makeExitUrl(state.exits.reverse, ExitType.onclick);

        initBack(exitZones.onclick_back_zone);
        window.open(url, '_self');
        router.replace(url);
      }
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);
  return null;
};

export default Reverse;
