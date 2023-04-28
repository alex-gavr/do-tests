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
    initialReverse: 5906732,
    nonUniqueExit: 5874462,
    accessAutoExit: 5874496,
    photoExit: 5874497,
    noThankYou: 5892040,
    noThankYouPops: 5892041,
    motivatedYes: 5906970,
    motivatedYesPops: 5906971,
  },
  notificationVisible: null,
};

export default initialState;
