interface IExits {
  mainExit: string | null;
  mainPops: string | null;
  teenExit: string | null;
  teenPops: string | null;
  autoExit: string | null;
  autoPops: string | null;
  reverse: string | null;
  nonUniqueExit: string | null;
  nonUniquePops: string | null;
  accessAutoExit: string | null;
  datingExit: string | null;
}

export interface InitialState {
  step: number;
  exits: IExits;
}
