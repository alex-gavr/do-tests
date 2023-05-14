import Scores from '@components/HigherLowerGameUi/Scores';
import ButtonsContainer from './ButtonsContainer';
import { redirect } from 'next/navigation';
import { cookies } from 'next/dist/client/components/headers';

interface IPageProps {}

const Page = ({}: IPageProps) => {
  const cookiesList = cookies();
  const lost = cookiesList.has('lost');

  if (lost !== true) {
    redirect('/higher-lower-game');
  }
  const highestScore = cookiesList.get('highestScore')?.value ?? '0';
  const hints = cookiesList.get('hints')?.value ?? '0';


  return (
    <div className='relative flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 py-4'>
      <div className='absolute top-4 w-full'>
        <Scores highestScore={highestScore} hints={hints} />
      </div>
      <div className='flex flex-col items-center justify-center gap-4 place-self-center'>
        <h1 className='text-2xl text-white'>Game Over!</h1>
        <ButtonsContainer />
      </div>
      
    </div>
  );
};

export default Page;
