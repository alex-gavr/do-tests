'use client';
import { AppContext } from '@context/Context';
import makeExitUrl from '@utils/makeExitUrl';
import mixpanel from '@lib/mixpanel';
import { useContext, useEffect } from 'react';
import { useGetParam } from '@hooks/useGetParam';

const Reverse = () => {
  const { state } = useContext(AppContext);
  const { valueString: offerId } = useGetParam('offer_id');
  // REVERSE
  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      mixpanel.track('reverse', {
        offerId,
        step: state.currentStep,
      });
      if (state.exits.reverse) {
        const url = makeExitUrl(state.exits.reverse);
        window.location.replace(url);
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
