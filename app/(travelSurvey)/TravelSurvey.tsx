import Button from '@components/Button/Button';
import CountDown from '@components/Monetization/CountDown';
import NoThankYou from '@components/Monetization/NoThankYou';
import Image from 'next/image';
import img from '@static/images/singapore2.webp';
import { ValidLocale, getTranslator } from 'i18n';

// function useTranslationsRich(translations: string, formats: Formats) {
//   const pattern = /\[([^\]]+)\]/g;

//   const richText = translations;

//   const chunks = translations.split(pattern);

//   const result = chunks.map((chunk, index) => {
//     const match = pattern.exec(richText);
//     if (match && match[1]) {
//       const formatFunction = formats[match[1]];
//       return formatFunction ? formatFunction(<>{chunk}</>) : <>{match[0]}</>;
//     }
//     console.log(chunk);
//     return <>{chunk}</>;

//   });

//   return <>{result}</>;
// }

export interface ILanguage {
  language: ValidLocale;
}
const TravelSurvey = async ({ language }: ILanguage) => {
  const t = await getTranslator(language as ValidLocale);

  return (
    <>
      <header className='fixed top-0 z-10 w-full py-1'>
        <CountDown
          offerExpired={t.CountDown.offerExpired}
          freeAccess={t.CountDown.freeAccess}
          secondsWord={t.CountDown.secondsWord}
        />
      </header>
      <div className='z-10 flex flex-col gap-8 rounded-lg border border-gray-700 bg-slate-900 bg-opacity-50 px-2 py-8 backdrop-blur-sm backdrop-filter'>
        <h1 className='pl-2 text-center text-3xl text-slate-100 sm:text-4xl md:text-4xl'>
          {t.TravelSurvey.title}
        </h1>
        <p className='text-center text-lg text-slate-300'>{t.TravelSurvey.paragraph}</p>
        <Button type='button' variant='luxury' to='beginSurvey'>
          {t.TravelSurvey.button}
        </Button>
      </div>
      <Image priority src={img} alt='singapore' className='fixed top-0 h-screen object-cover' />
      <NoThankYou noThankYou={t.NoThankYou.text} />
    </>
  );
};

export default TravelSurvey;
