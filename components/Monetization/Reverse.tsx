'use client';
import { useAppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { initBack } from './InitBack';
import { getRandomZone } from '@utils/monetizationHelpers/getRandomZone';

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

      
      const zone = getRandomZone(state.exits.financeExits.onclick_reverse_zone);
      const url = makeExitUrl(zone, ExitType.onclick);

      initBack(state.exits.financeExits.onclick_back_zone);
      window.open(url, '_self');
      router.replace(url);
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);
  return null;
};

export default Reverse;
