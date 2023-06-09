'use client';

import GameButton from '@components/HigherLowerGameUi/GameButton';
import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { sendUserDataToDb } from '@utils/HigherLowerGame/sendUserDataToDb';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GameEvents } from 'types/TrackEvents';

interface IHeaderProps {}

const GameOverHeader = ({}: IHeaderProps) => {
  const { gameState: state, gameDispatch: dispatch } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);
  const playerNameCookie = hasCookie('playerName');
  const topScoreCookie = hasCookie('topScore');
  const router = useRouter();

  useEffect(() => {
    if (topScoreCookie) {
      const topScoreCookieValue = getCookie('topScore') as string;
      const n = parseInt(topScoreCookieValue);
      if (n === state.user.topScore) {
        return;
      } else {
        setCookie('topScore', state.user.topScore);
      }
    } else {
      setCookie('topScore', state.user.topScore);
    }
  }, [topScoreCookie]);

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

  return (
    <div className='flex w-full flex-row items-start justify-between gap-4 max-w-2xl'>
      <div className='flex w-full flex-col items-start justify-start gap-4'>
        <GameButton
          variant='secondary'
          onClick={handleClickLeaderboard}
          className='w-full min-w-0 max-w-[200px]'
        >
          {loading ? <ArrowPathIcon className='h-4 w-4 animate-spin ' /> : 'Leaderboard'}
        </GameButton>
        <p className='ml-1 text-xs tracking-widest text-slate-300 md:text-sm'>
          top score: {state.user.topScore}
        </p>
      </div>
      <div className='flex w-full flex-col items-end justify-start gap-4'>
        <GameButton variant='secondary' onClick={handleGetMoreHints} className='w-full min-w-0 max-w-[200px]'>
          More Hints
        </GameButton>
        <p className='mr-1 text-xs tracking-widest text-slate-300 md:text-sm'>
          {' '}
          hints available: {state.user.hintsAvailable}
        </p>
      </div>
    </div>
  );
};

export default GameOverHeader;
