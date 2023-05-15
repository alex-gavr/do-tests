import { GameActionTypes, TGameActions } from './gameActionsType';
import { IGameInitialState } from './gameStateType';

const gameReducer = (state: IGameInitialState, action: TGameActions): IGameInitialState => {
  const { type } = action;

  switch (type) {
    case GameActionTypes.setPickedCard: {
      const { payload } = action;

      return {
        ...state,
        pickedCard: payload,
      };
    }
    case GameActionTypes.setHint: {
      const { payload } = action;

      return {
        ...state,
        hint: {
          ...state.hint,
          showHint: payload,
        },
      };
    }
    case GameActionTypes.setDecrementNumberOfHintsAvailable: {
      // const { payload } = action;

      return {
        ...state,
        hint: {
          ...state.hint,
          numberOfHintsAvailable: state.hint.numberOfHintsAvailable - 1,
        },
      };
    }
    case GameActionTypes.setIncrementNumberOfHintsAvailable: {
      // const { payload } = action;
      return {
        ...state,
        hint: {
          ...state.hint,
          numberOfHintsAvailable: state.hint.numberOfHintsAvailable + 1,
        },
      };
    }
    case GameActionTypes.setNumberOfHintsAvailable: {
      const { payload } = action;

      return {
        ...state,
        hint: {
          ...state.hint,
          numberOfHintsAvailable: payload,
        },
      };
    }

    case GameActionTypes.setShowAnswer: {
      const { payload } = action;

      return {
        ...state,
        showAnswer: payload,
      };
    }
    case GameActionTypes.setIncrementScore: {
      // const { payload } = action;

      return {
        ...state,
        score: state.score + 1,
      };
    }
    case GameActionTypes.resetScore: {
      // const { payload } = action;

      return {
        ...state,
        score: 0,
      };
    }
    case GameActionTypes.setIncrementHighestScore: {
      // const { payload } = action;

      return {
        ...state,
        highestScore: state.highestScore + 1,
      };
    }
    case GameActionTypes.setHighestScore: {
      const { payload } = action;

      return {
        ...state,
        highestScore: payload,
      };
    }
    case GameActionTypes.setIsAnswerCorrect: {
      const { payload } = action;

      return {
        ...state,
        isAnswerCorrect: payload,
      };
    }
    case GameActionTypes.resetCountDown: {
      // const { payload } = action;

      return {
        ...state,
        countDown: 3,
      };
    }
    case GameActionTypes.decrementCountDown: {
      // const { payload } = action;

      return {
        ...state,
        countDown: state.countDown - 1,
      };
    }

    default:
      return state;
  }
};

export default gameReducer;
