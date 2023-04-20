import MemoizedCommentSection from '@components/Comments/CommentSection';
import CountDown from '@components/Monetization/CountDown';
import Button from '@components/Button/Button';
import CareerSurvey from './(careerSurvey)/CareerSurvey';
import DefaultSurvey from './(defaultSurvey)/DefaultSurvey';

// import dynamic from 'next/dynamic';
// const MemoizedCommentSection = dynamic(() => import('@components/Comments/CommentSection'))
// const CountDown = dynamic(() => import('@components/Monetization/CountDown'))
// const Button = dynamic(() => import('@components/Button/Button'))

const StartingPage = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const offerId = parseInt(searchParams.offer_id ? searchParams.offer_id : '0');

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 pb-10 pt-20 sm:px-4'>
      {offerId === 9241 && <CareerSurvey />}
      {offerId === 0 && <DefaultSurvey />}
    </main>
  );
};

export default StartingPage;
