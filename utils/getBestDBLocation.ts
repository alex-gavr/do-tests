import { bestDBLocation } from '@db/db';

export const getBestDBLocation = (country: string) => {
  
  const result = bestDBLocation.find((item) => item.country === country);

  if (result === undefined) {
    console.log('bestDBLocation - undefined for:', country);
    return {
      username: process.env.DATABASE_USERNAME_FRANKFURT,
      password: process.env.DATABASE_PASSWORD_FRANKFURT,
    };
  } else {
    return {
      username: result.username,
      password: result.password,
    };
  }
};
