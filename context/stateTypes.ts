interface IExits {
  mainExit: number;
  mainPops: number;
  teenExit: number;
  teenPops: number;
  autoExit: number;
  reverse: number;
  backButton: number;
  nonUniqueExit: number;
  accessAutoExit: number;
  photoExit: number;
  noThankYou: number;
  noThankYouPops: number;
  motivatedYes: number;
  motivatedYesPops: number;
}

type TStyleVariants = 'primary' | 'secondary' | 'success' | 'danger';
export type IExitsTypes =
  | 'mainExit'
  | 'mainPops'
  | 'teenExit'
  | 'teenPops'
  | 'autoExit'
  | 'reverse'
  | 'backButton'
  | 'nonUniqueExit'
  | 'accessAutoExit'
  | 'photoExit'
  | 'noThankYou'
  | 'motivatedYes'
  | 'noThankYouPops';

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
  exits: IExits;
  notificationVisible: boolean | null;
}
