'use client';

import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { useAppContext } from '@context/Context';
import { THigherLowerGameDictionary } from 'dictionaries/7777/en';

interface ITopThreeProps {
  topThree: {
    country: string;
    hintsAvailable: number;
    playerName: string;
    uuid: string;
    topScore: number;
    currentScore: number;
    roundsPlayed: number;
  }[];
  place: number;
  playerCardTexts: THigherLowerGameDictionary['leaderboard']['playerCard'];
}

const TopThree = ({ topThree, place, playerCardTexts }: ITopThreeProps) => {
  const { gameState: state } = useAppContext();
  //Index starts at 0, place starts at 1, therefore - 1
  const indexToAdd = place - 1;
  const user = {
    uuid: state.user.uuid,
    country: state.user.country,
    hintsAvailable: state.user.hintsAvailable,
    playerName: state.user.playerName,
    topScore: state.user.topScore,
    currentScore: state.user.currentScore,
    roundsPlayed: state.user.roundsPlayed,
  };

  let newArray = [...topThree];
  newArray.splice(indexToAdd, 0, user);
  if (indexToAdd !== 3) {
    newArray.pop();
  }

  return (
    <div className='flex w-full flex-col items-center justify-center gap-2'>
      {newArray.map((user, index) => (
        <PlayerCard
          place={index + 1}
          key={user.uuid}
          name={user.playerName}
          country={user.country}
          highestScore={user.topScore}
          hintsAvailable={user.hintsAvailable}
          playerName={state.user.playerName}
          playerCardTexts={playerCardTexts}
        />
      ))}
    </div>
  );
};

export default TopThree;
