export enum ActionsType {
  incrementStep = 'incrementStep',
  setSurveyLength = 'setSurveyLength',
  setNotificationVisibility = 'setNotificationVisibility',
  setImageFullScreen = 'setImageFullScreen',
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

export interface IIncrementStep {
  type: ActionsType.incrementStep;
}
export interface ISetSurveyLength {
  type: ActionsType.setSurveyLength;
  payload: {
    surveyLength: number;
  };
}
export interface ISetNotificationVisibility {
  type: ActionsType.setNotificationVisibility;
  payload: {
    visible: boolean;
  };
}
export interface ISetImageFullScreen {
  type: ActionsType.setImageFullScreen;
  payload: {
    visible: boolean;
    src: string | null;
  };
}
export interface ISetPickedCard {
  type: ActionsType.setPickedCard;
  payload: {
    id: number;
    name: string;
    iso2: string;
    population: number;
  } | null;
}
export interface ISetHint {
  type: ActionsType.setHint;
  payload: boolean;
}
export interface ISetDecrementNumberOfHintsAvailable {
  type: ActionsType.setDecrementNumberOfHintsAvailable;
}
export interface ISetIncrementNumberOfHintsAvailable {
  type: ActionsType.setIncrementNumberOfHintsAvailable;
}
export interface ISetNumberOfHintsAvailable {
  type: ActionsType.setNumberOfHintsAvailable;
  payload: number;
}
export interface ISetShowAnswer {
  type: ActionsType.setShowAnswer;
  payload: boolean;
}
export interface ISetIncrementScore {
  type: ActionsType.setIncrementScore;
}
export interface IResetScore {
  type: ActionsType.resetScore;
}
export interface ISetIncrementHighestScore {
  type: ActionsType.setIncrementHighestScore;
}
export interface ISetHighestScore {
  type: ActionsType.setHighestScore;
  payload: number;
}


export interface ISetIsAnswerCorrect {
  type: ActionsType.setIsAnswerCorrect;
  payload: boolean | null;
}

export interface IResetCountDown {
  type: ActionsType.resetCountDown;
}
export interface IDecrementCountDown {
  type: ActionsType.decrementCountDown;
}

export type Actions =
  | IIncrementStep
  | ISetSurveyLength
  | ISetNotificationVisibility
  | ISetImageFullScreen
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
