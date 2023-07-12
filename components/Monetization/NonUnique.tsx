'use client';
import { useAppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import getIppIfErrorGetOnclick from '@utils/ipp/getIppIfErrorGetOnclick';
import { sendEvent } from '@utils/sendEvent';
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';
import { TrackEvents } from 'types/TrackEvents';

const NonUnique = () => {
  const router = useRouter();
  const nonUnique = hasCookie('nonUnique');
  const nonUniqueAutoExit = hasCookie('autoExit');
  const { surveyState: state } = useAppContext();

  if (!nonUnique && !nonUniqueAutoExit) {
    return null;
  }

  const url = use(getIppIfErrorGetOnclick(state.exits.nonUniqueIpp, state.exits.nonUniqueExit));

  const { offerId } = useClientSearchParams();
  // NonUnique Block

  useEffect(() => {
    if (nonUnique || (nonUniqueAutoExit)) {
      if (nonUnique) {
        const eventData = {
          track: TrackEvents.nonUnique,
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }
      if (nonUniqueAutoExit) {
        const eventData = {
          track: TrackEvents.nonUniqueAutoExit,
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }

      // const url = makeExitUrl(state.exits.nonUniqueExit);
      window.open(url, '_blank');
      router.replace(url);
    }
  }, [nonUnique]);
  return null;
};

export default NonUnique;
