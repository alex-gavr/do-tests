import { ICountry } from '@lib/countries';
import { CountryPair } from './getRandomCountriesPair';

const getNextCountryPair = (countries: ICountry[], currentPair: CountryPair): CountryPair => {
  const availableCountries = countries.filter((country) => !currentPair.includes(country));
  const randomIndex1 = Math.floor(Math.random() * availableCountries.length);
  let randomIndex2 = Math.floor(Math.random() * availableCountries.length);

  // Ensure that the second random index is not the same as the first random index
  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * availableCountries.length);
  }

  return [availableCountries[randomIndex1], availableCountries[randomIndex2]];
};
export default getNextCountryPair;
