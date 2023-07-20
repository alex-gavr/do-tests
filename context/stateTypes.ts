export interface InitialState {
  currentStep: number;
  surveyLength: number;
  exits: IExits;
  notificationVisible: boolean | null;
  fullScreenImage: IImageFull;
  subId: string | null;
}

interface IExits {
  financeExits: IFinanceSurveyExits;
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
  mainExitIpp: number;
  mainPopsIpp: number;
  teenExitIpp: number;
  teenPopsIpp: number;
  nonUniqueIpp: number;
  noThankYouIpp: number;
  noThankYouPopsIpp: number;
  gameFinishIpp: number;
  cookiesDisabled: number;
  vignetteShowHint: number;
  vignetteGameStart: number;
  vignetteGameOver: number;
  vignetteGetHint: number;
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

export type IButtonExits = Exclude<IExitsTypes, 'autoExit' | 'reverse' | 'nonUniqueExit' | 'accessAutoExit' | 'photoExit'>;

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

interface IImageFull {
  visible: boolean;
  src: string | null;
}

interface IFinanceSurveyExits {
  ipp_main_exit: number[];
  ipp_main_exit_pops: number;
  onclick_main_exit: number[];
  onclick_main_exit_pops: number[];
  ipp_teen: number[];
  ipp_teen_pops: number;
  onclick_teen: number[];
  onclick_teen_pops: number;
  ipp_autoexit: number[];
  ipp_autoexit_pops: number;
  onclick_autoexit: number[];
  onclick_autoexit_pops: number[];
  ipp_not_unique: number[];
  ipp_not_unique_teen: number;
  onclick_not_unique: number[];
  onclick_not_unique_teen: number;
  onclick_back_zone: number;
  push_zone: number[];
  onclick_reverse_zone: number[];
}
