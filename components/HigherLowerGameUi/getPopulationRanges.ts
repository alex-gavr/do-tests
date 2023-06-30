import { ICard } from '@context/higher-lower-game/gameStateType';
import createPopulationRange from '@utils/HigherLowerGame/createPopulationRange';
import { randomIntFromInterval } from '@utils/randomInt';

export const getPopulationRanges = (topCard: ICard, bottomCard: ICard) => {
  // RANGES FOR CARDS
  const isTopCardPopulationBigger = topCard.population > bottomCard.population ? true : false;
  let rangeForFirstCountry = createPopulationRange(topCard.population, 90);
  let rangeForSecondCountry = createPopulationRange(bottomCard.population, 90);

  if (isTopCardPopulationBigger) {
    if (rangeForFirstCountry && rangeForSecondCountry) {
      rangeForSecondCountry[1] = Math.round(rangeForFirstCountry[1] * (randomIntFromInterval(130, 130) / 100));
    }
  } else {
    if (rangeForFirstCountry && rangeForSecondCountry) {
      rangeForFirstCountry[1] = Math.round(rangeForSecondCountry[1] * (randomIntFromInterval(130, 130) / 100));
    }
  }

  return {
    rangeForFirstCountry,
    rangeForSecondCountry,
  };
};
