import { IAnswer } from '@context/stateTypes';
import { InferModel } from 'drizzle-orm';
import { bigint, int, json, mediumint, mysqlEnum, mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';

export const surveyQuestions = mysqlTable('survey_questions', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  question: varchar('question', { length: 255 }).notNull(),
  offer_id: mediumint('offer_id').notNull(),
});

export type TSurveyQuestion = InferModel<typeof surveyQuestions>;

export const surveyAnswers = mysqlTable('survey_answers', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  text: varchar('answer', { length: 100 }).notNull(),
  styleVariant: mysqlEnum('style_variant', ['primary', 'secondary', 'success', 'danger']).notNull(),
  questionId: bigint('question_id', { mode: 'number' }).notNull(),
  leadsTo: mysqlEnum('leads_to', ['teenExit', 'nextQuestion','thankYou']).notNull(),
  offer_id: mediumint('offer_id').notNull(),
});

export type TSurveyAnswer = InferModel<typeof surveyAnswers>;
