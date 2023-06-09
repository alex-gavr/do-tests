import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { db } from '@db/connection';
import { gameUser } from '@db/schema';
import { TrophyIcon } from '@heroicons/react/24/solid';
import { desc } from 'drizzle-orm';
import { cookies } from 'next/dist/client/components/headers';
import Link from 'next/link';
import LeaderboardButtons from './LeaderboardButtons';

interface IPageProps {}

const Page = async ({}: IPageProps) => {
  const cookie = cookies();
  const playerName = cookie.get('playerName')?.value ?? '?????';

  const leaderboardData = await db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(25);

  return (
    <div className='relative flex min-h-screen flex-col items-center gap-4 bg-slate-900 px-2 py-4'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <h1 className='text-center text-4xl text-cyan-300'>Leaderboard</h1>
        <TrophyIcon className='h-8 w-8 text-yellow-300' />
      </div>
      <p className='text-center text-lg text-neutral-200'>TOP 25 Legends of the game</p>
      <div className='mb-16 flex flex-col justify-center items-center w-full gap-2'>
      {leaderboardData.map((player, index) => (
        <PlayerCard
          index={index}
          key={player.uuid}
          name={player.playerName}
          country={player.country}
          highestScore={player.topScore}
          hintsAvailable={player.hintsAvailable}
          playerName={playerName}
        />
      ))}
      </div>
      {/* Button to go back, button to play again */}
      <div className='fixed bottom-0 w-full rounded-t-md bg-gray-600 bg-opacity-40 bg-clip-padding p-2 backdrop-blur-sm backdrop-filter max-w-2xl'>
        <LeaderboardButtons />
      </div>
    </div>
  );
};

export default Page;
