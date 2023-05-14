'use client';

import { useContext, useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import GameButton from './GameButton';
import countries from '@lib/countries';
import { CountryPair } from '@utils/HigherLowerGame/getRandomCountriesPair';
import getNextCountryPair from '@utils/HigherLowerGame/getNextCountryPair';
import { useRouter } from 'next/navigation';
import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import { Vignette } from '@lib/Vignette';

interface ICountriesProps {
  initialCountries: CountryPair;
  highestScore: string | undefined;
  hints: string | undefined;
  playerName: string;
}

const Countries = ({ initialCountries, highestScore: h, hints: h2, playerName }: ICountriesProps) => {
  const [countriesToDisplay, setCountriesToDisplay] = useState<CountryPair>(initialCountries);
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();
  const name = hasCookie('playerName');
  useEffect(() => {
    if (name !== true) {
      setCookie('playerName', playerName, { maxAge: 60 * 60 * 24 * 365 });
    }
  }, [name]);
  // console.log(state.higherLowerGame);

  const highestScore = state.higherLowerGame.highestScore;
  const hints = state.higherLowerGame.hint.numberOfHintsAvailable;
  const nothingPicked = state.higherLowerGame.pickedCard === null;
  const showAnswer = state.higherLowerGame.showAnswer;
  const showHint = state.higherLowerGame.hint.showHint;
  const pickedCardPopulation = state.higherLowerGame.pickedCard?.population;
  const timer = state.higherLowerGame.countDown;

  const unpickedCard = countriesToDisplay.filter(
    (country) => country.id !== state.higherLowerGame.pickedCard?.id,
  );

  let isWin: boolean | null = null;

  if (pickedCardPopulation && unpickedCard) {
    isWin = pickedCardPopulation > unpickedCard[0].population ? true : false;
  }

  useEffect(() => {
    if (showAnswer && isWin === false) {
      const timer = setTimeout(() => {
        router.replace('/game-over');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAnswer, isWin]);

  useEffect(() => {
    if (showAnswer && isWin === false) {
      const interval = setInterval(() => {
        dispatch({ type: ActionsType.decrementCountDown });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showAnswer, isWin]);

  const handleClick = () => {
    // Show Answer
    if (!showAnswer && isWin !== null) {
      dispatch({ type: ActionsType.setShowAnswer, payload: true });
      dispatch({ type: ActionsType.setIsAnswerCorrect, payload: isWin });

      // if win increase score
      if (isWin === true) {
        dispatch({ type: ActionsType.setIncrementScore });
      }
      // increment highest score, if it matches current score and if it is a win
      if (isWin === true && highestScore === state.higherLowerGame.score) {
        deleteCookie('highestScore');
        setCookie('highestScore', highestScore + 1, { maxAge: 60 * 60 * 24 * 365 });
        // setHighestScore((prev: number) => prev + 1);
        dispatch({ type: ActionsType.setIncrementHighestScore });
      }
      if (isWin === false) {
        setCookie('lost', true, { maxAge: 60 * 60 * 24 });
      }
    }
    // Get Next Country Pair
    if (state.higherLowerGame.showAnswer) {
      dispatch({ type: ActionsType.setPickedCard, payload: null });
      dispatch({ type: ActionsType.setHint, payload: false });
      dispatch({ type: ActionsType.setShowAnswer, payload: false });
      dispatch({ type: ActionsType.setIsAnswerCorrect, payload: null });
      const countriesPair = getNextCountryPair(countries, countriesToDisplay);
      setCountriesToDisplay(countriesPair);
    }
  };

  const handleClickHint = () => {
    // Show Vignette
    Vignette();

    // Trigger Hint
    dispatch({ type: ActionsType.setHint, payload: true });
    // Decrease number of hints available
    dispatch({ type: ActionsType.setDecrementNumberOfHintsAvailable });
    deleteCookie('hints');
    setCookie('hints', hints - 1, { maxAge: 60 * 60 * 24 * 365 });
  };

  return (
    <>
      <div className='flex flex-row flex-wrap justify-center gap-4'>
        {countriesToDisplay.map((country, index) => (
          <CountryCard
            isWin={isWin}
            key={country.id}
            id={country.id}
            index={index}
            name={country.name}
            population={country.population}
            src={country.flag}
            iso2={country.iso2}
          />
        ))}
      </div>

      <GameButton
        onClick={handleClick}
        type='button'
        disabled={nothingPicked || (showAnswer && isWin === false)}
        variant='primary'
      >
        {nothingPicked
          ? 'select a country'
          : showAnswer && isWin === true
          ? 'Next pair'
          : showAnswer && isWin === false
          ? timer
          : `confirm ${state.higherLowerGame.pickedCard?.name}`}
      </GameButton>
      {!showAnswer && (
        <GameButton
          onClick={handleClickHint}
          type='button'
          variant='secondary'
          disabled={showHint || hints === 0}
        >
          {showHint ? 'hope it helps' : hints === 0 ? 'no hint credits left' : 'show hint'}
        </GameButton>
      )}
      {/* <p>Available hints {hintsAvailable}</p> */}
    </>
  );
};

export default Countries;
