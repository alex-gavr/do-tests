import MemoizedCommentSection from '@components/Comments/CommentSection';
import SurveyContainer from './SurveyContainer';

const Home = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-8'>
      <div className='flex max-w-4xl flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl text-emerald-400 sm:text-3xl md:text-4xl '>
          Сможете ли вы сделать отличную карьеру в Интернете и стать миллионером в 2023 году?
        </h1>
        <p className='text-sm sm:text-base'>
          Пройдите этот БЕСПЛАТНЫЙ тест и узнайте, как вы можете зарабатывать деньги в Интернете.
        </p>
      </div>
      <SurveyContainer />
      <MemoizedCommentSection />
    </main>
  );
};

export default Home;
