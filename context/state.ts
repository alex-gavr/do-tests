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
    mainExitIpp: 5972907,
    mainPopsIpp: 5972947,
    teenExitIpp: 5972992,
    teenPopsIpp: 5972993,
    nonUniqueIpp: 5973160,
    noThankYouIpp: 5973161,
    noThankYouPopsIpp: 5973162,
    gameFinishIpp: 6020461,
    cookiesDisabled: 6088166,
    vignetteShowHint: 5948180,
    vignetteGameOver: 5959144,
    vignetteGetHint: 5959137,
  },
  notificationVisible: null,
  fullScreenImage: {
    visible: false,
    src: null,
  },
  subId: null,
};

export default initialState;
