export const DefaultSurveyData = [
  {
    id: 1,
    question: 'What is your gender?',
    answers: [
      {
        id: 1,
        text: 'Man',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Woman',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 2,
    question: 'How old are you?',
    answers: [
      {
        id: 1,
        text: 'less than 18 years',
        styleVariant: 'secondary',
        leadsTo: 'teenExit',
      },
      {
        id: 2,
        text: '18-29 years',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: '30-49 years',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: '50-80 years',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 3,
    question: 'How do you make a living?',
    answers: [
      {
        id: 1,
        text: 'I work',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'I am self-employed',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'I am unemployed',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'I am a pensioner',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 4,
    question: 'What is your average income per year?',
    answers: [
      {
        id: 1,
        text: 'less than $10,000',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: '$10,000-$30,000',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: '$30,000-$50,000',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'more than $50,000',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 5,
    question: 'What is your financial goal for the next 5 years?',
    answers: [
      {
        id: 1,
        text: 'Go on a family holiday',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Buy a supercar',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Buy an apartment or a house',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Start my own business',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 6,
    question: 'How much would you invest right now to get closer to your financial goal much faster?',
    answers: [
      {
        id: 1,
        text: 'less than $250',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: '$250-$500',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: '$500-$1000',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'more than $1000',
        styleVariant: 'secondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 7,
    question: 'Do you have any experience in Bitcoin trading?',
    answers: [
      {
        id: 1,
        text: 'No, I have never heard of it',
        styleVariant: 'secondary',
        leadsTo: 'thankYou',
      },
      {
        id: 2,
        text: 'No, but I want to try',
        styleVariant: 'secondary',
        leadsTo: 'thankYou',
      },
      {
        id: 3,
        text: 'Yes, I am a beginner',
        styleVariant: 'secondary',
        leadsTo: 'thankYou',
      },
      {
        id: 4,
        text: 'Yes, I do it professionally',
        styleVariant: 'secondary',
        leadsTo: 'thankYou',
      },
    ],
  },
];
