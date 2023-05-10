import { ActionsType, Actions } from './actionsTypes';
import { InitialState } from './stateTypes';

const surveyReducer = (state: InitialState, action: Actions): InitialState => {
  const { type } = action;

  switch (type) {
    case ActionsType.incrementStep: {
      const { currentStep } = state;
      return {
        ...state,
        currentStep: currentStep + 1,
      };
    }
    case ActionsType.setSurveyLength: {
      const { surveyLength } = action.payload;

      return {
        ...state,
        surveyLength: surveyLength,
      };
    }
    case ActionsType.setNotificationVisibility: {
      const { visible } = action.payload;

      return {
        ...state,
        notificationVisible: visible,
      };
    }
    case ActionsType.setImageFullScreen: {
      const { payload } = action;

      return {
        ...state,
        fullScreenImage: {
          visible: payload.visible,
          src: payload.src
        },
      };
    }

    default:
      return state;
  }
};

export default surveyReducer;
