'use client';
import Button from '@components/Button/Button';
import { useAppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import makeExitUrl from '@utils/makeExitUrl';
import { sendEvent } from '@utils/sendEvent';
import { useRouter } from 'next/navigation';
import { TrackEvents } from 'types/TrackEvents';

interface IBackButtonProps {
  text?: string;
}
const BackButton = ({text = 'back'}: IBackButtonProps) => {
  const router = useRouter();
  const { surveyState: state } = useAppContext();
  const { offerId } = useClientSearchParams();

  const handleClick = () => {
    if (production && !debug) {
      const eventData = {
        track: TrackEvents.backButtonExit,
        offerId: offerId,
      };
      sendEvent('offer',eventData);
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
      className='fixed bottom-2 left-2 min-w-0 sm:bottom-auto sm:top-2 sm:text-xs z-[998]'
      size={'sm'}
      to='backButton'
    >
      {text}
    </Button>
  );
};

export default BackButton;
