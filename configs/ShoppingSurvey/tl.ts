import { TSurvey } from 'types/Survey';

export const shoppingSurveyDataTl: TSurvey = [
  {
    id: 1,
    question: 'Ilang taon ka na?',
    answers: [
      {
        id: 1,
        text: 'sa ilalim ng 18',
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
        text: 'Mahigit sa 45',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 2,
    question: 'Ano ang iyong kasarian?',
    answers: [
      {
        id: 1,
        text: 'lalaki',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'babae',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 3,
    question: 'Gaano kadalas ka mamimili online sa average?',
    answers: [
      {
        id: 1,
        text: 'Maraming beses sa isang linggo',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Isang beses sa isang linggo',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Isang beses sa isang buwan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Isang beses sa ilang buwan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 4,
    question: 'Anong uri ng mga produkto ang karaniwang binibili mo?',
    answers: [
      {
        id: 1,
        text: 'Kalusugan at Kagandahan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Mga produktong fashion',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Gamit pangbahay',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Mga elektronikong aparato',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 5,
    question: 'Aling mga produkto ang pinakakasiya-siyang mamili?',
    answers: [
      {
        id: 3,
        text: 'mga produkto para sa aking puwang sa buhay',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Iyon ay sumasalamin sa aking personal na istilo',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 1,
        text: 'personal na pangangalaga o pag -aasawa',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Na simple ang aking pang -araw -araw na gawain',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 6,
    question: 'Aling mga produkto ang nangangailangan ng higit na pansin o pagpapabuti?',
    answers: [
      {
        id: 3,
        text: 'nakakapinsala sa kapaligiran',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 2,
        text: 'lipas na o hindi maginhawa',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 1,
        text: 'na may mga panganib sa kaligtasan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 4,
        text: 'masyadong mahal',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
    ],
  },
];

export default shoppingSurveyDataTl;
