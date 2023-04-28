export enum ActionsType {
  incrementStep = 'incrementStep',
  setSurveyLength = 'setSurveyLength',
  setNotificationVisibility = 'setNotificationVisibility',
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
export interface ISetNotificationVisibility {
  type: ActionsType.setNotificationVisibility;
  payload: {
    visible: boolean;
  };
}

export type Actions = IIncrementStep | ISetSurveyLength | ISetNotificationVisibility;
