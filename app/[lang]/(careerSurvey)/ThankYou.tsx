import Button from '@components/Button/Button';
import CompanyCard from '@components/Company';
import React from 'react';

const CareerThankYou = () => {
  return (
    <>
      <h1 className='text-center text-xl sm:text-2xl md:text-2xl lg:text-4xl'>
        We happy to announce that your values align with
      </h1>
      <CompanyCard />
      <p className='text-center text-sm sm:text-lg md:text-xl lg:text-2xl'>
        There are other offers that can give you a head start in career change 👇
      </p>
      <Button to='mainExit' variant='primary'>
        Claim Offer
      </Button>
    </>
  );
};

export default CareerThankYou;
