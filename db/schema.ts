import { InferModel } from 'drizzle-orm';
import { bigint, char, int, mediumint, mysqlEnum, mysqlTable, mysqlView, smallint, varchar } from 'drizzle-orm/mysql-core';

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
  leadsTo: mysqlEnum('leads_to', ['teenExit', 'nextQuestion', 'thankYou']).notNull(),
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
  styleVariant: mysqlEnum('style_variant', ['primary', 'secondary', 'success', 'danger', 'luxury', 'luxurySecondary']).notNull(),
  questionId: bigint('question_id', { mode: 'number' }).notNull(),
  leadsTo: mysqlEnum('leads_to', ['teenExit', 'nextQuestion', 'thankYou']).notNull(),
});

// Travel Survey

export const travelSurveyQuestions = mysqlTable('travel_survey_questions', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  questionEn: varchar('question_en', { length: 255 }).notNull(),
  questionId: varchar('question_id', { length: 255 }).notNull(),
});

export const travelSurveyAnswers = mysqlTable('travel_survey_answers', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  textEn: varchar('answer_en', { length: 100 }).notNull(),
  textId: varchar('answer_id', { length: 100 }).notNull(),
  styleVariant: mysqlEnum('style_variant', ['primary', 'secondary', 'success', 'danger', 'luxury', 'luxurySecondary']).notNull(),
  questionId: bigint('question_id', { mode: 'number' }).notNull(),
  leadsTo: mysqlEnum('leads_to', ['teenExit', 'nextQuestion', 'thankYou']).notNull(),
});

export const gameUser = mysqlTable('game_users', {
  uuid: varchar('uuid', { length: 36 }).notNull(),
  playerName: varchar('player_name', { length: 100 }).notNull(),
  country: varchar('country', { length: 50 }).notNull(),
  topScore: mediumint('top_score').notNull(),
  currentScore: mediumint('current_score').notNull(),
  hintsAvailable: mediumint('hints_available').notNull(),
  roundsPlayed: mediumint('rounds_played').notNull(),
});

export type TGameUser = InferModel<typeof gameUser>;

export const leaderboardView = mysqlView('leaderboard_view', {
  place: bigint('place', { mode: 'number' }).notNull().default(0),
  uuid: varchar('uuid', { length: 36 }).notNull(),
  topScore: mediumint('top_score').notNull(),
}).existing();

export const webVitalsNext = mysqlTable('web_vitals_next', {
  id: varchar('id', { length: 50 }).primaryKey(),
  geo: varchar('geo', { length: 10 }).default('??').notNull(),
  pathname: varchar('pathname', { length: 100 }).notNull(),
  offer: varchar('offer', { length: 10 }).notNull(),
  name: mysqlEnum('vital_name', ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB']),
  value: smallint('vital_value').notNull(),
  rating: mysqlEnum('rating', ['good', 'needs-improvement', 'poor']),
  delta: smallint('delta'),
  navigationType: mysqlEnum('navigation_type', ['navigate', 'reload', 'back-forward', 'back-forward-cache', 'prerender', 'restore']),
  lang: varchar('lang', { length: 10 }).default('??').notNull(),
  browserName: varchar('browser_name', { length: 100 }).notNull().default('??'),
  browserVersion: varchar('browser_version', { length: 100 }).notNull().default('??'),
  osName: varchar('os_name', { length: 100 }).notNull().default('??'),
  osVersion: varchar('os_version', { length: 100 }).notNull().default('??'),
  deviceVendor: varchar('device_vendor', { length: 100 }).notNull().default('??'),
  deviceType: varchar('device_type', { length: 100 }).notNull().default('??'),
});

export type TWebVitalsNext = InferModel<typeof webVitalsNext>;
