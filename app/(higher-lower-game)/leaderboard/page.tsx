import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { db } from '@db/connection';
import { gameUser, leaderboardView } from '@db/schema';
import { TrophyIcon } from '@heroicons/react/24/solid';
import { desc, eq, sql } from 'drizzle-orm';
import { cookies } from 'next/dist/client/components/headers';
import LeaderboardButtons from './LeaderboardButtons';
import { getDictionary } from '@i18n/i18n';
import { TValidLocale } from 'config';
import { THigherLowerGameDictionary } from '@i18n/10702/en';
import { IServerProps } from '@app/page';
import { useServerSearchParams } from '@hooks/useServerSearchParams';
import LeaderboardSuspense from '@components/HigherLowerGameUi/Skeletons/LeaderboardSuspense';
import { redirect } from 'next/navigation';

const Page = async ({ searchParams }: IServerProps) => {
  const cookie = cookies();
  const playerName = cookie.get('playerName')?.value ?? null;
  const playerId = cookie.get('playerId')?.value ?? null;
  const { language } = useServerSearchParams(searchParams);

  if (playerId === null || playerName === null) {
    redirect('/game-over');
  }

  const playerPlace = await db.select().from(leaderboardView).where(eq(leaderboardView.uuid, playerId));

  if (playerPlace[0].place <= 10) {
    const leaderboardDataReq = db
      .select({ gameUser })
      .from(leaderboardView)
      .leftJoin(gameUser, eq(leaderboardView.uuid, gameUser.uuid))
      .orderBy(desc(leaderboardView.topScore))
      .limit(10);

    const dReq = getDictionary(10702, language as TValidLocale);
    const totalPlayersReq = db.select({ players: sql<string>`COUNT(*)` }).from(leaderboardView);

    const [leaderboardDataRes, dRes, totalPlayersRes] = await Promise.all([
      leaderboardDataReq,
      dReq,
      totalPlayersReq,
    ]);

    const d = dRes as THigherLowerGameDictionary;

    return (
      <div className='relative flex min-h-screen flex-col items-center gap-4 bg-slate-900 px-2 py-4'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <h1 className='text-center text-4xl text-cyan-300'>{d.leaderboard.heading}</h1>
          <TrophyIcon className='h-8 w-8 text-yellow-300' />
        </div>
        <p className='text-center text-lg text-neutral-200'>{d.leaderboard.paragraph}</p>
        <div className='flex w-full flex-col items-center justify-center gap-2'>
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
        <p className='mb-16 text-white'>
          {d.leaderboard.totalPlayers} {totalPlayersRes[0].players}
        </p>
        <div className='fixed bottom-0 w-full max-w-2xl rounded-t-md bg-gray-600 bg-opacity-40 bg-clip-padding p-2 backdrop-blur-sm backdrop-filter'>
          <LeaderboardButtons buttonsTexts={d.leaderboard.buttons} />
        </div>
      </div>
    );
  } else {
    // SHOW THIS WHEN USER NOT IN A TOP 10
    const leaderboardDataReq = db
      .select({ gameUser: gameUser, place: leaderboardView.place })
      .from(leaderboardView)
      .leftJoin(gameUser, eq(leaderboardView.uuid, gameUser.uuid))
      .orderBy(desc(leaderboardView.topScore))
      .limit(10);

    const playersReq = db
      .select({ gameUser: gameUser, place: leaderboardView.place })
      .from(gameUser)
      .leftJoin(leaderboardView, eq(leaderboardView.uuid, playerId))
      .where(eq(gameUser.uuid, playerId));

    const dReq = getDictionary(10702, language as TValidLocale);
    const totalPlayersReq = db.select({ players: sql<string>`COUNT(*)` }).from(leaderboardView);

    const [leaderboardDataRes, dRes, totalPlayersRes, playerRes] = await Promise.all([
      leaderboardDataReq,
      dReq,
      totalPlayersReq,
      playersReq,
    ]);

    const d = dRes as THigherLowerGameDictionary;

    return (
      <div className='relative flex min-h-screen flex-col items-center gap-4 bg-slate-900 px-2 py-4'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <h1 className='text-center text-4xl text-cyan-300'>{d.leaderboard.heading}</h1>
          <TrophyIcon className='h-8 w-8 text-yellow-300' />
        </div>
        <p className='text-center text-lg text-neutral-200'>{d.leaderboard.paragraph}</p>
        <div className='flex w-full flex-col items-center justify-center gap-2'>
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
        <span className='text-white'>&#x2022; &#x2022; &#x2022;</span>
        <PlayerCard
          place={playerRes[0].place ? playerRes[0].place : 0}
          name={playerRes[0].gameUser.playerName}
          country={playerRes[0].gameUser.country}
          highestScore={playerRes[0].gameUser.topScore}
          hintsAvailable={playerRes[0].gameUser.hintsAvailable}
          playerName={playerName}
          playerCardTexts={d.leaderboard.playerCard}
        />
        <p className='mb-16 text-white'>
          {d.leaderboard.totalPlayers} {totalPlayersRes[0].players}
        </p>
        <div className='fixed bottom-0 w-full max-w-2xl rounded-t-md bg-gray-600 bg-opacity-40 bg-clip-padding p-2 backdrop-blur-sm backdrop-filter'>
          <LeaderboardButtons buttonsTexts={d.leaderboard.buttons} />
        </div>
      </div>
    );
  }
};

export default Page;
