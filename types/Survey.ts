import { z } from 'zod';

const answerSchema = z.object({
  id: z.number(),
  text: z.string(),
  styleVariant: z.enum([
    'primary',
    'secondary',
    'success',
    'danger',
    'luxury',
    'luxurySecondary',
    'default',
    'successSecondary',
    'backButton',
    'lazada',
    'lazadaSecondary'
  ]),
  leadsTo: z.enum(['teenExit', 'nextQuestion', 'thankYou']),
});

export const questionSchema = z.object({
  id: z.number(),
  question: z.string(),
  answers: z.array(answerSchema),
});

export const surveySchema = z.array(questionSchema);

export type TSurvey = z.infer<typeof surveySchema>;
