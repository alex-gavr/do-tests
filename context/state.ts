import { InitialState } from './stateTypes';

const initialState: InitialState = {
  currentStep: 1,
  surveyLength: 0,
  exits: {
    mainExit: 5874453,
    mainPops: 5874457,
    teenExit: 5874458,
    teenPops: 5874460,
    autoExit: 5874492,
    reverse: 5874494,
    backButton: 5908107,
    nonUniqueExit: 5874462,
    accessAutoExit: 5874496,
    photoExit: 5874497,
    noThankYou: 5892040,
    noThankYouPops: 5892041,
    motivatedYes: 5906970,
    motivatedYesPops: 5906971,
  },
  notificationVisible: null,
  fullScreenImage: {
    visible: false,
    src: null,
  },
  higherLowerGame: {
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
  },
};

export default initialState;
