'use client';
import { AppContext } from '@context/Context';
import { useGetParam } from '@hooks/useGetParam';
import makeExitUrl from '@utils/makeExitUrl';
import mixpanel from 'mixpanel-browser';
import Link from 'next/link';
import { ReactNode, useContext } from 'react';

const production = process.env.NODE_ENV === 'production';

const NoThankYou = ({ children, randomInt }: { children: ReactNode; randomInt: number}) => {
  const { state } = useContext(AppContext);
  const { valueString: offerId } = useGetParam('offer_id');

  const handleClick = () => {
    if (production && randomInt === 1) {
      mixpanel.track('noThankYou', {
        variant: 'buttonStyle',
        offerId: offerId,
      });
      const url = makeExitUrl(state.exits.noThankYou);
      window.open(url, '_blank');
    }
    if (production && randomInt === 2) {
      mixpanel.track('noThankYou', {
        variant: 'textStyle',
        offerId: offerId,
      });
      const url = makeExitUrl(state.exits.noThankYou);
      window.open(url, '_blank');
    }
  };

  const styles =
    randomInt === 1
      ? 'px-4 py-4 text-xs text-gray-400 border border-indigo-900 rounded sm:text-sm tracking-wide'
      : 'px-4 py-4 text-xs text-gray-400 sm:text-sm tracking-wide underline underline-offset-2';
  const href = makeExitUrl(state.exits.noThankYouPops);

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={styles}
    >
      {children}
    </Link>
  );
};

export default NoThankYou;
