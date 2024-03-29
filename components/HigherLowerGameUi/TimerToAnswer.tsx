'use client';

import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { randomIntFromInterval } from '@utils/randomInt';
import { hasCookie, setCookie } from 'cookies-next';
import { THigherLowerGameDictionary } from '@i18n/10702/en';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';

interface ITimerToAnswerProps {
  countryCardTexts: THigherLowerGameDictionary['welcome']['Countries']['CountryCard'];
}

const TimerToAnswer = ({ countryCardTexts }: ITimerToAnswerProps) => {
  const { gameState: state, gameDispatch: dispatch } = useAppContext();
  const isAnswerCorrect = state.isAnswerCorrect;

  const n = useMemo(() => {
    return randomIntFromInterval(0, countryCardTexts.positiveFeedback.length - 1);
  }, []);
  const positiveFeedBack = countryCardTexts.positiveFeedback[n];

  const router = useRouter();
  const lostCookie = hasCookie('lost');

  useEffect(() => {
    if (lostCookie || !state.timerToAnswer.enabled) {
      return;
    } else {
      if (state.timerToAnswer.time === 0) {
        setCookie('lost', true, { maxAge: 60 * 60 * 24 });
        dispatch({ type: GameActionTypes.setRoundsPlayed, payload: state.user.roundsPlayed + 1 });
        if (typeof window !== 'undefined') {
          const params = window.location.search;
          router.replace(`/game-over${params}`);
        }
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
  return (
    <>
      <p className='rounded-xl bg-emerald-300 px-4 py-2 text-center  text-xs uppercase tracking-widest text-black'>
        {isAnswerCorrect === true
          ? positiveFeedBack
          : isAnswerCorrect === false
          ? countryCardTexts.lost
          : state.user.roundsPlayed < 2
          ? countryCardTexts.instructions
          : state.timerToAnswer.time}
        <br />
        {state.user.roundsPlayed < 2 && isAnswerCorrect === null && `${countryCardTexts.secondsLeft}: ` + state.timerToAnswer.time}
      </p>
    </>
  );
};

export default TimerToAnswer;
