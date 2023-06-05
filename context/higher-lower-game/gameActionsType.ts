import { ICard, TUser } from './gameStateType';

export enum GameActionTypes {
  // user
  setUser = 'setUser',
  setCurrentScore = 'setCurrentScore',
  // topScore
  setTopScore = 'setTopScore',
  // hintsAvailable
  setHintsAvailable = 'setHintsAvailable',
  // roundsPlayed
  setRoundsPlayed = 'setRoundsPlayed',
  // topCard
  setTopCard = 'setTopCard',
  // bottomCard
  setBottomCard = 'setBottomCard',
  // Picked Card
  setPickedCard = 'setPickedCard',
  // isAnswerCorrect
  setIsAnswerCorrect = 'setIsAnswerCorrect',
  // showAnswer
  setShowAnswer = 'setShowAnswer',
  // CountDown
  resetLostCountDown = 'resetLostCountDown',
  decrementLostCountDown = 'decrementLostCountDown',

  // secondsToAnswer
  setSecondsToAnswerEnabled = 'setSecondsToAnswerEnabled',
  setSecondsToAnswer = 'setSecondsToAnswer',
  resetSecondsToAnswer = 'resetSecondsToAnswer',
  decrementSecondsToAnswer = 'decrementSecondsToAnswer',

  // showHint
  setShowHint = 'setShowHint',
}

export interface ISetUser {
  type: GameActionTypes.setUser;
  payload: TUser;
}
export interface ISetTopScore {
  type: GameActionTypes.setTopScore;
  payload: TUser['topScore'];
}
export interface ISetCurrentScore {
  type: GameActionTypes.setCurrentScore;
  payload: TUser['currentScore'];
}
export interface ISetHintsAvailable {
  type: GameActionTypes.setHintsAvailable;
  payload: TUser['hintsAvailable'];
}
export interface ISetRoundsPlayed {
  type: GameActionTypes.setRoundsPlayed;
  payload: TUser['roundsPlayed'];
}
export interface ISetTopCard {
  type: GameActionTypes.setTopCard;
  payload: ICard;
}
export interface ISetBottomCard {
  type: GameActionTypes.setBottomCard;
  payload: ICard;
}
export interface ISetPickedCard {
  type: GameActionTypes.setPickedCard;
  payload: Omit<ICard, 'src'> | null;
}

export interface ISetShowAnswer {
  type: GameActionTypes.setShowAnswer;
  payload: boolean;
}
export interface ISetShowHint {
  type: GameActionTypes.setShowHint;
  payload: boolean;
}

export interface ISetIsAnswerCorrect {
  type: GameActionTypes.setIsAnswerCorrect;
  payload: boolean | null;
}

export interface IResetCountDown {
  type: GameActionTypes.resetLostCountDown;
}
export interface IDecrementCountDown {
  type: GameActionTypes.decrementLostCountDown;
}
export interface ISetSecondsToAnswerEnabled {
  type: GameActionTypes.setSecondsToAnswerEnabled;
  payload: boolean;
}
export interface ISetSecondsToAnswer {
  type: GameActionTypes.setSecondsToAnswer;
  payload: number;
}
export interface IResetSecondsToAnswer {
  type: GameActionTypes.resetSecondsToAnswer;
}
export interface IDecrementSecondsToAnswer {
  type: GameActionTypes.decrementSecondsToAnswer;
}

export type TGameActions =
  | ISetUser
  | ISetCurrentScore
  | ISetTopScore
  | ISetHintsAvailable
  | ISetRoundsPlayed
  | ISetTopCard
  | ISetBottomCard
  | ISetPickedCard
  | ISetShowAnswer
  | ISetShowHint
  | ISetIsAnswerCorrect
  | IResetCountDown
  | IDecrementCountDown
  | IResetSecondsToAnswer
  | IDecrementSecondsToAnswer
  | ISetSecondsToAnswerEnabled
  | ISetSecondsToAnswer;
