'use client';

import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import countries from '@lib/countries';
import { useEffect } from 'react';

interface IInitialCountriesProps {
  country: string;
}

const InitialCountries = ({ country }: IInitialCountriesProps) => {
  const { gameState: state, gameDispatch: dispatch } = useAppContext();

  if (state.topCard !== null || state.bottomCard !== null) {
    return;
  }

  const bottomCardUsersGeo =
    countries.find((c) => c.iso2.toLocaleLowerCase() === country.toLocaleLowerCase()) ?? countries[6]; // or Argentina
  const allCardsWithLowerPopulation =
    countries.filter((c) => c.population < bottomCardUsersGeo.population) ?? countries[6]; // or Argentina

  const randomIndex = Math.floor(Math.random() * allCardsWithLowerPopulation.length);
  const topCardWithLowerPopulation = allCardsWithLowerPopulation[randomIndex];

  useEffect(() => {
    dispatch({ type: GameActionTypes.setTopCard, payload: topCardWithLowerPopulation });
    dispatch({ type: GameActionTypes.setBottomCard, payload: bottomCardUsersGeo });
  }, [bottomCardUsersGeo, topCardWithLowerPopulation]);

  return null;
};

export default InitialCountries;
