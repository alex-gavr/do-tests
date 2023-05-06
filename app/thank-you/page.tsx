
import CareerThankYou from "@app/(CareerSurvey)/CareerThankYou";
import DefaultThankYou from "@app/(DefaultSurvey)/DefaultThankYou";
import TravelThankYou from "@app/(TravelSurvey)/TravelThankYou";
import Debug from "@app/Debug";
import { IServerProps } from "@app/page";
import { useServerSearchParams } from "@hooks/useServerSearchParams";


const Page = ({ searchParams }: IServerProps) => {
  const { language, country, debug, offerId } = useServerSearchParams(searchParams);
  

  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-8 p-4'>
      <Debug debug={debug} />
      {offerId === 9241 && <CareerThankYou />}
      {/* @ts-expect-error Async Server Component */}
      {offerId === 9999 && <TravelThankYou language={language} />}
      {offerId === 'default' && <DefaultThankYou />}
    </section>
  );
};

export default Page;
