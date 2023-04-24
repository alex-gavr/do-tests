// export const runtime = 'experimental-edge';

import CareerThankYou from "@app/(careerSurvey)/ThankYou";
import DefaultThankYou from "@app/(defaultSurvey)/ThankYou";
import TravelThankYou from "@app/(travelSurvey)/ThankYou";
import { IServerProps } from "@app/page";


const Page = ({ searchParams }: IServerProps) => {
  const offerId = searchParams?.offer_id ? parseInt(searchParams.offer_id) : undefined;
  const language = searchParams?.locale

  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-8 p-4'>
      {offerId === 9241 && <CareerThankYou />}
      {/* @ts-ignore */}
      {offerId === 9999 && <TravelThankYou language={language} />}
      {offerId === undefined && <DefaultThankYou />}
    </section>
  );
};

export default Page;
