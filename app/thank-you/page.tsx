import Button from '@components/Button/Button';
// import CompanyCard from '@components/Company';
import React from 'react';
import dynamic from 'next/dynamic';

const CompanyCard = dynamic(() => import('@components/Company'));

const Page = () => {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-8 p-4'>
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
    </section>
  );
};

export default Page;
