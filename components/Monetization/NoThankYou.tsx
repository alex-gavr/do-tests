'use client';
import Button, { IButtonVariants } from '@components/Button/Button';
import { useAppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import getIppIfErrorGetOnclick from '@utils/ipp/getIppIfErrorGetOnclick';
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

  const handleClick = async () => {
    if (production && !debug) {
      const eventData = {
        track: TrackEvents.notInterested,
        offerId: offerId,
      };
      sendEvent('offer',eventData);
      const noThankYouExit = getIppIfErrorGetOnclick(state.exits.noThankYouIpp, state.exits.noThankYou);
      const noThankYouPops = getIppIfErrorGetOnclick(state.exits.noThankYouPopsIpp, state.exits.noThankYouPops);

      const [url, urlPops] = await Promise.all([noThankYouExit, noThankYouPops]);

      // const url = makeExitUrl(state.exits.noThankYou);
      // const urlPops = makeExitUrl(state.exits.noThankYouPops);
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
