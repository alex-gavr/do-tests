interface IAnswer {
  answer: string;
  emoji: string;
  to: string;
}

export interface ICareerData {
  id: number;
  question: string;
  answers: Array<IAnswer>;
}

export interface ICompany {
  id: number;
  name: string;
  industry: string;
  averageSalary: string;
  topSalary: string;
}

export interface IEmojis {
  id: number;
  emoji: string;
  count: number;
}

export interface ICommentData {
  id: number;
  name: string;
  img: string;
  comment: string;
  time: string;
  emojis: Array<IEmojis>;
}
