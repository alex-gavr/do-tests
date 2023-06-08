'use client';

import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { useAppContext } from '@context/Context';

interface IPlayerRoundEndPositionProps {
  place: number;
}

const PlayerRoundEndPosition = ({ place }: IPlayerRoundEndPositionProps) => {
  const { gameState: state } = useAppContext();

  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <PlayerCard
        name={state.user.playerName}
        playerName={state.user.playerName}
        country={state.user.country}
        highestScore={state.user.topScore}
        hintsAvailable={state.user.hintsAvailable}
        index={place}
      />
    </div>
  );
};

export default PlayerRoundEndPosition;
