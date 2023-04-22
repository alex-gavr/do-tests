import CareerSurvey from './(careerSurvey)/CareerSurvey';
import DefaultSurvey from './(defaultSurvey)/DefaultSurvey';
import TravelSurvey from './(travelSurvey)/TravelSurvey';

const StartingPage = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const offerId = searchParams.offer_id ? parseInt(searchParams.offer_id) : undefined;
  const country = searchParams.country ? searchParams.country : undefined;

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 pb-10 pt-20 sm:px-4'>
      {offerId === 9241 && <CareerSurvey />}
      {offerId === undefined && <DefaultSurvey />}
      {offerId === 9999 && <TravelSurvey />}
      Welcome: {country}
    </main>
  );
};

export default StartingPage;
