import MemoizedCommentSection from '@components/Comments/CommentSection';
import CountDown from '@components/CountDown';
import Button from '@components/Button/Button';

// import dynamic from 'next/dynamic';
// const MemoizedCommentSection = dynamic(() => import('@components/Comments/CommentSection'))

const StartingPage = async () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-2 pt-20 pb-10 sm:px-4'>
      <header className='fixed top-0 w-full py-1'>
        <CountDown />
      </header>
      <div className='flex max-w-4xl flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl text-slate-950 sm:text-4xl md:text-4xl '>
          Find out which top-tier company will gladly hire you because you have similar values
        </h1>
        <p className='text-sm sm:text-base w-full text-center'>
          limited edition survey is available now <br />
          <strong className='underline underline-offset-2 decoration-indigo-600'> for free</strong>
        </p>
      </div>
      <Button type='button' variant='primary' to='beginSurvey'>
        Begin
      </Button>
      <MemoizedCommentSection />
    </main>
  );
};

export default StartingPage;
