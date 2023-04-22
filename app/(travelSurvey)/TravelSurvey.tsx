import Button from '@components/Button/Button';
import CountDown from '@components/Monetization/CountDown';
import NoThankYou from '@components/Monetization/NoThankYou';
import Image from 'next/image';
import img from '@components/singapore2.webp'

const TravelSurvey = () => {
  return (
    <>
      <header className='fixed top-0 z-10 w-full py-1'>
        <CountDown />
      </header>
      <div className='z-10 flex flex-col gap-8 rounded-lg border border-gray-700 bg-slate-900 bg-opacity-50 px-2 py-8 backdrop-blur-sm backdrop-filter'>
        <h1 className='pl-2 text-center text-3xl text-slate-100 sm:text-4xl md:text-4xl'>
          Experience the Magic of Singapore
        </h1>
        <p className='text-center text-lg text-slate-300'>
          Complete our survey to get a change to win a{' '}
          <strong className='tracking-wider text-amber-300 underline underline-offset-2'>
            luxury vacation
          </strong>{' '}
          to explore city in style!
        </p>
        <Button type='button' variant='luxury' to='beginSurvey'>Begin</Button>
      </div>
      <Image priority src={img} alt='singapore' className='fixed top-0 h-screen object-cover' />
      <NoThankYou />
    </>
  );
};

export default TravelSurvey;
