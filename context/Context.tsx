'use client';
import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import surveyReducer from './reducer';
import initialState from './state';
import { Actions } from './actionsTypes';
import { InitialState } from './stateTypes';
import { IGameInitialState } from './higher-lower-game/gameStateType';
import { TGameActions } from './higher-lower-game/gameActionsType';
import gameReducer from './higher-lower-game/gameReducer';
import { GameInitialState } from './higher-lower-game/gameState';

interface AppContextType {
  surveyState: InitialState;
  surveyDispatch: React.Dispatch<Actions>;
  gameState: IGameInitialState;
  gameDispatch: React.Dispatch<TGameActions>;
}

const getSavedState = (initialState: IGameInitialState) => {
  if (typeof window !== 'undefined') {
    try {
      const savedState = localStorage.getItem('gameState');
      if (savedState !== null) {
        return JSON.parse(savedState);
      }
      return initialState;
    } catch (error) {
      console.error(error);
    }
  }
};

const AppContext = createContext<AppContextType>({} as AppContextType);

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [surveyState, surveyDispatch] = useReducer(surveyReducer, initialState);
  const [gameState, gameDispatch] = useReducer(gameReducer, getSavedState(GameInitialState));

  const store = useMemo(
    () => ({ surveyState, surveyDispatch, gameState, gameDispatch }),
    [surveyState, surveyDispatch, gameState, gameDispatch],
  );

  useEffect(() => {
    try {
      localStorage.setItem('gameState', JSON.stringify(gameState));
    } catch (error) {
      console.error(error);
    }
  }, [gameState]);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider, useAppContext };
