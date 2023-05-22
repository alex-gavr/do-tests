import Button from '@components/Button/Button';
import FullScreenImage from '@components/FullScreenImage';
import CountDown from '@components/Monetization/CountDown';
import NoThankYou from '@components/Monetization/NoThankYou';
import Review from '@components/Reviews/Review';
import ReviewsContainer from '@components/Reviews/ReviewsContainer';
import formatRichText from '@utils/formatRichText';
import { ValidLocale, getTranslator } from 'i18n';
import Image from 'next/image';

interface IShoppingSurveyProps {
  language: ValidLocale;
}

const ShoppingSurvey = async ({ language }: IShoppingSurveyProps) => {
  const t = await getTranslator(language as ValidLocale);

  const accent = [
    {
      tag: 'strong',
      component: ({ children, index }: any) => (
        <span className='relative ml-1 mr-1 inline-block from-pink-500 to-violet-500 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gradient-to-r'>
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
      <Image
        src='/images/shopping.svg'
        alt='whatever'
        className='absolute left-0 top-8 w-56 -translate-x-8 sm:w-96 sm:-translate-x-14 sm:top-2'
        width={300}
        height={300}
        priority
      />

      <Image
        src='/images/manShopping.svg'
        alt='whatever'
        className='absolute right-0 top-8 w-32 sm:w-64'
        width={300}
        height={500}
        priority
      />
      <div className='relative z-20 flex min-h-[70vh] max-w-4xl flex-col items-center justify-center gap-6'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='text-center text-xl sm:text-3xl md:text-4xl'>
            {formatRichText(t.ShoppingSurvey.welcome.title, accent)}
          </h1>
          {/* <h1>Get personal discount from Lazada after completing survey</h1> */}
          <p className='text-center text-sm sm:text-base'>
            {/* {t.ShoppingSurvey.welcome.paragraph} */}
            {formatRichText(t.ShoppingSurvey.welcome.paragraph, accent)}
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
        <Image
          src='/images/bucket.svg'
          alt='whatever'
          className='absolute right-0 bottom-0 w-16 rotate-12'
          width={40}
          height={40}
          priority
        />
        <Image
          src='/images/bag.svg'
          alt='whatever'
          className='absolute left-0 bottom-4 w-16 -rotate-12'
          width={40}
          height={40}
          priority
        />
        <Image
          src='/images/discount.svg'
          alt='whatever'
          className='absolute bottom-5 w-24'
          width={40}
          height={40}
          priority
        />
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
