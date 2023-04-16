import { IAnswer } from '@context/stateTypes';
import { InferModel } from 'drizzle-orm';
import { bigint, int, json, mysqlEnum, mysqlTable, serial, text, varchar } from 'drizzle-orm/mysql-core';

export const surveyQuestions = mysqlTable('survey_questions', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  question: varchar('question', { length: 255 }).notNull(),
});

export type TSurveyQuestion = InferModel<typeof surveyQuestions>;

export const surveyAnswers = mysqlTable('survey_answers', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  answer: varchar('answer', { length: 100 }).notNull(),
  styleVariant: mysqlEnum('style_variant', ['primary', 'secondary', 'success', 'danger']).notNull(),
  leadsToExit: mysqlEnum('leads_to_exit', ['nextQuestion', 'exit', 'thank-you', 'customValue']).notNull(),
  exits: mysqlEnum('exits', [
    'mainExit',
    'mainPops',
    'teenExit',
    'teenPops',
    'autoExit',
    'reverse',
    'nonUniqueExit',
    'accessAutoExit',
    'photoExit',
  ]),
  questionId: bigint('question_id', { mode: 'number' }).notNull(),
});

export type TSurveyAnswer = InferModel<typeof surveyAnswers>;

const surveyQuestionsWithAnswers = mysqlTable('survey_questions_with_answers', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  question: varchar('question', { length: 255 }).notNull(),
  answers: json('answers').$type<IAnswer[]>().notNull(),
});

type TSurveyResults = InferModel<typeof surveyQuestionsWithAnswers>;

export type TSurveyData = {
  results: Array<TSurveyResults>;
};
