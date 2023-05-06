'use client';
import { AppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import makeExitUrl from '@utils/makeExitUrl';
import { sendEvent } from '@utils/sendEvent';
import { useContext, useEffect } from 'react';

const Reverse = () => {
  const { state } = useContext(AppContext);
  const { offerId } = useClientSearchParams();
  // REVERSE
  useEffect(() => {
    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      const eventData = {
        track: 'Reverse Exit',
        offerId: offerId,
        step: state.currentStep,
      };
      sendEvent(eventData);

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
