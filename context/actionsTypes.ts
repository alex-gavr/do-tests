export enum ActionsType {
  setStep = 'setStep',
  incrementStep = 'incrementStep',
}

export interface ISetStep {
  type: ActionsType.setStep;
  payload: null;
}
export interface IIncrementStep {
  type: ActionsType.incrementStep;
  payload: null;
}

export type Actions = ISetStep | IIncrementStep;
