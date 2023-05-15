export enum GameActionTypes {
  setPickedCard = 'setPickedCard',
  setHint = 'setHint',
  setDecrementNumberOfHintsAvailable = 'setDecrementNumberOfHintsAvailable',
  setIncrementNumberOfHintsAvailable = 'setIncrementNumberOfHintsAvailable',
  setNumberOfHintsAvailable = 'setNumberOfHintsAvailable',
  setShowAnswer = 'setShowAnswer',
  setIncrementScore = 'setIncrementScore',
  resetScore = 'resetScore',
  setIncrementHighestScore = 'setIncrementHighestScore',
  setHighestScore = 'setHighestScore',
  setIsAnswerCorrect = 'setIsAnswerCorrect',
  resetCountDown = 'resetCountDown',
  decrementCountDown = 'decrementCountDown',
}

export interface ISetPickedCard {
  type: GameActionTypes.setPickedCard;
  payload: {
    id: number;
    name: string;
    iso2: string;
    population: number;
  } | null;
}
export interface ISetHint {
  type: GameActionTypes.setHint;
  payload: boolean;
}
export interface ISetDecrementNumberOfHintsAvailable {
  type: GameActionTypes.setDecrementNumberOfHintsAvailable;
}
export interface ISetIncrementNumberOfHintsAvailable {
  type: GameActionTypes.setIncrementNumberOfHintsAvailable;
}
export interface ISetNumberOfHintsAvailable {
  type: GameActionTypes.setNumberOfHintsAvailable;
  payload: number;
}
export interface ISetShowAnswer {
  type: GameActionTypes.setShowAnswer;
  payload: boolean;
}
export interface ISetIncrementScore {
  type: GameActionTypes.setIncrementScore;
}
export interface IResetScore {
  type: GameActionTypes.resetScore;
}
export interface ISetIncrementHighestScore {
  type: GameActionTypes.setIncrementHighestScore;
}
export interface ISetHighestScore {
  type: GameActionTypes.setHighestScore;
  payload: number;
}

export interface ISetIsAnswerCorrect {
  type: GameActionTypes.setIsAnswerCorrect;
  payload: boolean | null;
}

export interface IResetCountDown {
  type: GameActionTypes.resetCountDown;
}
export interface IDecrementCountDown {
  type: GameActionTypes.decrementCountDown;
}

export type TGameActions =
  | ISetPickedCard
  | ISetHint
  | ISetDecrementNumberOfHintsAvailable
  | ISetIncrementNumberOfHintsAvailable
  | ISetShowAnswer
  | ISetIncrementScore
  | IResetScore
  | ISetIncrementHighestScore
  | ISetHighestScore
  | ISetIsAnswerCorrect
  | IResetCountDown
  | IDecrementCountDown
  | ISetNumberOfHintsAvailable;
