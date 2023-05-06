'use client';
import { AppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import makeExitUrl from '@utils/makeExitUrl';
import { sendEvent } from '@utils/sendEvent';
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

const NonUnique = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const { offerId } = useClientSearchParams();
  // NonUnique Block
  const nonUnique = hasCookie('nonUnique');
  useEffect(() => {
    if (nonUnique) {
      const eventData = {
        track: TrackEvents.nonUnique,
        offerId: offerId,
      };
      sendEvent(eventData);

      if (state.exits.nonUniqueExit) {
        const url = makeExitUrl(state.exits.nonUniqueExit);
        router.replace(url);
      }
    }
  }, [nonUnique]);
  return null;
};

export default NonUnique;
