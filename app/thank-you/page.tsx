import TravelThankYou from 'app/(travelSurvey)/ThankYou';
import CareerThankYou from 'app/(careerSurvey)/ThankYou';
import DefaultThankYou from 'app/(defaultSurvey)/ThankYou';

const Page = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const offerId = searchParams.offer_id ? parseInt(searchParams.offer_id) : undefined;

  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-8 p-4'>
      {offerId === 9241 && <CareerThankYou />}
      {offerId === 9999 && <TravelThankYou />}
      {offerId === undefined && <DefaultThankYou />}
    </section>
  );
};

export default Page;
