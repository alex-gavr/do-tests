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
import { IVignetteInitialState } from './vignette/vignetteStateType';
import { TVignetteActions } from './vignette/vignetteActionsType';
import { VignetteInitialState } from './vignette/vignetteState';
import vignetteReducer from './vignette/vignetteReducer';

interface AppContextType {
  surveyState: InitialState;
  surveyDispatch: React.Dispatch<Actions>;
  gameState: IGameInitialState;
  gameDispatch: React.Dispatch<TGameActions>;
  vignetteState: IVignetteInitialState;
  vignetteDispatch: React.Dispatch<TVignetteActions>;
}

const getSavedState = (initialState: IGameInitialState) => {
  if (typeof window !== 'undefined') {
    const savedState = localStorage.getItem('gameState');
    if (savedState !== null) {
      return JSON.parse(savedState);
    }
    return initialState;
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
  const [vignetteState, vignetteDispatch] = useReducer(vignetteReducer, VignetteInitialState);

  const store = useMemo(
    () => ({ surveyState, surveyDispatch, gameState, gameDispatch, vignetteState, vignetteDispatch }),
    [surveyState, surveyDispatch, gameState, gameDispatch, vignetteState, vignetteDispatch],
  );

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }, [gameState]);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider, useAppContext };
