import MemoizedCommentSection from '@components/Comments/CommentSection';
import CountDown from '@components/Monetization/CountDown';
import Button from '@components/Button/Button';

// import dynamic from 'next/dynamic';
// const MemoizedCommentSection = dynamic(() => import('@components/Comments/CommentSection'))
// const CountDown = dynamic(() => import('@components/Monetization/CountDown'))
// const Button = dynamic(() => import('@components/Button/Button'))

const StartingPage = async () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 pb-10 pt-20 sm:px-4'>
      <header className='fixed top-0 w-full py-1'>
        <CountDown />
      </header>
      <div className='flex min-h-[70vh] max-w-4xl flex-col items-center justify-center gap-6'>
        <h1 className='pl-2 text-2xl text-slate-950 sm:text-4xl md:text-4xl'>
          Find out which top-tier company will gladly hire you because you have similar values
        </h1>
        <p className='w-full text-center text-sm sm:text-base'>
          limited edition survey is available now <br />
          <strong className='underline decoration-indigo-600 underline-offset-2'> for free</strong>
        </p>
        <Button type='button' variant='primary' to='beginSurvey'>
          Begin
        </Button>
      </div>
      <MemoizedCommentSection />
    </main>
  );
};

export default StartingPage;
