'use client';
import { AppContext } from '@context/Context';
import { useGetParam } from '@hooks/useGetParam';
import makeExitUrl from '@utils/makeExitUrl';
import mixpanel from 'mixpanel-browser';
import Link from 'next/link';
import { useContext } from 'react';

const production = process.env.NODE_ENV === 'production';

const NoThankYou = ({noThankYou}: {noThankYou: string}) => {
  const { state } = useContext(AppContext);
  const { valueString: offerId } = useGetParam('offer_id');

  const handleClick = () => {
    if (production) {
      mixpanel.track('noThankYou', {
        offerId: offerId,
      });
      const url = makeExitUrl(state.exits.noThankYou);
      window.open(url, '_blank');
    }
  };

  const href = makeExitUrl(state.exits.noThankYouPops);

  return (
    <div className='flex items-center justify-center'>
      <Link href={href} onClick={handleClick} className='px-8 py-4 text-gray-400 text-xs sm:text-sm md:text-base underline underline-offset-2'>
        {noThankYou}
      </Link>
    </div>
  );
};

export default NoThankYou;
