'use client';
import { useAppContext } from '@context/Context';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { cn } from '@utils/cn';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface IImageToAdProps {
  src: string;
  className?: string;
}

const ImageToAd = ({ src, className }: IImageToAdProps) => {
  const { surveyState: state } = useAppContext();
  const { offerId } = useClientSearchParams();
  const router = useRouter();
  const handleClick = () => {
    if (production && !debug) {
      const url = makeExitUrl(state.exits.photoExit, ExitType.onclick);
      window.open(url, '_black');
      router.replace(url);
    } else {
      console.log('Image Ad')
    }
  };

  return (
    <div className={cn('relative', className)} onClick={handleClick}>
      <Image src={src} alt='whatever' fill className='object-contain' />
    </div>
  );
};

export default ImageToAd;
