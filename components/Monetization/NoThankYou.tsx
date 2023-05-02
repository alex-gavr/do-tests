'use client';
import Button from '@components/Button/Button';
import { AppContext } from '@context/Context';
import { useGetParam } from '@hooks/useGetParam';
import makeExitUrl from '@utils/makeExitUrl';
import mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/navigation';
import { ReactNode, useContext } from 'react';

const production = process.env.NODE_ENV === 'production';

const NoThankYou = ({ children }: { children: ReactNode }) => {
  const { state } = useContext(AppContext);
  const router = useRouter();
  const { valueString: offerId } = useGetParam('offer_id');

  const handleClick = () => {
    if (production) {
      mixpanel.track('noThankYou', {
        offerId: offerId,
      });
      const url = makeExitUrl(state.exits.noThankYou);
      const urlPops = makeExitUrl(state.exits.noThankYouPops);
      window.open(url, '_blank');
      router.replace(urlPops);
    }
  };

  return (
    <Button type='button' onClick={handleClick} variant={'luxurySecondary'} to='noThankYou' className='text-slate-200'>
      {children}
    </Button>
  );
};

export default NoThankYou;
