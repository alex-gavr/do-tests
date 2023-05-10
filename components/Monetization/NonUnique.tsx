'use client';
import { AppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import makeExitUrl from '@utils/makeExitUrl';
import { sendEvent } from '@utils/sendEvent';
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import { TrackEvents } from 'types/TrackEvents';

const NonUnique = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const { offerId } = useClientSearchParams();
  // NonUnique Block
  const nonUnique = hasCookie('nonUnique');
  const nonUniqueAutoExit = hasCookie('autoExit');
  useEffect(() => {
    if (nonUnique || nonUniqueAutoExit) {
      if (nonUnique) {
        const eventData = {
          track: TrackEvents.nonUnique,
          offerId: offerId,
        };
        sendEvent(eventData);
      }
      if (nonUniqueAutoExit) {
        const eventData = {
          track: TrackEvents.nonUniqueAutoExit,
          offerId: offerId,
        };
        sendEvent(eventData);
      }

      if (state.exits.nonUniqueExit) {
        const url = makeExitUrl(state.exits.nonUniqueExit);
        window.open(url, '_blank');
        router.replace(url);
      }
    }
  }, [nonUnique]);
  return null;
};

export default NonUnique;
