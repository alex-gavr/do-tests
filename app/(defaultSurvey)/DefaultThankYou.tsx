import Button from '@components/Button/Button';

const DefaultThankYou = () => {
  return (
    <>
      <h1 className='text-center text-xl sm:text-2xl md:text-2xl lg:text-4xl'>THANK YOU!</h1>
      <p className='text-center text-sm sm:text-lg md:text-xl lg:text-2xl'>
        Your Test Result: EXCELLENT (35 out of 35)
      </p>
      <Button to='mainExit' variant='primary'>
        GET OFFER
      </Button>
    </>
  );
};

export default DefaultThankYou;
