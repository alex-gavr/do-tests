'use client';

import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import { useAppContext } from '@context/Context';
import GameButton from './GameButton';
import countries from '@lib/countries';
import { CountryPair } from '@utils/HigherLowerGame/getRandomCountriesPair';
import getNextCountryPair from '@utils/HigherLowerGame/getNextCountryPair';
import { useRouter } from 'next/navigation';
import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';

interface ICountriesProps {
  initialCountries: CountryPair;
  highestScore: string | undefined;
  hints: string | undefined;
  playerName: string;
}

const Countries = ({ initialCountries, highestScore: h, hints: h2, playerName }: ICountriesProps) => {
  const [countriesToDisplay, setCountriesToDisplay] = useState<CountryPair>(initialCountries);
  const { gameState: state, gameDispatch: dispatch } = useAppContext();
  const router = useRouter();
  const name = hasCookie('playerName');
  useEffect(() => {
    if (name !== true) {
      setCookie('playerName', playerName, { maxAge: 60 * 60 * 24 * 365 });
    }
  }, [name]);
  // console.log(state.higherLowerGame);

  const highestScore = state.highestScore;
  const hints = state.hint.numberOfHintsAvailable;
  const nothingPicked = state.pickedCard === null;
  const showAnswer = state.showAnswer;
  const showHint = state.hint.showHint;
  const pickedCardPopulation = state.pickedCard?.population;
  const timer = state.countDown;

  const unpickedCard = countriesToDisplay.filter((country) => country.id !== state.pickedCard?.id);

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
        dispatch({ type: GameActionTypes.decrementCountDown });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showAnswer, isWin]);

  const handleClick = () => {
    // Show Answer
    if (!showAnswer && isWin !== null) {
      dispatch({ type: GameActionTypes.setShowAnswer, payload: true });
      dispatch({ type: GameActionTypes.setIsAnswerCorrect, payload: isWin });

      // if win increase score
      if (isWin === true) {
        dispatch({ type: GameActionTypes.setIncrementScore });
      }
      // increment highest score, if it matches current score and if it is a win
      if (isWin === true && highestScore === state.score) {
        deleteCookie('highestScore');
        setCookie('highestScore', highestScore + 1, { maxAge: 60 * 60 * 24 * 365 });
        // setHighestScore((prev: number) => prev + 1);
        dispatch({ type: GameActionTypes.setIncrementHighestScore });
      }
      if (isWin === false) {
        setCookie('lost', true, { maxAge: 60 * 60 * 24 });
      }
    }
    // Get Next Country Pair
    if (state.showAnswer) {
      dispatch({ type: GameActionTypes.setPickedCard, payload: null });
      dispatch({ type: GameActionTypes.setHint, payload: false });
      dispatch({ type: GameActionTypes.setShowAnswer, payload: false });
      dispatch({ type: GameActionTypes.setIsAnswerCorrect, payload: null });
      const countriesPair = getNextCountryPair(countries, countriesToDisplay);
      setCountriesToDisplay(countriesPair);
    }
  };

  const handleClickHint = () => {
    // Show Vignette
    // vignette();

    // Trigger Hint
    dispatch({ type: GameActionTypes.setHint, payload: true });
    // Decrease number of hints available
    dispatch({ type: GameActionTypes.setDecrementNumberOfHintsAvailable });
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
          : `confirm ${state.pickedCard?.name}`}
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
