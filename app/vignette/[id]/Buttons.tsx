'use client';

import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { GameEvents } from 'types/TrackEvents';

interface ICloseButtonProps {
  link: string;
}

const Buttons = ({ link }: ICloseButtonProps) => {
  const { gameDispatch, gameState: state } = useAppContext();
  const router = useRouter();

  const handleClose = () => {
    if (production) {
      const eventData: TGameEventProperties = {
        track: GameEvents.vignetteClose,
        offerId: 'populations-game',
        userId: state.user.uuid,
        playerName: state.user.playerName,
        country: state.user.country,
        topScore: state.user.topScore,
        hintsAvailable: state.user.hintsAvailable,
        roundsPlayed: state.user.roundsPlayed,
      };
      sendEvent('game', eventData);
    }
    gameDispatch({ type: GameActionTypes.setSecondsToAnswerEnabled, payload: true });
    router.back();
  };
  const handleContinue = () => {
    if (production) {
      const eventData: TGameEventProperties = {
        track: GameEvents.vignetteLead,
        offerId: 'populations-game',
        userId: state.user.uuid,
        playerName: state.user.playerName,
        country: state.user.country,
        topScore: state.user.topScore,
        hintsAvailable: state.user.hintsAvailable,
        roundsPlayed: state.user.roundsPlayed,
      };
      sendEvent('game', eventData);
    }
    gameDispatch({ type: GameActionTypes.setSecondsToAnswerEnabled, payload: true });
    router.back();
  };

  return (
    <>
      <button
        type='button'
        className='cursor-pointer rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50'
        onClick={handleClose}
      >
        Close
      </button>
      <Link
        href={link}
        onClick={handleContinue}
        target='_blank'
        rel='noreferrer'
        className='flex-1 cursor-pointer rounded-lg border border-slate-400 bg-blue-500 px-6 py-3 text-center text-sm tracking-wider text-white'
      >
        Continue
      </Link>
    </>
  );
};

export default Buttons;
