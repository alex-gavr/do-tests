'use client';
import Button, { IButtonVariants } from '@components/Button/Button';
import { useAppContext } from '@context/Context';
import getIppIfErrorGetOnclick from '@utils/ipp/getIppIfErrorGetOnclick';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

const NoThankYou = ({
  children,
  className,
  variant,
}: {
  children: ReactNode;
  className?: string;
  variant?: IButtonVariants;
}) => {
  const { surveyState: state } = useAppContext();
  const router = useRouter();

  const handleClick = async () => {
    if (production && !debug) {
      const noThankYouExit = getIppIfErrorGetOnclick(state.exits.noThankYouIpp, state.exits.noThankYou);
      const noThankYouPops = getIppIfErrorGetOnclick(state.exits.noThankYouPopsIpp, state.exits.noThankYouPops);

      const [url, urlPops] = await Promise.all([noThankYouExit, noThankYouPops]);

      window.open(url, '_blank');
      router.replace(urlPops);
    } else {
      console.log('not interested pressed');
    }
  };

  return (
    <Button
      type='button'
      onClick={handleClick}
      variant={variant ?? 'luxurySecondary'}
      to='noThankYou'
      className={className}
    >
      {children}
    </Button>
  );
};

export default NoThankYou;
