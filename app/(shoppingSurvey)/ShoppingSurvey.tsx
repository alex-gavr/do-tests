import Button from '@components/Button/Button';
import FullScreenImage from '@components/FullScreenImage';
import CountDown from '@components/Monetization/CountDown';
import NoThankYou from '@components/Monetization/NoThankYou';
import Review from '@components/Reviews/Review';
import ReviewsContainer from '@components/Reviews/ReviewsContainer';
import formatRichText from '@utils/formatRichText';
import { ValidLocale, getTranslator } from 'i18n';

interface IShoppingSurveyProps {
  language: ValidLocale;
}

const ShoppingSurvey = async ({ language }: IShoppingSurveyProps) => {
  const t = await getTranslator(language as ValidLocale);

  const accent = [
    {
      tag: 'strong',
      component: ({ children, index }: any) => (
        <span className='relative ml-1 mr-3 inline-block from-pink-500 to-violet-500 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gradient-to-r'>
          <strong key={`child-${index}`} className='relative px-2 text-white'>
            {children}
          </strong>
        </span>
      ),
    },
  ];

  return (
    <>
      <header className='fixed top-0 w-full py-1'>
        <CountDown
          className='border border-orange-300 bg-yellow-100'
          offerExpired={t.CountDown.offerExpired}
          freeAccess={t.CountDown.freeAccess}
          secondsWord={t.CountDown.secondsWord}
        />
      </header>
      <div className='flex min-h-[70vh] max-w-4xl flex-col items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-center text-2xl leading-9 sm:text-3xl md:text-4xl'>
            {formatRichText(t.ShoppingSurvey.welcome.title, accent)}
          </h1>
          {/* <h1>Get personal discount from Lazada after completing survey</h1> */}
          <p className='text-center text-sm sm:text-base'>
            {t.ShoppingSurvey.welcome.paragraph}
          </p>
        </div>

        <div className='flex w-full flex-row content-center justify-center gap-4'>
          <NoThankYou className='text-slate-900' variant={'secondary'}>
            {t.NotInterested.text}
          </NoThankYou>
          <Button type='button' variant='lazada' className='text-sm font-bold' to='beginSurvey'>
            {t.ShoppingSurvey.welcome.button}
          </Button>
        </div>
      </div>
      <div className='z-10 bg-slate-50 bg-opacity-10 px-1 py-2 backdrop-blur-sm backdrop-filter'>
        <ReviewsContainer title={t.ShoppingSurvey.commentSection.title}>
          {t.ShoppingSurvey.commentSection.shoppingReviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </ReviewsContainer>
      </div>
      <FullScreenImage />
    </>
  );
};

export default ShoppingSurvey;
