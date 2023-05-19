import { ICountry } from '@lib/countries';
import { z } from 'zod';

export interface ICard extends Omit<ICountry, 'iso3'> {}

export const userSchema = z.object({
  uuid: z.string(),
  playerName: z.string(),
  country: z.string(),
  topScore: z.number(),
  hintsAvailable: z.number(),
  roundsPlayed: z.number()
});

export type TUser = z.infer<typeof userSchema>

interface ITimerToAnswer {
  enabled: boolean;
  time: number;
}
export interface IGameInitialState {
  user: TUser;
  topCard: ICard;
  bottomCard: ICard;
  pickedCard: Omit<ICard, 'src'> | null;
  isAnswerCorrect: boolean | null;
  showAnswer: boolean;
  lostCountDown: number;
  timerToAnswer: ITimerToAnswer;
  showHint: boolean;
  score: number;
}
