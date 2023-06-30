'use client';

import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { hasCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ILostProps {
  isWin: boolean | null;
}

const Lost = ({ isWin }: ILostProps) => {
  const { gameState: state, gameDispatch: dispatch } = useAppContext();

  const router = useRouter();
  const showAnswer = state.showAnswer;

  // Trigger go to game over
  useEffect(() => {
    if (showAnswer && isWin === false) {
      const timer = setTimeout(() => {
        dispatch({ type: GameActionTypes.setRoundsPlayed, payload: state.user.roundsPlayed + 1 });
        const lostCookie = hasCookie('lost');
        const playerIdCookie = hasCookie('playerId');
        if (typeof window !== 'undefined') {
          const params = window.location.search;
          if (lostCookie && playerIdCookie) {
            router.replace(`/game-over${params}`);
          } else if (lostCookie && !playerIdCookie) {
            setCookie('playerId', state.user.uuid, { maxAge: 60 * 60 * 24 * 365 });
            router.replace(`/game-over${params}`);
          } else if (!lostCookie && playerIdCookie) {
            setCookie('lost', true, { maxAge: 60 * 60 * 24 });
            router.replace(`/game-over${params}`);
          } else if (!lostCookie && !playerIdCookie) {
            setCookie('lost', true, { maxAge: 60 * 60 * 24 });
            setCookie('playerId', state.user.uuid, { maxAge: 60 * 60 * 24 * 365 });
            router.replace(`/game-over${params}`);
          }
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAnswer, isWin]);

  // When lost new count down goes from 3 to 0
  useEffect(() => {
    if (showAnswer && isWin === false) {
      const interval = setInterval(() => {
        dispatch({ type: GameActionTypes.decrementLostCountDown });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showAnswer, isWin]);

  return null;
};

export default Lost;
