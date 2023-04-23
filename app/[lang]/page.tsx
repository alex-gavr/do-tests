import CareerSurvey from './(careerSurvey)/CareerSurvey';
import DefaultSurvey from './(defaultSurvey)/DefaultSurvey';
import TravelSurvey from './(travelSurvey)/TravelSurvey';

export interface IServerProps {
  params?: { lang: 'id' | 'en' | 'id-ID' };
  searchParams?: { [key: string]: string | undefined };
}

const StartingPage = async ({ params, searchParams }: IServerProps) => {
  const offerId = searchParams?.offer_id ? parseInt(searchParams.offer_id) : undefined;
  const language = params?.lang === 'id' || params?.lang === 'id-ID' ? 'id' : 'en';

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 pb-10 pt-20 sm:px-4'>
      {offerId === 9241 && <CareerSurvey />}
      {offerId === undefined && <DefaultSurvey />}
      {offerId === 9999 && <TravelSurvey language={language} />}
      {/* Welcome: {country} */}
    </main>
  );
};

export default StartingPage;
