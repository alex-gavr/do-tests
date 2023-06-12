import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { db } from '@db/connection';
import { TGameUser, gameUser, leaderboardView } from '@db/schema';
import { desc, eq, gte, or, sql } from 'drizzle-orm';
import { cookies } from 'next/dist/client/components/headers';
// import TopThree from './TopThree';
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
const TopThree = dynamic(() => import('./TopThree'), {
  ssr: false,
});

interface IPositionProps extends TLanguage {}

const LeaderboardWithPlayer = async ({ language }: IPositionProps) => {
  const cookiesList = cookies();
  const topScoreValue = cookiesList.get('topScore')?.value ?? '0';
  const playerName = cookiesList.get('playerName')?.value ?? '?????';
  const playerId = cookiesList.get('playerId')?.value ?? '';
  const topScoreInt = parseInt(topScoreValue);

  // Check if user exists in the database
  const isUserExistsReq = db
    .select({ count: sql<string>`COUNT(*)` })
    .from(gameUser)
    .where(eq(gameUser.uuid, playerId));
    
  // Get dictionary
  const dReq = getDictionary(7777, language as TValidLocale);

  // Total number of players
  const totalPlayersReq = db.select({ players: sql<string>`COUNT(*)` }).from(leaderboardView);

  const [dRes, isUserExistsRes, totalPlayersRes] = await Promise.all([
    dReq,
    isUserExistsReq,
    totalPlayersReq,
  ]);

  const d = dRes as THigherLowerGameDictionary;
  const isUserExists = parseInt(isUserExistsRes[0].count); // 1 - true, 0 - false
  const totalPlayers = parseInt(totalPlayersRes[0].players);
  const totalPlayersToDisplay = totalPlayers + 1;

  console.log('🚀 ~ isUserExists:', isUserExists)
  

  // if user exists. Get user above them and below them
  if (isUserExists === 1) {
    // Get user's position
    const playerPosition = await db
      .select({ place: leaderboardView.place })
      .from(leaderboardView)
      .where(eq(leaderboardView.uuid, playerId));
    console.log('playerPosition in a View:', playerPosition)

    const userPlace = playerPosition[0].place;

    if (userPlace > 4) {
      // If user is the last
      if (userPlace === totalPlayers) {
        const topPlayerData = await db
          .select()
          .from(leaderboardView)
          .where(eq(leaderboardView.place, userPlace - 1));

        const topPlayerPlace = topPlayerData[0].place;
        const topPlayerId = topPlayerData[0].uuid;

        const topPlayerReq = db.select().from(gameUser).where(eq(gameUser.uuid, topPlayerId));
        const topThreeReq = db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(3);
        const [topPlayer, topThree] = await Promise.all([topPlayerReq, topThreeReq]);
        return (
          <>
            <TextResults
              place={userPlace}
              heading={d.gameOver.heading}
              roundScoreFeedbackTexts={d.gameOver.roundScoreFeedback}
              topScoreFeedbackTexts={d.gameOver.topScoreFeedback}
              positiveFeedbackTexts={d.gameOver.positiveFeedback}
            />
            <div className='flex w-full flex-col items-center justify-start gap-2 overflow-y-scroll px-1'>
              {topThree.map((user, index) => (
                <PlayerCard
                  place={index + 1}
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
              {topPlayer.map((user, index) => (
                <PlayerCard
                  place={topPlayerPlace}
                  key={user.uuid}
                  name={user.playerName}
                  country={user.country}
                  highestScore={user.topScore}
                  hintsAvailable={user.hintsAvailable}
                  playerName={playerName}
                  playerCardTexts={d.leaderboard.playerCard}
                />
              ))}
              <PlayerRoundEndPosition place={userPlace} playerCardTexts={d.leaderboard.playerCard} />
              <p className='my-2 text-sm text-slate-300'>
                {d.leaderboard.totalPlayers}: {totalPlayers}
              </p>
            </div>
          </>
        );
      } else {
        // If user not the last player
        const topAndBottomPlayersIds = await db
          .select()
          .from(leaderboardView)
          .where(or(eq(leaderboardView.place, userPlace + 1), eq(leaderboardView.place, userPlace - 1)));

        const topPlayerPlace = topAndBottomPlayersIds[0].place;
        const topPlayerId = topAndBottomPlayersIds[0].uuid;
        const bottomPlayerId = topAndBottomPlayersIds[1].uuid;
        const bottomPlayerPlace = topAndBottomPlayersIds[1].place;

        const topPlayerReq = db.select().from(gameUser).where(eq(gameUser.uuid, topPlayerId));
        const bottomPlayerReq = db.select().from(gameUser).where(eq(gameUser.uuid, bottomPlayerId));
        const topThreeReq = db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(3);

        const [topPlayer, bottomPlayer, topThree] = await Promise.all([
          topPlayerReq,
          bottomPlayerReq,
          topThreeReq,
        ]);

        return (
          <>
            <TextResults
              place={userPlace}
              heading={d.gameOver.heading}
              roundScoreFeedbackTexts={d.gameOver.roundScoreFeedback}
              topScoreFeedbackTexts={d.gameOver.topScoreFeedback}
              positiveFeedbackTexts={d.gameOver.positiveFeedback}
            />
            <div className='flex w-full flex-col items-center justify-start gap-2 overflow-y-scroll px-1'>
              {topThree.map((user, index) => (
                <PlayerCard
                  place={index + 1}
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
              {topPlayer.map((user, index) => (
                <PlayerCard
                  place={topPlayerPlace}
                  key={user.uuid}
                  name={user.playerName}
                  country={user.country}
                  highestScore={user.topScore}
                  hintsAvailable={user.hintsAvailable}
                  playerName={playerName}
                  playerCardTexts={d.leaderboard.playerCard}
                />
              ))}
              <PlayerRoundEndPosition place={userPlace} playerCardTexts={d.leaderboard.playerCard} />
              {bottomPlayer.map((user, index) => (
                <PlayerCard
                  place={bottomPlayerPlace}
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
                {d.leaderboard.totalPlayers}: {totalPlayers}
              </p>
            </div>
          </>
        );
      }
    } else {
      // This shows when the player is in TOP 4
      const topThree = await db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(3);
      return (
        <>
          <TextResults
            place={userPlace}
            heading={d.gameOver.heading}
            roundScoreFeedbackTexts={d.gameOver.roundScoreFeedback}
            topScoreFeedbackTexts={d.gameOver.topScoreFeedback}
            positiveFeedbackTexts={d.gameOver.positiveFeedback}
          />
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <TopThree topThree={topThree} place={userPlace} playerCardTexts={d.leaderboard.playerCard} />
          </div>
          <p className='my-1 text-sm text-slate-300'>
            {d.leaderboard.totalPlayers}: {totalPlayers}
          </p>
        </>
      );
    }
  }

  // if doesn't exit. Get potential user above them and below them
  if (isUserExists === 0) {
    const playerAboveId = await db
      .select()
      .from(leaderboardView)
      .where(gte(leaderboardView.topScore, topScoreInt))
      .orderBy(desc(leaderboardView.place))
      .limit(1);
    console.log('playerAboveId:', playerAboveId)

    const topPlayerPlace = playerAboveId.length > 0 ? playerAboveId[0].place : 0;
    const userPlace = topPlayerPlace + 1;
    console.log('topPlayerPlace:', topPlayerPlace)
    console.log('userPlace:', userPlace)

    if (userPlace > 4) {
      // If user has score of 0, they are the last one
      if (topPlayerPlace === totalPlayers) {
        const topThreeReq = db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(3);
        const getPlayerAboveData = db.select().from(gameUser).where(eq(gameUser.uuid, playerAboveId[0].uuid));

        const [topThree, playerAbove] = await Promise.all([topThreeReq, getPlayerAboveData]);
        return (
          <>
            <TextResults
              place={userPlace}
              heading={d.gameOver.heading}
              roundScoreFeedbackTexts={d.gameOver.roundScoreFeedback}
              topScoreFeedbackTexts={d.gameOver.topScoreFeedback}
              positiveFeedbackTexts={d.gameOver.positiveFeedback}
            />
            <div className='flex w-full flex-col items-center justify-start gap-2 overflow-y-scroll px-1'>
              {topThree.map((user, index) => (
                <PlayerCard
                  place={index + 1}
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
                  place={topPlayerPlace}
                  key={user.uuid}
                  name={user.playerName}
                  country={user.country}
                  highestScore={user.topScore}
                  hintsAvailable={user.hintsAvailable}
                  playerName={playerName}
                  playerCardTexts={d.leaderboard.playerCard}
                />
              ))}
              <PlayerRoundEndPosition place={userPlace} playerCardTexts={d.leaderboard.playerCard} />
              <p className='my-2 text-sm text-slate-300'>
                {d.leaderboard.totalPlayers}: {totalPlayersToDisplay}
              </p>
            </div>
          </>
        );
      } else {
        // if user not the last one
        const bottomPlayerPlace = topPlayerPlace + 2;
        const playerBelowId = await db
          .select({ uuid: leaderboardView.uuid })
          .from(leaderboardView)
          .where(eq(leaderboardView.place, playerAboveId[0].place + 1));

        const topThreeReq = db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(3);
        const getPlayerAboveData = db.select().from(gameUser).where(eq(gameUser.uuid, playerAboveId[0].uuid));
        const getPlayerBelowData = db.select().from(gameUser).where(eq(gameUser.uuid, playerBelowId[0].uuid));

        const [topThree, playerAbove, playerBelow] = await Promise.all([
          topThreeReq,
          getPlayerAboveData,
          getPlayerBelowData,
        ]);

        return (
          <>
            <TextResults
              place={userPlace}
              heading={d.gameOver.heading}
              roundScoreFeedbackTexts={d.gameOver.roundScoreFeedback}
              topScoreFeedbackTexts={d.gameOver.topScoreFeedback}
              positiveFeedbackTexts={d.gameOver.positiveFeedback}
            />
            <div className='flex w-full flex-col items-center justify-start gap-2 overflow-y-scroll px-1'>
              {topThree.map((user, index) => (
                <PlayerCard
                  place={index + 1}
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
                  place={topPlayerPlace}
                  key={user.uuid}
                  name={user.playerName}
                  country={user.country}
                  highestScore={user.topScore}
                  hintsAvailable={user.hintsAvailable}
                  playerName={playerName}
                  playerCardTexts={d.leaderboard.playerCard}
                />
              ))}
              <PlayerRoundEndPosition place={userPlace} playerCardTexts={d.leaderboard.playerCard} />
              {playerBelow.map((user, index) => (
                <PlayerCard
                  place={bottomPlayerPlace}
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
                {d.leaderboard.totalPlayers}: {totalPlayersToDisplay}
              </p>
            </div>
          </>
        );
      }
    } else {
      // This shows when the player is in TOP 4
      const topThree = await db.select().from(gameUser).orderBy(desc(gameUser.topScore)).limit(3);
      return (
        <>
          <TextResults
            place={userPlace}
            heading={d.gameOver.heading}
            roundScoreFeedbackTexts={d.gameOver.roundScoreFeedback}
            topScoreFeedbackTexts={d.gameOver.topScoreFeedback}
            positiveFeedbackTexts={d.gameOver.positiveFeedback}
          />
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <TopThree topThree={topThree} place={userPlace} playerCardTexts={d.leaderboard.playerCard} />
          </div>
          <p className='my-1 text-sm text-slate-300'>
            {d.leaderboard.totalPlayers}: {totalPlayersToDisplay}
          </p>
        </>
      );
    }
  }
};

export default LeaderboardWithPlayer;
