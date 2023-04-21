'use client';
import { AppContext } from '@context/Context';
import makeExitUrl from '@utils/makeExitUrl';
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import mixpanel from '@lib/mixpanel';
import { useGetParam } from '@hooks/useGetParam';

const NonUnique = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const { valueString: offerId } = useGetParam('offer_id');
  // NonUnique Block
  const nonUnique = hasCookie('nonUnique');
  useEffect(() => {
    if (nonUnique) {
      mixpanel.track('nonUnique', {
        offerId,
      });
      if (state.exits.nonUniqueExit) {
        const url = makeExitUrl(state.exits.nonUniqueExit);
        router.push(url);
      }
    }
  }, [nonUnique]);
  return null;
};

export default NonUnique;
