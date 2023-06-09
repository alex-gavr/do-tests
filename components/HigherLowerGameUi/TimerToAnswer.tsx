'use client';

import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { hasCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { GameEvents } from 'types/TrackEvents';

interface ITimerToAnswerProps {}

const TimerToAnswer = ({}: ITimerToAnswerProps) => {
  const { gameState: state, gameDispatch: dispatch } = useAppContext();

  const router = useRouter();
  const lostCookie = hasCookie('lost');
  
  useEffect(() => {
    if (lostCookie || !state.timerToAnswer.enabled) {
      return;
    } else {
      if (state.timerToAnswer.time === 0) {
        if (production) {
          const data: TGameEventProperties = {
            track: GameEvents.lostOnTime,
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
        dispatch({ type: GameActionTypes.setRoundsPlayed, payload: state.user.roundsPlayed + 1 });
        router.replace('/game-over');
      } else {
        const interval = setInterval(() => {
          dispatch({ type: GameActionTypes.decrementSecondsToAnswer });
        }, 1000);

        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [state.timerToAnswer.time, router, lostCookie, state.timerToAnswer.enabled]);
  return null;
};

export default TimerToAnswer;
