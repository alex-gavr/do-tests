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
          src: payload.src,
        },
      };
    }
    case ActionsType.setPickedCard: {
      const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          pickedCard: payload,
        },
      };
    }
    case ActionsType.setHint: {
      const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          hint: {
            ...state.higherLowerGame.hint,
            showHint: payload,
          },
        },
      };
    }
    case ActionsType.setDecrementNumberOfHintsAvailable: {
      // const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          hint: {
            ...state.higherLowerGame.hint,
            numberOfHintsAvailable: state.higherLowerGame.hint.numberOfHintsAvailable - 1,
          },
        },
      };
    }
    case ActionsType.setIncrementNumberOfHintsAvailable: {
      // const { payload } = action;
      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          hint: {
            ...state.higherLowerGame.hint,
            numberOfHintsAvailable: state.higherLowerGame.hint.numberOfHintsAvailable + 1,
          },
        },
      };
    }
    case ActionsType.setNumberOfHintsAvailable: {
      const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          hint: {
            ...state.higherLowerGame.hint,
            numberOfHintsAvailable: payload,
          },
        },
      };
    }

    case ActionsType.setShowAnswer: {
      const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          showAnswer: payload,
        },
      };
    }
    case ActionsType.setIncrementScore: {
      // const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          score: state.higherLowerGame.score + 1,
        },
      };
    }
    case ActionsType.resetScore: {
      // const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          score: 0,
        },
      };
    }
    case ActionsType.setIncrementHighestScore: {
      // const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          highestScore: state.higherLowerGame.highestScore + 1,
        },
      };
    }
    case ActionsType.setHighestScore: {
      const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          highestScore: payload,
        },
      };
    }
    case ActionsType.setIsAnswerCorrect: {
      const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          isAnswerCorrect: payload,
        },
      };
    }
    case ActionsType.resetCountDown: {
      // const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          countDown: 3,
        },
      };
    }
    case ActionsType.decrementCountDown: {
      // const { payload } = action;

      return {
        ...state,
        higherLowerGame: {
          ...state.higherLowerGame,
          countDown: state.higherLowerGame.countDown - 1,
        },
      };
    }

    default:
      return state;
  }
};

export default surveyReducer;
