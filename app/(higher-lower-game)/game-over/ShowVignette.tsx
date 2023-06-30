'use client';

import { useAppContext } from '@context/Context';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { GameEvents } from 'types/TrackEvents';

interface IShowVignetteProps {}

const ShowVignette = ({}: IShowVignetteProps) => {
  const { gameState: state } = useAppContext();
  const router = useRouter();
  useEffect(() => {
    

    // Production in incognito is busted. 
    if (production) {
      const data: TGameEventProperties = {
        track: GameEvents.vignetteGameOver,
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

    router.push('/vignette/5959144');
  }, []);
  return null;
};

export default ShowVignette;
