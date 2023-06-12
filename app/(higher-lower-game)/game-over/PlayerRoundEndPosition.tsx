'use client';

import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { useAppContext } from '@context/Context';
import { THigherLowerGameDictionary } from 'dictionaries/7777/en';

interface IPlayerRoundEndPositionProps {
  place: number;
  playerCardTexts: THigherLowerGameDictionary['leaderboard']['playerCard'];
}

const PlayerRoundEndPosition = ({ place, playerCardTexts }: IPlayerRoundEndPositionProps) => {
  const { gameState: state } = useAppContext();

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <PlayerCard
        name={state.user.playerName}
        playerName={state.user.playerName}
        country={state.user.country}
        highestScore={state.user.topScore}
        hintsAvailable={state.user.hintsAvailable}
        place={place}
        playerCardTexts={playerCardTexts}
      />
    </div>
  );
};

export default PlayerRoundEndPosition;
