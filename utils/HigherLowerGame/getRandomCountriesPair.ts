import { ICountry } from '@lib/countries';

export type CountryPair = [ICountry, ICountry];

const getInitialCountryPair = (countries: ICountry[]): CountryPair => {
  const randomIndex1 = Math.floor(Math.random() * countries.length);
  let randomIndex2 = Math.floor(Math.random() * countries.length);

  // Ensure that the second random index is not the same as the first random index
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * countries.length);
  }

  return [countries[randomIndex1], countries[randomIndex2]];
};

export default getInitialCountryPair;
