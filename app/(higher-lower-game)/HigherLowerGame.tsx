import { cookies } from 'next/dist/client/components/headers';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import ScoresSkeleton from '@components/HigherLowerGameUi/ScoresSkeleton';
import CountriesSkeleton from '@components/HigherLowerGameUi/CountriesSkeleton';

const InitialCountries = dynamic(() => import('@components/HigherLowerGameUi/InitialCountries'), {
  ssr: false,
});
const ScoresContainer = dynamic(() => import('@components/HigherLowerGameUi/ScoresContainer'), {
  ssr: false,
  loading: () => <ScoresSkeleton />,
});
const Countries = dynamic(() => import('@components/HigherLowerGameUi/Countries'), {
  loading: () => <CountriesSkeleton />,
  ssr: false,
});
const CreateUser = dynamic(() => import('@components/HigherLowerGameUi/CreateUser'), { ssr: false });

interface IHigherLowerGameProps {
  country: string;
}

const HigherLowerGame = ({ country }: IHigherLowerGameProps) => {
  const cookiesList = cookies();
  const lost = cookiesList.has('lost');
  if (lost) {
    redirect('/game-over');
  }

  return (
    <>
      <InitialCountries country={country} />
      <div className='flex min-h-screen flex-col items-center justify-start gap-4 bg-slate-900 py-4'>
        <div className='absolute top-4 w-full max-w-2xl'>
          <ScoresContainer country={country} />
        </div>
        <h1 className='mt-16 text-center text-xl text-white sm:text-2xl md:text-3xl'>
          which country has higher population?
        </h1>
        <Countries />
      </div>
      <CreateUser country={country} />
    </>
  );
};

export default HigherLowerGame;
