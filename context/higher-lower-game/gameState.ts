import { IGameInitialState } from './gameStateType';

export const GameInitialState: IGameInitialState = {
  user: {
    uuid: '',
    playerName: '',
    country: '',
    topScore: 0,
    currentScore: 0,
    hintsAvailable: 0,
    roundsPlayed: 0,
  },
  topCard: null,
  bottomCard: null,
  pickedCard: null,
  isAnswerCorrect: null,
  showAnswer: false,
  lostCountDown: 3,
  timerToAnswer: {
    enabled: true,
    time: 25,
  },
  showHint: false,
  score: 0,
};
