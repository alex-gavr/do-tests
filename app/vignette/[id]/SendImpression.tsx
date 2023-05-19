'use client';
import { useAppContext } from '@context/Context';
import triggerImpression from '@utils/Vignette/triggerImpression';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { useEffect } from 'react';
import { GameEvents } from 'types/TrackEvents';

interface ISendImpressionProps {
  url: string;
}

const SendImpression = ({ url }: ISendImpressionProps) => {
  const { gameState: state } = useAppContext();
  useEffect(() => {
    triggerImpression(url);
    if (production) {
      const eventData: TGameEventProperties = {
        track: GameEvents.vignetteImpression,
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
  }, []);

  return null;
};

export default SendImpression;
