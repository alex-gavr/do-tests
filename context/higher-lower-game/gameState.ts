import { IGameInitialState } from './gameStateType';

export const GameInitialState: IGameInitialState = {
  isAnswerCorrect: null,
  countDown: 3,
  pickedCard: null,
  showAnswer: false,
  hint: {
    numberOfHintsAvailable: 5,
    showHint: false,
  },
  score: 0,
  highestScore: 0,
};
