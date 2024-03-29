'use client';

import GameButton from '@components/HigherLowerGameUi/GameButton';
import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { ArrowPathIcon, PlusIcon } from '@heroicons/react/24/solid';
import { sendUserDataToDb } from '@utils/HigherLowerGame/sendUserDataToDb';
import debug from '@utils/isDebug';
import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';
import { THigherLowerGameDictionary } from '@i18n/10702/en';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useClientSearchParams } from '@hooks/useClientSearchParams';

interface IHeaderProps {
  headerTexts: THigherLowerGameDictionary['gameOver']['header'];
}

const GameOverHeader = ({ headerTexts }: IHeaderProps) => {
  const { gameState: state, gameDispatch: dispatch, surveyState } = useAppContext();
  const [loading, setLoading] = useState<boolean>(false);
  const playerNameCookie = hasCookie('playerName');
  const topScoreCookie = hasCookie('topScore');
  const router = useRouter();
  const { vignette } = useClientSearchParams();

  useEffect(() => {
    if (topScoreCookie) {
      const topScoreCookieValue = getCookie('topScore') as string;
      const n = parseInt(topScoreCookieValue);
      if (n === state.user.topScore) {
        return;
      } else {
        deleteCookie('topScore');
        setCookie('topScore', state.user.topScore, { path: '/', maxAge: 60 * 60 * 24 * 365 });
        router.refresh();
      }
    } else {
      setCookie('topScore', state.user.topScore, { path: '/', maxAge: 60 * 60 * 24 * 365 });
      router.refresh();
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

    if (typeof window !== 'undefined') {
      const params = window.location.search;
      router.push(`/leaderboard${params}`);
    }
    setLoading(false);
  };

  const handleGetMoreHints = () => {
    if (typeof window !== 'undefined') {
      const params = window.location.search;
      if (vignette === '1') {
        !debug && router.push(`/vignette/${surveyState.exits.vignetteGetHint}${params}`);
      }
    }
    // vignetteDispatch({ type: VignetteActionTypes.openVignette });
    dispatch({ type: GameActionTypes.setHintsAvailable, payload: state.user.hintsAvailable + 1 });
  };

  return (
    <div className='flex w-full max-w-2xl flex-row items-start justify-between gap-4'>
      <div className='flex w-full flex-col items-start justify-start gap-4'>
        <GameButton variant='secondary' onClick={handleClickLeaderboard} className='w-full min-w-0 max-w-[200px]'>
          {loading ? <ArrowPathIcon className='h-4 w-4 animate-spin text-emerald-400' /> : headerTexts.leaderboardButton}
        </GameButton>
        <p className='ml-1 text-xs tracking-widest text-slate-300 md:text-sm'>
          {headerTexts.topScore}: {state.user.topScore}
        </p>
      </div>
      <div className='flex w-full flex-col items-end justify-start gap-4'>
        <GameButton variant='secondary' onClick={handleGetMoreHints} className='w-full min-w-0 max-w-[200px]'>
          {headerTexts.moreHintsButton}
          <PlusIcon className=' ml-2 w-4 stroke-current stroke-2 text-emerald-400 sm:w-5' />
        </GameButton>
        <p className='mr-1 text-xs tracking-widest text-slate-300 md:text-sm'>
          {' '}
          {headerTexts.hintsAvailable}: {state.user.hintsAvailable}
        </p>
      </div>
    </div>
  );
};

export default GameOverHeader;
