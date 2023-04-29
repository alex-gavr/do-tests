'use client';
import { AppContext } from '@context/Context';
import { useGetParam } from '@hooks/useGetParam';
import makeExitUrl from '@utils/makeExitUrl';
import { randomIntFromInterval } from '@utils/randomInt';
import mixpanel from 'mixpanel-browser';
import Link from 'next/link';
import React, { useContext } from 'react';

const production = process.env.NODE_ENV === 'production';
const BackButton = ({randomInt}: {randomInt:number}) => {
  
  const { state } = useContext(AppContext);
  const { valueString: offerId } = useGetParam('offer_id');

  const handleClick = () => {
    if (production && randomInt === 1) {
      mixpanel.track('backButton', {
        variant: 'icon',
        offerId: offerId,
      });
      const url = makeExitUrl(state.exits.backButton);
      window.open(url, '_blank');
    }
    if (production && randomInt === 2) {
      mixpanel.track('backButton', {
        variant: 'text',
        offerId: offerId,
      });
      const url = makeExitUrl(state.exits.backButton);
      window.open(url, '_blank');
    }
  };

  const href = makeExitUrl(state.exits.backButton);

  return (
    <Link
      href={href}
      onClick={handleClick}
      className='fixed bottom-2 left-2 rounded border border-red-500 bg-gray-100 px-3 py-2 text-xs shadow-sm sm:text-sm'
    >
      {randomInt === 2 && <p>Back</p>}
      {randomInt === 1 && (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-4 w-4'>
          <path
            fillRule='evenodd'
            d='M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z'
            clipRule='evenodd'
          />
        </svg>
      )}
    </Link>
  );
};

export default BackButton;
