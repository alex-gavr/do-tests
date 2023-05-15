interface IPickedCard {
  id: number;
  name: string;
  iso2: string;
  population: number;
}

export interface IGameInitialState {
  isAnswerCorrect: boolean | null;
  countDown: number;
  pickedCard: IPickedCard | null;
  hint: {
    numberOfHintsAvailable: number;
    showHint: boolean;
  };
  showAnswer: boolean;
  score: number;
  highestScore: number;
}
