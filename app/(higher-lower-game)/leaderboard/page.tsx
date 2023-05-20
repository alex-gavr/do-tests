import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { gameUser } from '@db/schema';
import { TrophyIcon } from '@heroicons/react/24/solid';
import { connect } from '@planetscale/database';
import { desc } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { cookies } from 'next/dist/client/components/headers';
import Link from 'next/link';

interface IPageProps {}

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME_FRANKFURT,
  password: process.env.DATABASE_PASSWORD_FRANKFURT,
};

const connection = connect(config);

const db = drizzle(connection);

const Page = async ({}: IPageProps) => {
  const cookie = cookies();
  const playerName = cookie.get('playerName')?.value ?? '?????';

  const leaderboardData = await db
    .select()
    .from(gameUser)
    .orderBy(desc(gameUser.topScore))
    .limit(25);

  return (
    <div className='relative flex min-h-screen flex-col items-center gap-4 bg-slate-900 px-2 py-4'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <h1 className='text-center text-4xl text-cyan-300'>Leaderboard</h1>
        <TrophyIcon className='h-8 w-8 text-yellow-300' />
      </div>
      <p className='text-center text-lg text-neutral-200'>TOP 25 Legends of the game</p>
      {leaderboardData.map((player) => (
        <PlayerCard
          key={player.uuid}
          name={player.playerName}
          country={player.country}
          highestScore={player.topScore}
          hintsAvailable={player.hintsAvailable}
          playerName={playerName}
        />
      ))}
      <Link
        className='fixed bottom-2 left-2 z-10 rounded-md bg-blue-700 px-3 py-2 text-xs text-neutral-200'
        href={'/game-over'}
      >
        back
      </Link>
    </div>
  );
};

export default Page;
