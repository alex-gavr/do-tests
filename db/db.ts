import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { surveyAnswers, surveyQuestions } from './schema';
import { IAnswer } from '@context/stateTypes';
import { InferModel, eq, sql } from 'drizzle-orm';

const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

const db = drizzle(connection);

export const surveyData = db
  .select({
    id: surveyQuestions.id,
    question: surveyQuestions.question,
    answers: sql<IAnswer[]>`
    JSON_ARRAYAGG(
      JSON_OBJECT(
        'id', ${surveyAnswers.id}, 
        'text', ${surveyAnswers.answer}, 
        'styleVariant', ${surveyAnswers.styleVariant}, 
        'leadsToExit', ${surveyAnswers.leadsToExit}, 
        'exits', ${surveyAnswers.exits}
        ))`,
  })
  .from(surveyQuestions)
  .leftJoin(surveyAnswers, eq(surveyQuestions.id, surveyAnswers.questionId))
  .groupBy(surveyQuestions.id);
