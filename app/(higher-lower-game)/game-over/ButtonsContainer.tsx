'use client';

import GameButton from '@components/HigherLowerGameUi/GameButton';
import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

interface IButtonsContainerProps {}

const ButtonsContainer = ({}: IButtonsContainerProps) => {
  const { state, dispatch } = useContext(AppContext);
  const router = useRouter();

  const handleClickGame = () => {
    deleteCookie('lost');
    dispatch({ type: ActionsType.resetScore });
    dispatch({ type: ActionsType.resetCountDown });
    dispatch({ type: ActionsType.setIsAnswerCorrect, payload: null });
    dispatch({ type: ActionsType.setShowAnswer, payload: false });
    dispatch({ type: ActionsType.setPickedCard, payload: null });
    router.replace('/higher-lower-game');
  };

  const handleClickLeaderboard = () => {
    router.replace('/leaderboard');
  };
  const handleGetMoreHints = () => {
    console.log('hints');
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
