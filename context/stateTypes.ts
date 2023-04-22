interface IExits {
  mainExit: number;
  mainPops: number;
  teenExit: number;
  teenPops: number;
  autoExit: number;
  reverse: number;
  nonUniqueExit: number;
  accessAutoExit: number;
  photoExit: number;
  noThankYou: number;
  noThankYouPops: number;
}

type TStyleVariants = 'primary' | 'secondary' | 'success' | 'danger';
export type IExitsTypes =
  | 'mainExit'
  | 'mainPops'
  | 'teenExit'
  | 'teenPops'
  | 'autoExit'
  | 'reverse'
  | 'nonUniqueExit'
  | 'accessAutoExit'
  | 'photoExit'
  | 'noThankYou';

export type IButtonExits = Exclude<
  IExitsTypes,
  'autoExit' | 'reverse' | 'nonUniqueExit' | 'accessAutoExit' | 'photoExit'
>;

type TLeadsTo = 'teenExit' | 'nextQuestion' | 'thankYou';

export interface IAnswer {
  id: number;
  text: string;
  styleVariant: TStyleVariants;
  to: TLeadsTo;
}
export interface ISurveyText {
  id: number;
  question: string;
  answers: Array<IAnswer>;
}

export interface InitialState {
  currentStep: number;
  surveyLength: number;
  // currentSurveyText: ISurveyText;
  exits: IExits;
}
