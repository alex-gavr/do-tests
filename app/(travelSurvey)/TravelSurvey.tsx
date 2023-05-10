import Button from '@components/Button/Button';
import CountDown from '@components/Monetization/CountDown';
import NoThankYou from '@components/Monetization/NoThankYou';
import Image from 'next/image';
import { ValidLocale, getTranslator } from 'i18n';
import formatRichText from '@utils/formatRichText';
import ReviewsContainer from '@components/Reviews/ReviewsContainer';
import Review from '@components/Reviews/Review';
import FullScreenImage from '@components/FullScreenImage';
import { travelReviews } from '@configs/TravelSurvey/TravelSingporeReviews';

export interface ILanguage {
  language: ValidLocale;
}
const TravelSurvey = async ({ language }: ILanguage) => {
  const t = await getTranslator(language as ValidLocale);

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
    <>
      <header className='fixed top-0 z-10 w-full py-1'>
        <CountDown
          offerExpired={t.CountDown.offerExpired}
          freeAccess={t.CountDown.freeAccess}
          secondsWord={t.CountDown.secondsWord}
        />
      </header>
      <div className='p-4 text-sm flex flex-col gap-4'>
        <p>Join hundreds of lucky winners share your believes with confidence - our survey is 100% secure and trusted by many!</p>
      </div>
      <div className='z-10 flex flex-col gap-8 rounded-md border border-gray-700 bg-slate-900 px-2 py-8 backdrop-blur-sm backdrop-filter'>
        <h1 className='pl-2 text-center text-3xl text-slate-100 sm:text-4xl md:text-4xl'>
          {t.TravelSurvey.welcome.title}
        </h1>
        <p className='text-center text-lg text-slate-300'>{formatRichText(t.TravelSurvey.welcome.paragraph, tags)}</p>
        <div className='flex w-full flex-row content-center justify-center gap-4'>
          <NoThankYou className='text-slate-200'>{t.NotInterested.text}</NoThankYou>
          <Button type='button' variant='luxury' to='beginSurvey'>
            {t.TravelSurvey.welcome.button}
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
        <Image fill priority src={'/images/travel/singapore2.webp'} alt='singapore' className='object-cover ' />
      </div>
    </>
  );
};

export default TravelSurvey;
