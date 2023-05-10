'use client';

import { AppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { cn } from '@utils/cn';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import makeExitUrl from '@utils/makeExitUrl';
import { sendEvent } from '@utils/sendEvent';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { TrackEvents } from 'types/TrackEvents';

interface IImageToAdProps {
  src: string;
  className?: string;
}

const ImageToAd = ({ src, className }: IImageToAdProps) => {
  const { state } = useContext(AppContext);
  const { offerId } = useClientSearchParams();
  const router = useRouter();
  const handleClick = () => {
    if (production && !debug) {
      const eventData = {
        track: TrackEvents.photoExit,
        offerId: offerId,
        imgId: src,
      };
      sendEvent(eventData);
    }
    const url = makeExitUrl(state.exits.photoExit);
    window.open(url, '_black');
    router.replace(url);
  };

  return (
    <div className={cn('relative', className)} onClick={handleClick}>
      <Image src={src} alt='whatever' fill className='object-contain' />
    </div>
  );
};

export default ImageToAd;
