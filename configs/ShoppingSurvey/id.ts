import { TSurvey } from 'types/Survey';

const shoppingSurveyDataId: TSurvey = [
  {
    id: 1,
    question: 'Berapa usiamu?',
    answers: [
      {
        id: 1,
        text: 'dibawah 18',
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
        text: 'lebih dari 45',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 2,
    question: 'Apa jenis kelaminmu?',
    answers: [
      {
        id: 1,
        text: 'pria',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'perempuan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 3,
    question: 'Rata-rata seberapa sering Anda berbelanja online?',
    answers: [
      {
        id: 1,
        text: 'Beberapa kali seminggu',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Sekali seminggu',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Satu kali dalam sebulan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Satu kali dalam beberapa bulan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 4,
    question: 'Produk apa yang biasa kamu beli?',
    answers: [
      {
        id: 1,
        text: 'Kesehatan & Kecantikan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Produk mode',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Perlengkapan rumah tangga',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Perangkat elektronik',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 5,
    question: 'Produk mana yang paling menyenangkan untuk berbelanja?',
    answers: [
      {
        id: 3,
        text: 'produk untuk ruang hidup saya',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'yang mencerminkan gaya pribadi saya',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 1,
        text: 'perawatan pribadi atau perawatan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'yang menyederhanakan rutinitas harian saya',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 6,
    question: 'Produk mana yang membutuhkan lebih banyak perhatian atau peningkatan?',
    answers: [
      {
        id: 3,
        text: 'berbahaya lingkungan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 2,
        text: 'usang atau tidak nyaman',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 1,
        text: 'dengan risiko keamanan',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
      {
        id: 4,
        text: 'terlalu mahal',
        styleVariant: 'lazadaSecondary',
        leadsTo: 'thankYou',
      },
    ],
  },
];

export default shoppingSurveyDataId;