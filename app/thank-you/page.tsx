// import CompanyCard from '@components/Company';
import dynamic from 'next/dynamic';
// import CareerThankYou from 'app/(careerSurvey)/ThankYou';
// import DefaultThankYou from 'app/(defaultSurvey)/ThankYou';

const CareerThankYou = dynamic(() => import('app/(careerSurvey)/ThankYou'));
const DefaultThankYou = dynamic(() => import('app/(defaultSurvey)/ThankYou'));

const Page = ({ searchParams }: { searchParams: { [key: string]: string } }) => {

  const offerId = parseInt(searchParams.offer_id ? searchParams.offer_id : '0');

  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-8 p-4'>
      {offerId === 9241 && <CareerThankYou />}
      {offerId === 0 && <DefaultThankYou />}
    </section>
  );
};

export default Page;
