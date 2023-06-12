import { InferModel } from 'drizzle-orm';
import { bigint, int, mediumint, mysqlEnum, mysqlTable, mysqlView, varchar } from 'drizzle-orm/mysql-core';

// DEFAULT SURVEY

export const defaultSurveyQuestions = mysqlTable('default_survey_questions', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  question: varchar('question', { length: 255 }).notNull(),
});

export type TSurveyQuestions = InferModel<typeof defaultSurveyQuestions>;

export const defaultSurveyAnswers = mysqlTable('default_survey_answers', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  text: varchar('answer', { length: 100 }).notNull(),
  styleVariant: mysqlEnum('style_variant', [
    'primary',
    'secondary',
    'success',
    'danger',
    'luxury',
    'luxurySecondary',
  ]).notNull(),
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
  styleVariant: mysqlEnum('style_variant', [
    'primary',
    'secondary',
    'success',
    'danger',
    'luxury',
    'luxurySecondary',
  ]).notNull(),
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
  styleVariant: mysqlEnum('style_variant', [
    'primary',
    'secondary',
    'success',
    'danger',
    'luxury',
    'luxurySecondary',
  ]).notNull(),
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
