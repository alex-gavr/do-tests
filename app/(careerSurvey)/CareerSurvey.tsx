import Button from '@components/Button/Button';
import MemoizedCommentSection from '@components/Comments/CommentSection';
import CountDown from '@components/Monetization/CountDown';

const CareerSurvey = () => {
  return (
    <>
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
    </>
  );
};

export default CareerSurvey;
