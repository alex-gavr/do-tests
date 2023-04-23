import CareerThankYou from '@app/(careerSurvey)/ThankYou';
import DefaultThankYou from '@app/(defaultSurvey)/ThankYou';
import TravelThankYou from '@app/(travelSurvey)/ThankYou';
import { IServerProps } from '@app/page';

const Page = ({ params, searchParams }: IServerProps) => {
  const offerId = searchParams?.offer_id ? parseInt(searchParams.offer_id) : undefined;
  const language = params?.lang === 'id' ? params.lang : 'en';

  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-8 p-4'>
      {offerId === 9241 && <CareerThankYou />}
      {offerId === 9999 && <TravelThankYou language={language} />}
      {offerId === undefined && <DefaultThankYou />}
    </section>
  );
};

export default Page;
