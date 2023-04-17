import React, { useMemo } from 'react';
import companiesData from './CompaniesData';

const CompanyCard = () => {
  const LENGTH = companiesData.length;
  const randomInt = useMemo(() => {
    return Math.floor(Math.random() * LENGTH) + 1;
  }, []);
  const company = companiesData.find(
    (company) => company.id === randomInt,
  );
  if (company === undefined) {
    return null;
  }
  return (
    <div className='flex flex-col items-center justify-center gap-6 rounded-2xl border border-slate-300 bg-gray-100 p-6 shadow-lg'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <p className='text-2xl capitalize text-slate-950'>{company.name}</p>
        <p className='text-sm italic md:text-base'>{company.industry}</p>
      </div>
      <div className='flex flex-col items-center justify-start gap-2'>
        <div className='flex w-full flex-row items-start justify-start gap-2'>
          <p className='text-sm md:text-base'>Average Salary:</p>
          <p className='text-sm text-green-600 md:text-base'>{company.averageSalary}</p>
        </div>
        <div className='flex w-full flex-row items-start justify-start gap-2'>
          <p className='text-sm md:text-base'>Top Salary:</p>
          <p className='text-sm text-green-600 md:text-base'>{company.topSalary}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
