import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { db } from '@db/connection';
import { gameUser } from '@db/schema';
import { asc, desc, gte, sql } from 'drizzle-orm';
import { cookies } from 'next/dist/client/components/headers';
import TopThree from './TopThree';
import dynamic from 'next/dynamic';
import { getDictionary } from 'i18n';
import { TLanguage, TValidLocale } from 'config';
import { THigherLowerGameDictionary } from 'dictionaries/7777/en';

const TextResults = dynamic(() => import('./TextResults'), {
  ssr: false,
});
const PlayerRoundEndPosition = dynamic(() => import('./PlayerRoundEndPosition'), {
  ssr: false,
});

interface IPositionProps extends TLanguage {}
interface ITotalPlayers {
  players: number;
}

const LeaderboardWithPlayer = async ({ language }: IPositionProps) => {
  const cookiesList = cookies();
  const topScoreValue = cookiesList.get('topScore')?.value ?? '0';
  const playerName = cookiesList.get('playerName')?.value ?? '?????';
  const topScoreInt = parseInt(topScoreValue);
  
  const dReq = getDictionary(7777, language as TValidLocale);

  const playerAboveReq = db
    .select({
      gameUser,
      place: sql<string>`ROW_NUMBER() OVER (ORDER BY ${gameUser.topScore} DESC)`,
    })
    .from(gameUser)
    .orderBy(asc(gameUser.topScore))
    .where(gte(gameUser.topScore, topScoreInt))
    .limit(1);

  const totalPlayersReq = db.select({ players: sql`COUNT(*)` }).from(gameUser);

  const [dRes, playerAbove, totalPlayersRes] = await Promise.all([dReq, playerAboveReq, totalPlayersReq]);
  const d = dRes as THigherLowerGameDictionary;
  const totalPlayers = totalPlayersRes as ITotalPlayers[];

  const topPlayerPlace = parseInt(playerAbove[0].place);
  const place = parseInt(playerAbove[0].place) + 1;
  const bottomPlayerPlace = place + 1;

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
        <TextResults
          place={place}
          heading={d.gameOver.heading}
          roundScoreFeedbackTexts={d.gameOver.roundScoreFeedback}
          topScoreFeedbackTexts={d.gameOver.topScoreFeedback}
          positiveFeedbackTexts={d.gameOver.positiveFeedback}
        />
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
              playerCardTexts={d.leaderboard.playerCard}
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
              playerCardTexts={d.leaderboard.playerCard}
            />
          ))}
          <PlayerRoundEndPosition place={place} playerCardTexts={d.leaderboard.playerCard} />
          {playerBelowWithPlace.map((user, index) => (
            <PlayerCard
              index={bottomPlayerPlace}
              key={user.uuid}
              name={user.playerName}
              country={user.country}
              highestScore={user.topScore}
              hintsAvailable={user.hintsAvailable}
              playerName={playerName}
              playerCardTexts={d.leaderboard.playerCard}
            />
          ))}
          <p className='my-2 text-sm text-slate-300'>
            {d.leaderboard.totalPlayers}: {totalPlayers[0].players}
          </p>
        </div>
      </>
    );
  } else {
    // This shows when the player is in TOP 4
    // Fetch top three players
    const topThree = await db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(3);
    return (
      <>
        <TextResults
          place={place}
          heading={d.gameOver.heading}
          roundScoreFeedbackTexts={d.gameOver.roundScoreFeedback}
          topScoreFeedbackTexts={d.gameOver.topScoreFeedback}
          positiveFeedbackTexts={d.gameOver.positiveFeedback}
        />
        <div className='flex w-full flex-col items-center justify-center gap-2'>
          <TopThree topThree={topThree} place={place} playerCardTexts={d.leaderboard.playerCard} />
        </div>
        <p className='my-1 text-sm text-slate-300'>
          {d.leaderboard.totalPlayers}: {totalPlayers[0].players}
        </p>
      </>
    );
  }
};

export default LeaderboardWithPlayer;
