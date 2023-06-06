'use client';
import GameButton from '@components/HigherLowerGameUi/GameButton';
import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { sendUserDataToDb } from '@utils/HigherLowerGame/sendUserDataToDb';
import getExitLinkWithMediation from '@utils/ipp/getExitLinkWithMediation';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GameEvents } from 'types/TrackEvents';

interface IButtonsContainerProps {}

const ButtonsContainer = ({}: IButtonsContainerProps) => {
  const { gameState: state, gameDispatch: dispatch, surveyState } = useAppContext();

  const [loading, setLoading] = useState<boolean>(false);
  const playerNameCookie = hasCookie('playerName');
  const router = useRouter();

  const handleClickGame = () => {
    if (production) {
      const data: TGameEventProperties = {
        track: GameEvents.playAgain,
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
    deleteCookie('lost');
    router.replace('/higher-lower-game');
    dispatch({ type: GameActionTypes.setCurrentScore, payload: 0 });
    dispatch({ type: GameActionTypes.resetLostCountDown });
    dispatch({ type: GameActionTypes.setIsAnswerCorrect, payload: null });
    dispatch({ type: GameActionTypes.setShowAnswer, payload: false });
    dispatch({ type: GameActionTypes.setPickedCard, payload: null });
    dispatch({ type: GameActionTypes.setShowHint, payload: false });
    dispatch({ type: GameActionTypes.resetSecondsToAnswer });
  };

  const handleClickLeaderboard = async () => {
    setLoading(true);
    if (!playerNameCookie) {
      setCookie('playerName', state.user.playerName, { maxAge: 60 * 60 * 24 * 365 });
    }
    // Send user data to db
    const res = await sendUserDataToDb({
      uuid: state.user.uuid,
      playerName: state.user.playerName,
      country: state.user.country,
      topScore: state.user.topScore,
      currentScore: state.user.currentScore,
      hintsAvailable: state.user.hintsAvailable,
      roundsPlayed: state.user.roundsPlayed,
    });
    // Event
    if (production) {
      const data: TGameEventProperties = {
        track: GameEvents.requestLeaderboard,
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

    router.push('/leaderboard');
    setLoading(false);
  };
  const handleGetMoreHints = () => {
    !debug && router.push('/vignette/5959137');
    // vignetteDispatch({ type: VignetteActionTypes.openVignette });
    dispatch({ type: GameActionTypes.setHintsAvailable, payload: state.user.hintsAvailable + 1 });

    if (production) {
      const data: TGameEventProperties = {
        track: GameEvents.getMoreHint,
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
  };

  const result =
    state.user.currentScore === 0
      ? "Oh no! Don't worry, everyone has to start somewhere. Keep practicing and you'll improve!"
      : state.user.currentScore <= 5 && state.user.currentScore > 0
      ? "Not bad for a start! You're making progress. Keep going!"
      : state.user.currentScore <= 10 && state.user.currentScore > 5
      ? "Good effort! You're getting the hang of it. Keep pushing forward!"
      : state.user.currentScore <= 15 && state.user.currentScore > 10
      ? "Well done! You're on the right track. Your hard work is paying off."
      : state.user.currentScore <= 20 && state.user.currentScore > 15
      ? "Impressive round! You're demonstrating solid skills and knowledge."
      : state.user.currentScore <= 30 && state.user.currentScore > 20
      ? "Excellent round! You're really mastering this. Keep up the great work!"
      : state.user.currentScore <= 40 && state.user.currentScore > 30
      ? 'Amazing job! Your score is evidence of your dedication and expertise.'
      : state.user.currentScore <= 50 && state.user.currentScore > 40
      ? "Outstanding! You're reaching new heights and achieving remarkable scores."
      : state.user.currentScore <= 75 && state.user.currentScore > 50
      ? 'Incredible! Your score showcases your exceptional abilities. Keep pushing boundaries!'
      : state.user.currentScore <= 100 && state.user.currentScore > 75
      ? "Wow! You're a true master in this area. Your score is truly remarkable. Congratulations!"
      : 'You are a true Legends, Congratulations!';

  const handleEnd = async () => {
    if (production) {
      const data: TGameEventProperties = {
        track: GameEvents.endOfGame,
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
    const url = await getExitLinkWithMediation(surveyState.exits.gameFinishIpp, surveyState.exits.mainExit);
    // Main Zone
    router.replace(url);
    // Pops
    window.open(url, '_blank');
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-2'>
        <GameButton
          type='button'
          variant='secondary'
          onClick={handleGetMoreHints}
          className='absolute right-3 top-16 min-w-0 border-emerald-300 px-4 py-3 text-[0.65rem] capitalize'
        >
          get more hints
        </GameButton>
        <p className='text-3xl text-slate-200'>Final Score: {state.user?.currentScore}</p>
        <p className='text-center tracking-wider text-emerald-300'>{result}</p>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        <GameButton type='button' variant='primary' onClick={handleClickGame}>
          Try Again
        </GameButton>
        <GameButton type='button' variant='secondary' onClick={handleEnd}>
          Finish
        </GameButton>
        <GameButton
          type='button'
          variant='secondary'
          onClick={handleClickLeaderboard}
          className='absolute bottom-5'
        >
          {loading ? <ArrowPathIcon className='h-4 w-4 animate-spin ' /> : 'Leaderboard'}
        </GameButton>
      </div>
    </>
  );
};

export default ButtonsContainer;
