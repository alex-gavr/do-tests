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
}

type TStyleVariants = 'primary' | 'secondary' | 'success' | 'danger';
type IExitsTypes =
  | 'mainExit'
  | 'mainPops'
  | 'teenExit'
  | 'teenPops'
  | 'autoExit'
  | 'reverse'
  | 'nonUniqueExit'
  | 'accessAutoExit'
  | 'photoExit';

type TLeadsTo = 'nextQuestion' | 'exit' | 'thank-you' | 'customValue';

export interface IAnswer {
  id: number;
  text: string;
  styleVariant: TStyleVariants;
  leadsToExit: TLeadsTo;
  exits?: Array<IExitsTypes> | null;
}
export interface ISurveyText {
  id: number;
  question: string;
  answers: Array<IAnswer>;
}

export interface InitialState {
  currentStep: number;
  // currentSurveyText: ISurveyText;
  exits: IExits;
}
