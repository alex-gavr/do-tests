import { TUser } from '@context/higher-lower-game/gameStateType';

export const sendUserDataToDb = async ({ uuid, playerName, country, topScore, hintsAvailable, roundsPlayed, currentScore }: TUser) => {
  if (typeof window !== 'undefined') {
    const res = await fetch('/api/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
      },
      body: JSON.stringify({
        uuid,
        playerName,
        country,
        topScore,
        currentScore,
        hintsAvailable,
        roundsPlayed,
      }),
    });
    return res.status;
  }
};
