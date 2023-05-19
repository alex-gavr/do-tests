'use client';
import Button, { IButtonVariants } from '@components/Button/Button';
import { useAppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import makeExitUrl from '@utils/makeExitUrl';
import { sendEvent } from '@utils/sendEvent';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { TrackEvents } from 'types/TrackEvents';

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
  const { offerId } = useClientSearchParams();

  const handleClick = () => {
    if (production && !debug) {
      const eventData = {
        track: TrackEvents.notInterested,
        offerId: offerId,
      };
      sendEvent('offer',eventData);

      const url = makeExitUrl(state.exits.noThankYou);
      const urlPops = makeExitUrl(state.exits.noThankYouPops);
      window.open(url, '_blank');
      router.replace(urlPops);
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
