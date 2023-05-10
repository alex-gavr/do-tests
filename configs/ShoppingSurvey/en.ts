import { TSurvey } from 'types/Survey';

export const shoppingSurveyDataEn: TSurvey = [
  {
    id: 1,
    question: 'How old are you?',
    answers: [
      {
        id: 1,
        text: 'under 18',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'teenExit',
      },
      {
        id: 2,
        text: '18-30',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: '31-45',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'over 45',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 2,
    question: 'What is your gender?',
    answers: [
      {
        id: 1,
        text: 'male',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'female',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 3,
    question: 'How often do you shop online on average?',
    answers: [
      {
        id: 1,
        text: 'Several times a week',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'One time a week',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'One time a month',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'One time in several months',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 4,
    question: 'What kind of products do you usually buy?',
    answers: [
      {
        id: 1,
        text: 'Health & Beauty',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Fashion products',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Household goods',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Electronic Devices',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 5,
    question: 'Which products is most enjoyable to shop for?',
    answers: [
      {
        id: 3,
        text: 'products for my living space', //Household goods
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'that reflect my personal style', // Fashion products
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 1,
        text: 'personal care or grooming', // Health & Beauty
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'that simplify my daily routine', // Electronics
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 6,
    question: 'Which products needs more attention or improvement?',
    answers: [
      {
        id: 3,
        text: 'environmentally harmful', //Household goods
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 2,
        text: 'outdated or inconvenient', // Fashion products
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 1,
        text: 'with safety risks', // Health & Beauty
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 4,
        text: 'too expensive', // Electronics
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
    ],
  },
];
