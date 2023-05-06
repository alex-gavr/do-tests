'use client';
import Button from '@components/Button/Button';
import { AppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import makeExitUrl from '@utils/makeExitUrl';
import { sendEvent } from '@utils/sendEvent';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const BackButton = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const { offerId } = useClientSearchParams();

  const handleClick = () => {
    if (production && !debug) {
      const eventData = {
        track: 'Back Exit',
        offerId: offerId,
      };
      sendEvent(eventData);
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
