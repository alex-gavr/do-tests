import Button from '@components/Button/Button';
import CountDown from '@components/Monetization/CountDown';
import NoThankYou from '@components/Monetization/NoThankYou';
import Image from 'next/image';
import img from '@components/singapore2.webp';

export interface ILanguage {
  language: string;
}
const text = [
  {
    language: 'en',
    texts: {
      title: 'Experience the Magic of Singapore',
      description1: 'Complete our survey to get a chance to win a ',
      strong: 'luxury vacation ',
      description2: 'to explore city in style!',
      button: 'Begin',
      noThankYou: 'No, thank you',
      countDown: {
        freeAccess: 'free access ends in',
        secondsWord: 'seconds',
        offerExpired: 'offer expired',
      },
    },
  },
  {
    language: 'id',
    texts: {
      title: 'Temukan Keajaiban Singapura',
      description1: 'Lengkapi survei kami untuk mendapatkan perubahan untuk memenangkan ',
      strong: 'liburan mewah ',
      description2: 'untuk menjelajahi kota dengan penuh gaya!',
      button: 'Mulai',
      noThankYou: 'Tidak terima kasih',
      countDown: {
        freeAccess: 'akses gratis berakhir',
        secondsWord: 'detik',
        offerExpired: 'penawaran kedaluwarsa',
      },
    },
  },
];
const TravelSurvey = ({ language }: ILanguage) => {
  
  const currentTexts = text.find((item) => item.language === language);

  return (
    <>
      <header className='fixed top-0 z-10 w-full py-1'>
        <CountDown
          freeAccess={currentTexts?.texts.countDown.freeAccess}
          secondsWord={currentTexts?.texts.countDown.secondsWord}
          offerExpired={currentTexts?.texts.countDown.offerExpired}
        />
      </header>
      <div className='z-10 flex flex-col gap-8 rounded-lg border border-gray-700 bg-slate-900 bg-opacity-50 px-2 py-8 backdrop-blur-sm backdrop-filter'>
        <h1 className='pl-2 text-center text-3xl text-slate-100 sm:text-4xl md:text-4xl'>
          {currentTexts?.texts.title}
        </h1>
        <p className='text-center text-lg text-slate-300'>
          {currentTexts?.texts.description1}
          <strong className='tracking-wider text-amber-300 underline underline-offset-2'>
            {currentTexts?.texts.strong}
          </strong>{' '}
          {currentTexts?.texts.description2}
        </p>
        <Button type='button' variant='luxury' to='beginSurvey'>
          {currentTexts?.texts.button}
        </Button>
      </div>
      <Image priority src={img} alt='singapore' className='fixed top-0 h-screen object-cover' />
      <NoThankYou noText={currentTexts?.texts.noThankYou} />
    </>
  );
};

export default TravelSurvey;
