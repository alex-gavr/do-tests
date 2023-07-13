// import Button from '@components/Button/Button';
// import ButtonForTesting from '@components/ButtonForTesting/ButtonForTesting';
import Header from './Header';
import { TValidLocale, TValidOffer } from 'config';
// import Footer from './Footer';
// import CommentsSection from './CommentsSection/CommentsSection';
// import Survey from './Survey';
import { getDictionary } from '@i18n/i18n';
import { TDefaultDictionary } from '@i18n/0/en';
import dynamic from 'next/dynamic';
import CommentsSectionSkeleton from './CommentsSection/CommentsSectionSkeleton';
import SurveySkeleton from './SurveySkeleton';

const Survey = dynamic(() => import('./Survey'), {
  ssr: false,
  loading: () => <SurveySkeleton />,
});

const CommentsSection = dynamic(() => import('./CommentsSection/CommentsSection'), {
  ssr: false,
  loading: () => <CommentsSectionSkeleton />,
});
const Footer = dynamic(() => import('./Footer'), {
  ssr: false,
});

interface IDefaultSurveyProps {
  offer: TValidOffer;
  language: TValidLocale;
}

const DefaultSurvey = async ({ offer, language }: IDefaultSurveyProps) => {
  const t = (await getDictionary(offer, language)) as TDefaultDictionary;

  return (
    <section className='flex min-h-screen flex-col items-center justify-top gap-4 md:gap-10 bg-neutral-800 px-2 pb-2 pt-2 sm:px-4'>
      <Header />
      <div className='flex w-full max-w-5xl flex-col items-center justify-center gap-8'>
        <h1 className='text-center text-xl tracking-wide md:text-4xl text-slate-50'>{t.MainSection.title}</h1>
        <p className='text-slate-300 text-sm'>{t.MainSection.paragraph}</p>
        <Survey texts={t.MainSection.SurveyTexts} />
      </div>
      <CommentsSection offer={offer} language={language} />
      <Footer />
    </section>
  );
};

export default DefaultSurvey;
