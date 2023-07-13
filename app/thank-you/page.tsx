import CareerThankYou from '@app/(careerSurvey)/CareerThankYou';
import DefaultThankYou from '@app/(defaultSurvey)/DefaultThankYou';
import ShoppingThankYou from '@app/(shoppingSurvey)/ShoppingThankYou';
import TravelThankYou from '@app/(travelSurvey)/TravelThankYou';
import Debug from '@app/Debug';
import { IServerProps } from '@app/page';
import { useServerSearchParams } from '@hooks/useServerSearchParams';

const Page = ({ searchParams }: IServerProps) => {
  const { language, country, debug, offerId } = useServerSearchParams(searchParams);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8'>
      {debug && <Debug debug={debug} />}
      {offerId === 9241 && <CareerThankYou />}
      {offerId === 9999 && <TravelThankYou language={language} />}
      {offerId === 0 && <DefaultThankYou offer={offerId} language={language} />}
      {offerId === 9998 && <ShoppingThankYou language={language} />}
    </main>
  );
};

export default Page;
