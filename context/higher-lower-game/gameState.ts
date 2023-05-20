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
  topCard: {
    id: 146,
    name: 'Nigeria',
    iso2: 'NG',
    population: 195874740,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
  },
  bottomCard: {
    id: 184,
    name: 'South Africa',
    iso2: 'ZA',
    population: 57779622,
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
  },
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
