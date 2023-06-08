import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { db } from '@db/connection';
import { gameUser } from '@db/schema';
import { asc, desc, gte, sql } from 'drizzle-orm';
// import PlayerRoundEndPosition from './PlayerRoundEndPosition';
import { cookies } from 'next/dist/client/components/headers';
import TopThree from './TopThree';
import dynamic from 'next/dynamic';
import SimpleLoader from '@components/SimpleLoader';
// import TextResults from './TextResults';

const TextResults = dynamic(() => import('./TextResults'), {
  ssr: false,
  loading: () => <SimpleLoader />,
});
const PlayerRoundEndPosition = dynamic(() => import('./PlayerRoundEndPosition'), {
  ssr: false,
});

interface IPositionProps {}
interface ITotalPlayers {
  players: number;
}

const Position = async ({}: IPositionProps) => {
  const cookiesList = cookies();
  const topScoreValue = cookiesList.get('topScore')?.value ?? '0';
  const playerName = cookiesList.get('playerName')?.value ?? '?????';
  const topScoreInt = parseInt(topScoreValue);

  const playerAbove = await db
    .select({
      gameUser,
      place: sql<string>`ROW_NUMBER() OVER (ORDER BY ${gameUser.topScore} DESC)`,
    })
    .from(gameUser)
    .orderBy(asc(gameUser.topScore))
    .where(gte(gameUser.topScore, topScoreInt))
    .limit(1);

  const topPlayerPlace = parseInt(playerAbove[0].place);
  const place = parseInt(playerAbove[0].place) + 1;
  const bottomPlayerPlace = place + 1;

  const totalPlayers = (await db.select({ players: sql`COUNT(*)` }).from(gameUser)) as ITotalPlayers[];

  if (place > 4) {
    const topThreeReq = db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(3);

    // That is just user below
    const playerBelowReq = db
      .select()
      .from(gameUser)
      .where(gte(gameUser.topScore, topScoreInt === 0 ? topScoreInt : topScoreInt - 1))
      .orderBy(asc(gameUser.topScore))
      .limit(1)
      .offset(topScoreInt === 0 ? 1 : 0);

    const [topThree, playerBelow] = await Promise.all([topThreeReq, playerBelowReq]);

    const playerBelowWithPlace = playerBelow.map((player) => {
      return {
        ...player,
        place: place + 1,
      };
    });

    return (
      <>
        <TextResults place={place} />
        <div className='flex w-full flex-col items-center justify-start gap-2 overflow-y-scroll px-1'>
          {topThree.map((user, index) => (
            <PlayerCard
              index={index}
              key={user.uuid}
              name={user.playerName}
              country={user.country}
              highestScore={user.topScore}
              hintsAvailable={user.hintsAvailable}
              playerName={playerName}
            />
          ))}
          <span className='text-white'>&#x2022; &#x2022; &#x2022;</span>
          {playerAbove.map((user, index) => (
            <PlayerCard
              index={topPlayerPlace}
              key={user.gameUser.uuid}
              name={user.gameUser.playerName}
              country={user.gameUser.country}
              highestScore={user.gameUser.topScore}
              hintsAvailable={user.gameUser.hintsAvailable}
              playerName={playerName}
            />
          ))}
          <PlayerRoundEndPosition place={place} />
          {playerBelowWithPlace.map((user, index) => (
            <PlayerCard
              index={bottomPlayerPlace}
              key={user.uuid}
              name={user.playerName}
              country={user.country}
              highestScore={user.topScore}
              hintsAvailable={user.hintsAvailable}
              playerName={playerName}
            />
          ))}
          <p className='my-2 text-sm text-slate-300'>Total Players: {totalPlayers[0].players}</p>
        </div>
      </>
    );
  } else {
    // This shows when the player is in TOP 4
    // Fetch top three players
    const topThree = await db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(3);
    return (
      <>
        <TextResults place={place} />
        <div className='flex w-full flex-col items-center justify-center gap-2'>
          <TopThree topThree={topThree} place={place} />
        </div>
        <p className='my-1 text-sm text-slate-300'>Total Players: {totalPlayers[0].players}</p>
      </>
    );
  }
};

export default Position;
