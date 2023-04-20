// import { NextRequest, NextResponse } from 'next/server';

// import { connect } from '@planetscale/database';
// import { drizzle } from 'drizzle-orm/planetscale-serverless';
// import { surveyAnswers, surveyQuestions } from '@db/schema';
// import { eq } from 'drizzle-orm';

// // import { surveyAnswers, surveyQuestions } from './schema';
// // import { IAnswer } from '@context/stateTypes';
// // import { eq, sql } from 'drizzle-orm';

// const connection = connect({
//   host: process.env.DATABASE_HOST,
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
// });

// export async function GET(request: NextRequest, response: NextResponse) {
//   const { searchParams } = request.nextUrl;
//   const param = searchParams.get('offer_id');

//   const offerId = parseInt(param ? param : '2025');

//   try {
//     const db = drizzle(connection);
//     const offerQuestions = await db
//       .select()
//       .from(surveyQuestions)
//       .where(eq(surveyQuestions.offer_id, offerId));

//     const offerAnswers = await db
//       .select()
//       .from(surveyAnswers)
//       .where(eq(surveyAnswers.offer_id, offerId));
    
//     return NextResponse.json({ offerQuestions, offerAnswers }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
