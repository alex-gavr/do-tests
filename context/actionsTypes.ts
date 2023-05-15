export enum ActionsType {
  incrementStep = 'incrementStep',
  setSurveyLength = 'setSurveyLength',
  setNotificationVisibility = 'setNotificationVisibility',
  setImageFullScreen = 'setImageFullScreen',
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
export interface ISetImageFullScreen {
  type: ActionsType.setImageFullScreen;
  payload: {
    visible: boolean;
    src: string | null;
  };
}

export type Actions = IIncrementStep | ISetSurveyLength | ISetNotificationVisibility | ISetImageFullScreen;
