export const runtime = 'edge';
import { userSchema } from '@context/higher-lower-game/gameStateType';
import { gameUser } from '@db/schema';
import { connect } from '@planetscale/database';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function POST(request: NextRequest, response: NextResponse) {
  const { ip, headers } = request;
  const auth = headers.get('Authorization');

  if (auth !== process.env.NEXT_PUBLIC_API_ROUTE_SECRET) {
    return NextResponse.json({ response: 'Unauthorized, fuck off', status: 401 });
  }
  const userData = await request.json();

  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME_FRANKFURT,
    password: process.env.DATABASE_PASSWORD_FRANKFURT,
  };

  const connection = connect(config);

  const db = drizzle(connection);

  try {
    const user = userSchema.parse(userData);
    // Check if we already have this user
    const checkIfUserExists = await db
      .select()
      .from(gameUser)
      .where(eq(gameUser.uuid, user.uuid));

    // If not push new user to DB
    if (checkIfUserExists.length === 0) {
      const result = await db.insert(gameUser).values(user);
      const success = result.rowsAffected === 1;

      return NextResponse.json({ response: `user added ${success}`, status: 200 });
    }

    // If exist
    if (checkIfUserExists.length > 0) {

      // Check Hints changed
      if (user.hintsAvailable !== checkIfUserExists[0].hintsAvailable) {
        // update hintsAvailable
        const updateHints = await db
          .update(gameUser)
          .set({ hintsAvailable: user.hintsAvailable })
          .where(eq(gameUser.uuid, user.uuid));

        const success = updateHints.rowsAffected === 1;

        console.log(`user's hints changes: ${success}`);
        
      }
      //  Check if TopScore changed
      if (user.topScore !== checkIfUserExists[0].topScore) {
        const updateTopScore = await db
          .update(gameUser)
          .set({ topScore: user.topScore })
          .where(eq(gameUser.uuid, user.uuid));

        const success = updateTopScore.rowsAffected === 1;

        console.log(`user's top score has changes: ${success}`);
        // return NextResponse.json({ response: `user's top score has changes: ${success}`, status: 200 });
      }
      //  Check if RoundsPlayed changed
      if (user.roundsPlayed !== checkIfUserExists[0].roundsPlayed) {
        const updateTopScore = await db
          .update(gameUser)
          .set({ roundsPlayed: user.roundsPlayed })
          .where(eq(gameUser.uuid, user.uuid));

        const success = updateTopScore.rowsAffected === 1;

        console.log(`user's rounds played has changes: ${success}`);
        // return NextResponse.json({ response: `user's top score has changes: ${success}`, status: 200 });
      }

      return NextResponse.json({ response: 'success', status: 200 });
    }
  } catch (error) {
    if (error instanceof ZodError) {
      console.log('User Schema is wrong', error);
      return NextResponse.json({ response: 'User Schema is wrong', status: 400 });
    }
    console.log(error);
    return NextResponse.json({ response: 'Fatal Error, Try again', status: 500 });
  }
}
