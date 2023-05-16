'use client';

import GameButton from '@components/HigherLowerGameUi/GameButton';
import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { VignetteActionTypes } from '@context/vignette/vignetteActionsType';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

interface IButtonsContainerProps {}

const ButtonsContainer = ({}: IButtonsContainerProps) => {
  const { gameState: state, gameDispatch: dispatch, vignetteDispatch } = useAppContext();
  const router = useRouter();

  const handleClickGame = () => {
    deleteCookie('lost');
    dispatch({ type: GameActionTypes.resetScore });
    dispatch({ type: GameActionTypes.resetCountDown });
    dispatch({ type: GameActionTypes.setIsAnswerCorrect, payload: null });
    dispatch({ type: GameActionTypes.setShowAnswer, payload: false });
    dispatch({ type: GameActionTypes.setPickedCard, payload: null });
    router.replace('/higher-lower-game');
  };

  const handleClickLeaderboard = () => {
    router.replace('/leaderboard');
  };
  const handleGetMoreHints = () => {
    vignetteDispatch({ type: VignetteActionTypes.openVignette });
    dispatch({ type: GameActionTypes.setIncrementNumberOfHintsAvailable });
  };

  return (
    <>
      <GameButton type='button' variant='primary' onClick={handleClickGame}>
        Try Again
      </GameButton>
      <GameButton type='button' variant='secondary' onClick={handleClickLeaderboard}>
        Leaderboard
      </GameButton>
      <GameButton
        type='button'
        variant='secondary'
        onClick={handleGetMoreHints}
        className='absolute bottom-4 capitalize'
      >
        get more hints
      </GameButton>
    </>
  );
};

export default ButtonsContainer;
