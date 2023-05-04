'use client';
import Button from '@components/Button/Button';
import { AppContext } from '@context/Context';
import { useGetParam } from '@hooks/useGetParam';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import makeExitUrl from '@utils/makeExitUrl';
import mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const BackButton = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const { valueString: offerId } = useGetParam('offer_id');

  const handleClick = () => {
    if (production && !debug) {
      mixpanel.track('backButton', {
        offerId: offerId,
      });
    }
    const url = makeExitUrl(state.exits.backButton);
    window.open(url, '_blank');
    router.replace(url);
  };

  return (
    <Button
      type='button'
      onClick={handleClick}
      variant={'backButton'}
      className='fixed bottom-2 left-2 min-w-0 sm:bottom-auto sm:top-2 sm:text-xs'
      size={'sm'}
      to='backButton'
    >
      Back
    </Button>
  );
};

export default BackButton;
