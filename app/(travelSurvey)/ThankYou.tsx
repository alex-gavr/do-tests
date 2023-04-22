import Button from '@components/Button/Button';

const TravelThankYou = () => {
  return (
    <>
      <h1 className='text-4xl'>Thank you!</h1>
      <p className='text-center text-lg'>
        The guaranteed slot with an 8.74% chance of winning the luxury trip to Singapore is available below 👇
      </p>
      <Button to='mainExit' variant='luxury'>
        CLAIM
      </Button>
    </>
  );
};

export default TravelThankYou;
