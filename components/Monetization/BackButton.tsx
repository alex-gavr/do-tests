'use client';
import Button from '@components/Button/Button';
import { useAppContext } from '@context/Context';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import { useRouter } from 'next/navigation';

interface IBackButtonProps {
  text?: string;
}
const BackButton = ({ text = 'back' }: IBackButtonProps) => {
  const router = useRouter();
  const { surveyState: state } = useAppContext();

  const handleClick = () => {
    if (production && !debug) {
      const url = makeExitUrl(state.exits.backButton, ExitType.onclick);
      window.open(url, '_blank');
      router.replace(url);
    } else {
      console.log('back button');
    }
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
