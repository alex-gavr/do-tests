'use client';
import React, { createContext, useMemo, useReducer } from 'react';
import surveyReducer from './reducer';
import initialState from './state';
import { Actions } from './actionsTypes';
import { InitialState } from './stateTypes';

const AppContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(surveyReducer, initialState);
  const store = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
