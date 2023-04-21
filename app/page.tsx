import CareerSurvey from './(careerSurvey)/CareerSurvey';
import DefaultSurvey from './(defaultSurvey)/DefaultSurvey';

const StartingPage = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const offerId = searchParams.offer_id ? parseInt(searchParams.offer_id) : undefined;

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 pb-10 pt-20 sm:px-4'>
      {offerId === 9241 && <CareerSurvey />}
      {offerId === undefined && <DefaultSurvey />}
    </main>
  );
};

export default StartingPage;
