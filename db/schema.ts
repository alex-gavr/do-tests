import { InferModel } from 'drizzle-orm';
import { bigint, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

// DEFAULT SURVEY

export const defaultSurveyQuestions = mysqlTable('default_survey_questions', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  question: varchar('question', { length: 255 }).notNull(),
});

export type TSurveyQuestions = InferModel<typeof defaultSurveyQuestions>;


export const defaultSurveyAnswers = mysqlTable('default_survey_answers', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  text: varchar('answer', { length: 100 }).notNull(),
  styleVariant: mysqlEnum('style_variant', ['primary', 'secondary', 'success', 'danger', 'luxury', 'luxurySecondary']).notNull(),
  questionId: bigint('question_id', { mode: 'number' }).notNull(),
  leadsTo: mysqlEnum('leads_to', ['teenExit', 'nextQuestion','thankYou']).notNull(),
});

export type TSurveyAnswers = InferModel<typeof defaultSurveyAnswers>;


// CAREER SURVEY

export const careerSurveyQuestions = mysqlTable('career_survey_questions', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  question: varchar('question', { length: 255 }).notNull(),
});

export const careerSurveyAnswers = mysqlTable('career_survey_answers', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  text: varchar('answer', { length: 100 }).notNull(),
  styleVariant: mysqlEnum('style_variant', ['primary', 'secondary', 'success', 'danger']).notNull(),
  questionId: bigint('question_id', { mode: 'number' }).notNull(),
  leadsTo: mysqlEnum('leads_to', ['teenExit', 'nextQuestion','thankYou']).notNull(),
});


// Travel Survey

export const travelSurveyQuestions = mysqlTable('travel_survey_questions', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  question: varchar('question', { length: 255 }).notNull(),
});

export const travelSurveyAnswers = mysqlTable('travel_survey_answers', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  text: varchar('answer', { length: 100 }).notNull(),
  styleVariant: mysqlEnum('style_variant', ['luxury', 'luxurySecondary', 'success', 'danger']).notNull(),
  questionId: bigint('question_id', { mode: 'number' }).notNull(),
  leadsTo: mysqlEnum('leads_to', ['teenExit', 'nextQuestion','thankYou']).notNull(),
});

