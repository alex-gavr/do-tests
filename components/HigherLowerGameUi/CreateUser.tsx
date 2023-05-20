'use client';

import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { TUser } from '@context/higher-lower-game/gameStateType';
import countries from '@lib/countries';
import generateRandomName from '@utils/HigherLowerGame/generateRandomName';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { hasCookie, setCookie } from 'cookies-next';
import { useEffect } from 'react';
import { GameEvents } from 'types/TrackEvents';
import { v4 } from 'uuid';

interface ICreateUserProps {
  country: string;
}

const CreateUser = ({ country }: ICreateUserProps) => {
  const { gameState, gameDispatch } = useAppContext();

  if (gameState.user.uuid.length > 0) {
    return null;
  }

  const fullCountryName =
    countries.find((c) => c.iso2.toLowerCase() === country.toLowerCase())?.name ?? 'Earth';

  const user: TUser = {
    uuid: v4(),
    playerName: generateRandomName(),
    country: fullCountryName,
    topScore: 0,
    currentScore: 0,
    hintsAvailable: 3,
    roundsPlayed: 0,
  };

  useEffect(() => {
    if (gameState.user.uuid.length === 0) {
      gameDispatch({ type: GameActionTypes.setUser, payload: user });
      if (production) {
        const data: TGameEventProperties = {
          track: GameEvents.userCreated,
          offerId: 'populations-game',
          userId: user.uuid,
          playerName: user.playerName,
          country: user.country,
          topScore: user.topScore,
          hintsAvailable: user.hintsAvailable,
          roundsPlayed: user.roundsPlayed,
        };
        sendEvent('game', data);
      }
    }
  }, []);

  return null;
};

export default CreateUser;
