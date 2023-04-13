import { ActionsType, Actions } from './actionsTypes';
import { InitialState } from './stateTypes';

const surveyReducer = (state: InitialState, action: Actions): InitialState => {
  const { type } = action;

  switch (type) {
    case ActionsType.setStep: {
      const currentStep = state.step;
      return {
        ...state,
        step: currentStep + 1,
      };
    }

    case ActionsType.incrementStep: {
      const currentStep = state.step;
      return {
        ...state,
        step: currentStep + 1,
      };
    }

    default:
      return state;
  }
};

export default surveyReducer;