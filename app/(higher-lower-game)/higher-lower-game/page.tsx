import { IServerProps } from '@app/page';
// import Countries from '@components/HigherLowerGameUi/Countries';
// import CreateUser from '@components/HigherLowerGameUi/CreateUser';
// import ScoresContainer from '@components/HigherLowerGameUi/ScoresContainer';
import { useServerSearchParams } from '@hooks/useServerSearchParams';
import { cookies } from 'next/dist/client/components/headers';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';

const ScoresContainer = dynamic(() => import('@components/HigherLowerGameUi/ScoresContainer'), {
  ssr: false,
});
const Countries = dynamic(() => import('@components/HigherLowerGameUi/Countries'), {
  ssr: false,
  loading: () => <div className='h-screen w-full flex flex-col justify-center items-center'><h1 className='text-white'>Loading...</h1></div>,
});
const CreateUser = dynamic(() => import('@components/HigherLowerGameUi/CreateUser'), {
  ssr: false,
});

const Page = ({ searchParams }: IServerProps) => {
  const { country } = useServerSearchParams(searchParams);

  const cookiesList = cookies();
  const lost = cookiesList.has('lost');
  if (lost) {
    redirect('/game-over');
  }

  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-start gap-4 bg-slate-900 py-4'>
        <div className='absolute top-4 w-full'>
          <ScoresContainer />
        </div>
        <h1 className='text-center text-xl text-white sm:text-2xl md:text-3xl mt-16'>
          which country has higher population?
        </h1>
        <Countries />
      </div>
      <CreateUser country={country} />
    </>
  );
};

export default Page;
