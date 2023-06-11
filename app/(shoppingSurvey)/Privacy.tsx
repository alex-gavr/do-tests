'use client';
import { useAppContext } from '@context/Context';
import { cn } from '@utils/cn';

interface IPrivacyProps {
  text1: string;
  text2: string;
}

const Privacy = ({ text1, text2 }: IPrivacyProps) => {
  const { surveyState } = useAppContext();
  return (
    <>
      {surveyState.currentStep <= 2 && (
        <p className={cn('absolute bottom-5 px-6 text-center text-[0.6rem] text-neutral-600')}>
          {text1} <br />
          {text2}
        </p>
      )}
    </>
  );
};

export default Privacy;
