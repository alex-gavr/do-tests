export enum ActionsType {
  incrementStep = 'incrementStep',
  setSurveyLength = 'setSurveyLength',
}

export interface IIncrementStep {
  type: ActionsType.incrementStep;
}
export interface ISetSurveyLength {
  type: ActionsType.setSurveyLength;
  payload: {
    surveyLength: number;
  };
}

export type Actions = IIncrementStep | ISetSurveyLength;
