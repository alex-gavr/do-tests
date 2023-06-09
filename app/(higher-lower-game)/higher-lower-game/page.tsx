import { IServerProps } from '@app/page';
// import Countries from '@components/HigherLowerGameUi/Countries';
// import CreateUser from '@components/HigherLowerGameUi/CreateUser';
// import ScoresContainer from '@components/HigherLowerGameUi/ScoresContainer';
import { useServerSearchParams } from '@hooks/useServerSearchParams';
import { cookies } from 'next/dist/client/components/headers';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import SimpleLoader from '@components/SimpleLoader';

const InitialCountries = dynamic(() => import('@components/HigherLowerGameUi/InitialCountries'), {
  ssr: false,
});
const ScoresContainer = dynamic(() => import('@components/HigherLowerGameUi/ScoresContainer'), {
  ssr: false,
});
const Countries = dynamic(() => import('@components/HigherLowerGameUi/Countries'), {
  loading: () => <SimpleLoader />,
  ssr: false,
});
const CreateUser = dynamic(() => import('@components/HigherLowerGameUi/CreateUser'), { ssr: false });

const Page = ({ searchParams }: IServerProps) => {
  const { country } = useServerSearchParams(searchParams);

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
          <ScoresContainer country={country}  />
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

export default Page;
