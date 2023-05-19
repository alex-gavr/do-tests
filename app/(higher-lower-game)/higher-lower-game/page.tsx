import { IServerProps } from '@app/page';
import Countries from '@components/HigherLowerGameUi/Countries';
import CreateUser from '@components/HigherLowerGameUi/CreateUser';
import Scores from '@components/HigherLowerGameUi/Scores';
import { useServerSearchParams } from '@hooks/useServerSearchParams';
import { cookies } from 'next/dist/client/components/headers';
import { redirect } from 'next/navigation';

const Page = ({ searchParams }: IServerProps) => {
  const { country } = useServerSearchParams(searchParams);

  const cookiesList = cookies();
  const lost = cookiesList.has('lost');
  if (lost) {
    redirect('/game-over');
  }

  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 py-4'>
        <div className='absolute top-4 w-full'>
          <Scores />
        </div>
        <h1 className='text-center text-xl text-white sm:text-2xl md:text-3xl'>
          which country has higher population?
        </h1>
        <Countries />
      </div>
      <CreateUser country={country} />
    </>
  );
};

export default Page;
