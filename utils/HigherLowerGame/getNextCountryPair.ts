import { ICard } from '@context/higher-lower-game/gameStateType';
import { ICountry } from '@lib/countries';

export type TCountryPair = [ICard, ICard];

const getNextCountryPair = (countries: ICountry[], currentPair: TCountryPair): TCountryPair => {
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
