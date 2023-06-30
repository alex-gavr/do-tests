'use client';

// import { useEffect, useMemo, useState } from 'react';
import CountryCard from './CountryCard';
import { useAppContext } from '@context/Context';
import GameButton from './GameButton';
import countries from '@lib/countries';
import getNextCountryPair, { TCountryPair } from '@utils/HigherLowerGame/getNextCountryPair';
import { useRouter } from 'next/navigation';
import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
// import { ICard } from '@context/higher-lower-game/gameStateType';
// import createPopulationRange from '@utils/HigherLowerGame/createPopulationRange';
// import { randomIntFromInterval } from '@utils/randomInt';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { GameEvents } from 'types/TrackEvents';
import { THigherLowerGameDictionary } from 'dictionaries/10702/en';
import Lost from './Lost';
import { getPopulationRanges } from './getPopulationRanges';

interface ICountriesProps {
  buttonTexts: THigherLowerGameDictionary['welcome']['Countries']['Button'];
  hintButtonTexts: THigherLowerGameDictionary['welcome']['Countries']['HintButton'];
  children: React.ReactNode;
}

const Countries = ({ buttonTexts, hintButtonTexts, children }: ICountriesProps) => {
  const { gameState: state, gameDispatch: dispatch } = useAppContext();
  const router = useRouter();

  if (state.topCard === null || state.bottomCard === null) {
    return null;
  }

  const countriesToDisplay: TCountryPair = [state.topCard, state.bottomCard];

  const topScore = state.user.topScore;
  const hints = state.user.hintsAvailable;
  const nothingPicked = state.pickedCard === null;
  const showAnswer = state.showAnswer;
  const showHint = state.showHint;
  const pickedCardPopulation = state.pickedCard?.population;
  const timer = state.lostCountDown;

  const unpickedCard = countriesToDisplay.find((country) => country.id !== state.pickedCard?.id);

  let isWin: boolean | null = null;

  if (pickedCardPopulation && unpickedCard) {
    isWin = pickedCardPopulation > unpickedCard.population ? true : false;
  }

  const handleClick = () => {
    // Show Answer
    if (!showAnswer && isWin !== null) {
      dispatch({ type: GameActionTypes.setShowAnswer, payload: true });
      dispatch({ type: GameActionTypes.setIsAnswerCorrect, payload: isWin });

      // if win increase score
      if (isWin === true) {
        dispatch({ type: GameActionTypes.setCurrentScore, payload: state.user.currentScore + 1 });
        dispatch({ type: GameActionTypes.resetSecondsToAnswer });
      }
      // increment highest score, if it matches current score and if it is a win
      if (isWin === true && topScore === state.user.currentScore) {
        // setTopScore((prev: number) => prev + 1);
        deleteCookie('topScore');
        dispatch({ type: GameActionTypes.setTopScore, payload: topScore + 1 });
        setCookie('topScore', topScore + 1, { path: '/', maxAge: 60 * 60 * 24 * 365 });
      }
      // If lose
      if (isWin === false) {
        if (production) {
          const data: TGameEventProperties = {
            track: GameEvents.lostByWrongAnswer,
            offerId: 'populations-game',
            userId: state.user.uuid,
            playerName: state.user.playerName,
            country: state.user.country,
            topScore: state.user.topScore,
            hintsAvailable: state.user.hintsAvailable,
            roundsPlayed: state.user.roundsPlayed,
          };
          sendEvent('game', data);
        }
        setCookie('lost', true, { maxAge: 60 * 60 * 24 });
      }
    }
    // Get Next Country Pair
    if (state.showAnswer) {
      dispatch({ type: GameActionTypes.resetSecondsToAnswer });
      dispatch({ type: GameActionTypes.setPickedCard, payload: null });
      dispatch({ type: GameActionTypes.setShowHint, payload: false });
      dispatch({ type: GameActionTypes.setShowAnswer, payload: false });
      dispatch({ type: GameActionTypes.setIsAnswerCorrect, payload: null });
      const countriesPair = getNextCountryPair(countries, countriesToDisplay);
      dispatch({ type: GameActionTypes.setTopCard, payload: countriesPair[0] });
      dispatch({ type: GameActionTypes.setBottomCard, payload: countriesPair[1] });
    }
  };

  const handleClickHint = () => {
    if (production) {
      const data: TGameEventProperties = {
        track: GameEvents.showHint,
        offerId: 'populations-game',
        userId: state.user.uuid,
        playerName: state.user.playerName,
        country: state.user.country,
        topScore: state.user.topScore,
        hintsAvailable: state.user.hintsAvailable,
        roundsPlayed: state.user.roundsPlayed,
      };
      sendEvent('game', data);
    }

    // Freeze time
    dispatch({ type: GameActionTypes.setSecondsToAnswerEnabled, payload: false });
    // Show Vignette
    router.push('/vignette/5948180');
    // vignetteDispatch({ type: VignetteActionTypes.openVignette });

    // Trigger Hint
    dispatch({ type: GameActionTypes.setShowHint, payload: true });
    // Decrease number of hints available
    dispatch({ type: GameActionTypes.setHintsAvailable, payload: state.user.hintsAvailable - 1 });
  };

  const { rangeForFirstCountry, rangeForSecondCountry } = getPopulationRanges(state.topCard, state.bottomCard);

  return (
    <>
      {isWin !== null && <Lost isWin={isWin} />}
      <CountryCard
        range={rangeForFirstCountry}
        id={state.topCard.id}
        name={state.topCard.name}
        population={state.topCard.population}
        flag={state.topCard.flag}
        iso2={state.topCard.iso2}
      />
      {children}
      <CountryCard
        range={rangeForSecondCountry}
        id={state.bottomCard.id}
        name={state.bottomCard.name}
        population={state.bottomCard.population}
        flag={state.bottomCard.flag}
        iso2={state.bottomCard.iso2}
      />

      <GameButton
        onClick={handleClick}
        type='button'
        disabled={nothingPicked || (showAnswer && isWin === false)}
        variant='primary'
        className={showAnswer && isWin === false ? 'text-white disabled:bg-pink-700 disabled:bg-opacity-50' : ''}
      >
        {nothingPicked
          ? buttonTexts.nothingPicked
          : showAnswer && isWin === true
          ? buttonTexts.answerIsCorrect
          : showAnswer && isWin === false
          ? timer
          : `${buttonTexts.confirmCountry} ${state.pickedCard?.name}`}
      </GameButton>

      <GameButton onClick={handleClickHint} type='button' variant='secondary' disabled={showHint || hints === 0 || showAnswer === true}>
        {showHint ? hintButtonTexts.hintShown : hints === 0 ? hintButtonTexts.noHintAvailable : hintButtonTexts.getHint}
      </GameButton>
    </>
  );
};

export default Countries;
