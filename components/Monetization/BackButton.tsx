'use client';
import { AppContext } from '@context/Context';
import { useGetParam } from '@hooks/useGetParam';
import makeExitUrl from '@utils/makeExitUrl';
import mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const production = process.env.NODE_ENV === 'production';
const BackButton = () => {
  const router = useRouter();
  const { state } = useContext(AppContext);
  const { valueString: offerId } = useGetParam('offer_id');

  const handleClick = () => {
    if (production) {
      mixpanel.track('backButton', {
        offerId: offerId,
      });
    }
    const url = makeExitUrl(state.exits.backButton);
    window.open(url, '_blank');
    router.replace(url);
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      className='fixed bottom-2 left-2 rounded border border-red-500 border-opacity-40 bg-gray-900 text-gray-400 px-3 py-2 text-xs shadow-sm sm:text-sm'
    >
      Back
    </button>
  );
};

export default BackButton;
