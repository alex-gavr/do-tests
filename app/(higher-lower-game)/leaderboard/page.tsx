import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { db } from '@db/connection';
import { gameUser, leaderboardView } from '@db/schema';
import { TrophyIcon } from '@heroicons/react/24/solid';
import { desc, eq, inArray } from 'drizzle-orm';
import { cookies } from 'next/dist/client/components/headers';
import Link from 'next/link';
import LeaderboardButtons from './LeaderboardButtons';
import { getDictionary } from 'i18n';
import { TValidLocale } from 'config';
import { THigherLowerGameDictionary } from 'dictionaries/7777/en';
import { IServerProps } from '@app/page';
import { useServerSearchParams } from '@hooks/useServerSearchParams';

const Page = async ({ searchParams }: IServerProps) => {
  const cookie = cookies();
  const playerName = cookie.get('playerName')?.value ?? '?????';
  const { language } = useServerSearchParams(searchParams);

  const leaderboardDataReq = db
    .select({ gameUser })
    .from(leaderboardView)
    .leftJoin(gameUser, eq(leaderboardView.uuid, gameUser.uuid))
    .orderBy(desc(leaderboardView.topScore))
    .limit(25);

  const dReq = getDictionary(7777, language as TValidLocale);

  const [leaderboardDataRes, dRes] = await Promise.all([leaderboardDataReq, dReq]);
  // console.log('🚀 ~ leaderboardData:', leaderboardData)
  const d = dRes as THigherLowerGameDictionary;

  if (leaderboardDataRes !== null) {
    return (
      <div className='relative flex min-h-screen flex-col items-center gap-4 bg-slate-900 px-2 py-4'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <h1 className='text-center text-4xl text-cyan-300'>Leaderboard</h1>
          <TrophyIcon className='h-8 w-8 text-yellow-300' />
        </div>
        <p className='text-center text-lg text-neutral-200'>TOP 25 Legends of the game</p>
        <div className='mb-16 flex w-full flex-col items-center justify-center gap-2'>
          {leaderboardDataRes.map((player, index) => {
            if (player.gameUser !== null) {
              return (
                <PlayerCard
                  place={index + 1}
                  key={player.gameUser.uuid}
                  name={player.gameUser.playerName}
                  country={player.gameUser.country}
                  highestScore={player.gameUser.topScore}
                  hintsAvailable={player.gameUser.hintsAvailable}
                  playerName={playerName}
                  playerCardTexts={d.leaderboard.playerCard}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        {/* Button to go back, button to play again */}
        <div className='fixed bottom-0 w-full max-w-2xl rounded-t-md bg-gray-600 bg-opacity-40 bg-clip-padding p-2 backdrop-blur-sm backdrop-filter'>
          <LeaderboardButtons buttonsTexts={d.leaderboard.buttons} />
        </div>
      </div>
    );
  }
};

export default Page;
