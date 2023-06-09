import { GameActionTypes, TGameActions } from './gameActionsType';
import { IGameInitialState } from './gameStateType';

const gameReducer = (state: IGameInitialState, action: TGameActions): IGameInitialState => {
  const { type } = action;

  switch (type) {
    case GameActionTypes.setUser: {
      const { payload } = action;

      return {
        ...state,
        user: payload,
      };
    }

    case GameActionTypes.setTopScore: {
      const { payload } = action;

      return {
        ...state,
        user: {
          ...state.user,
          topScore: payload,
        },
      };
    }
    case GameActionTypes.setCurrentScore: {
      const { payload } = action;

      return {
        ...state,
        user: {
          ...state.user,
          currentScore: payload,
        },
      };
    }

    case GameActionTypes.setHintsAvailable: {
      const { payload } = action;

      return {
        ...state,
        user: {
          ...state.user,
          hintsAvailable: payload,
        },
      };
    }
    case GameActionTypes.setRoundsPlayed: {
      const { payload } = action;

      return {
        ...state,
        user: {
          ...state.user,
          roundsPlayed: payload,
        },
      };
    }

    case GameActionTypes.setTopCard: {
      const { payload } = action;

      return {
        ...state,
        topCard: payload,
      };
    }
    case GameActionTypes.setBottomCard: {
      const { payload } = action;

      return {
        ...state,
        bottomCard: payload,
      };
    }

    case GameActionTypes.setPickedCard: {
      const { payload } = action;

      return {
        ...state,
        pickedCard: payload,
      };
    }

    case GameActionTypes.setShowAnswer: {
      const { payload } = action;

      return {
        ...state,
        showAnswer: payload,
      };
    }

    case GameActionTypes.setShowHint: {
      const { payload } = action;

      return {
        ...state,
        showHint: payload,
      };
    }

    case GameActionTypes.setIsAnswerCorrect: {
      const { payload } = action;

      return {
        ...state,
        isAnswerCorrect: payload,
      };
    }

    case GameActionTypes.resetLostCountDown: {
      return {
        ...state,
        lostCountDown: 3,
      };
    }
    case GameActionTypes.decrementLostCountDown: {
      if (state.lostCountDown === 0) {
        return state;
      }

      return {
        ...state,
        lostCountDown: state.lostCountDown - 1,
      };
    }

    case GameActionTypes.setSecondsToAnswerEnabled: {
      const { payload } = action;

      return {
        ...state,
        timerToAnswer: {
          ...state.timerToAnswer,
          enabled: payload,
        },
      };
    }
    case GameActionTypes.setSecondsToAnswer: {
      const { payload } = action;

      return {
        ...state,
        timerToAnswer: {
          ...state.timerToAnswer,
          time: payload,
        },
      };
    }

    case GameActionTypes.resetSecondsToAnswer: {
      if (state.user.roundsPlayed < 2) {
        return {
          ...state,
          timerToAnswer: {
            ...state.timerToAnswer,
            time: 25,
          },
        };
      } else {
        return {
          ...state,
          timerToAnswer: {
            ...state.timerToAnswer,
            time: 15,
          },
        };
      }
    }

    case GameActionTypes.decrementSecondsToAnswer: {
      if (state.timerToAnswer.time === 0) {
        return state;
      }

      return {
        ...state,
        timerToAnswer: {
          ...state.timerToAnswer,
          time: state.timerToAnswer.time - 1,
        },
      };
    }

    default:
      return state;
  }
};

export default gameReducer;
