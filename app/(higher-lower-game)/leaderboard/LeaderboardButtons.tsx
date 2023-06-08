'use client';

import GameButton from '@components/HigherLowerGameUi/GameButton';
import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { GameEvents } from 'types/TrackEvents';

interface ILeaderboardButtonsProps {}

const LeaderboardButtons = ({}: ILeaderboardButtonsProps) => {
  const { gameState: state, gameDispatch: dispatch } = useAppContext();
  const router = useRouter();
  const handlePlayAgain = () => {
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

  const handleBack = () => {
    router.back();
  };

  return (
    <div className='flex w-full flex-row items-start justify-between gap-4'>
      <GameButton variant='secondary' onClick={handleBack} className='w-full min-w-0 max-w-[200px]'>
        Back
      </GameButton>
      <GameButton variant='primary' onClick={handlePlayAgain} className='w-full min-w-0 max-w-[200px]'>
        Play Again
      </GameButton>
    </div>
  );
};

export default LeaderboardButtons;
