import Button from '@components/Button/Button';
import ButtonForTesting from '@components/ButtonForTesting/ButtonForTesting';

const DefaultSurvey = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-2 px-2 pb-10 pt-20 sm:px-4'>
      <h1 className='text-center text-3xl tracking-wide md:text-4xl'>
        Would You Make A Great Career Online And Become A Millionaire in By 2023?
      </h1>
      <p>Take this FREE test and find out how you can make money on the Internet.</p>
      <Button type='button' variant='primary' to='beginSurvey'>
        LET'S GO
      </Button>
      {/* <ButtonForTesting /> */}
    </section>
  );
};

export default DefaultSurvey;
