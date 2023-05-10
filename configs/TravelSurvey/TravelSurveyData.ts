export const TravelSurveyData = [
  {
    id: 1,
    question: 'Are you 18 years or older?',
    answers: [
      {
        id: 1,
        text: 'Yes',
        styleVariant: 'success',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'No',
        styleVariant: 'danger',
        leadsTo: 'teenExit',
      },
    ],
  },
  {
    id: 2,
    question: 'How often do you travel for leisure?',
    answers: [
      {
        id: 1,
        text: 'Never',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Once a year',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: '2-3 times a year',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'More',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 3,
    question: 'How do you typically plan your travel?',
    answers: [
      {
        id: 1,
        text: 'Online research',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Travel agent',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Social media',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Friends and family',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 4,
    question: 'What factors are most important when deciding on a travel destination?',
    answers: [
      {
        id: 1,
        text: 'Price',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Safety',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Activities',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Weather',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 5,
        text: 'Cuisine',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 5,
    question: 'What type of accommodation do you prefer? ',
    answers: [
      {
        id: 1,
        text: 'Hotels',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Vacation rentals',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Resorts',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Hostels',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 5,
        text: 'Other',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 6,
    question: 'What is your preferred mode of transportation when traveling? ',
    answers: [
      {
        id: 1,
        text: 'Airplane',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Train',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Car',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Bus',
        styleVariant: 'luxurySecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 7,
    question: 'Have you ever booked a travel package?',
    answers: [
      {
        id: 1,
        text: 'Yes',
        styleVariant: 'success',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'No',
        styleVariant: 'danger',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 8,
    question: 'How do you budget for travel expenses?',
    answers: [
      {
        id: 1,
        text: 'Save up in advance',
        styleVariant: 'luxurySecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 2,
        text: 'Use a credit card',
        styleVariant: 'luxurySecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 3,
        text: 'Use a travel budgeting app',
        styleVariant: 'luxurySecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 4,
        text: 'Other',
        styleVariant: 'luxurySecondary',
        leadsTo: 'thankYou',
      },
    ],
  },
];
