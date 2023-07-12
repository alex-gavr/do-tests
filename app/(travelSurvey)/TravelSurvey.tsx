import Button from '@components/Button/Button';
import CountDown from '@components/Monetization/CountDown';
import NoThankYou from '@components/Monetization/NoThankYou';
import Image from 'next/image';
import formatRichText from '@utils/formatRichText';
import ReviewsContainer from '@components/Reviews/ReviewsContainer';
import Review from '@components/Reviews/Review';
import FullScreenImage from '@components/FullScreenImage';
import { travelReviews } from '@configs/TravelSurvey/TravelSingporeReviews';
import { TLanguage, TValidLocale } from 'config';
import { getDictionary } from '@i18n/i18n';
import { TTravelSurveyDictionary } from '@i18n/9999/en';

export interface ITravelSurveyProps extends TLanguage {}

const TravelSurvey = async ({ language }: ITravelSurveyProps) => {
  const d = await getDictionary(9999, language as TValidLocale) as TTravelSurveyDictionary;

  const tags = [
    {
      tag: 'strong',
      component: ({ children, index }: any) => (
        <strong key={`child-${index}`} className='text-amber-200 underline underline-offset-4'>
          {children}
        </strong>
      ),
    },
  ];

  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-2 px-2 pb-10 pt-20 sm:px-4'>
      <header className='fixed top-0 z-10 w-full py-1'>
        <CountDown
          offerExpired={d.countDown.offerExpired}
          freeAccess={d.countDown.freeAccess}
          secondsWord={d.countDown.secondsWord}
        />
      </header>
      <div className='flex flex-col gap-4 p-4 text-sm'>
        <p>
          Join hundreds of lucky winners share your believes with confidence - our survey is 100% secure and
          trusted by many!
        </p>
      </div>
      <div className='z-10 flex flex-col gap-8 rounded-md border border-gray-700 bg-slate-900 px-2 py-8 backdrop-blur-sm backdrop-filter'>
        <h1 className='pl-2 text-center text-3xl text-slate-100 sm:text-4xl md:text-4xl'>
          {d.welcome.title}
        </h1>
        <p className='text-center text-lg text-slate-300'>
          {formatRichText(d.welcome.paragraph, tags)}
        </p>
        <div className='flex w-full flex-row content-center justify-center gap-4'>
          <NoThankYou className='text-slate-200'>{d.notInterested.text}</NoThankYou>
          <Button type='button' variant='luxury' to='beginSurvey'>
            {d.welcome.button}
          </Button>
        </div>
      </div>
      <div className='z-10 bg-slate-50 bg-opacity-10 px-1 py-2 backdrop-blur-sm backdrop-filter'>
        <ReviewsContainer>
          {travelReviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </ReviewsContainer>
      </div>
      <FullScreenImage />
      <div className='fixed top-0 h-screen w-full object-cover '>
        <Image
          fill
          priority
          src={'/images/travel/singapore2.webp'}
          alt='singapore'
          className='object-cover '
        />
      </div>
    </section>
  );
};

export default TravelSurvey;
