type TSurveyAnswers = {
  id: number;
  text: string;
  styleVariant: 'primary' | 'secondary' | 'success' | 'danger' | 'luxury' | 'luxurySecondary';
  leadsTo: 'teenExit' | 'nextQuestion' | 'thankYou';
};

interface ISurveyData {
  id: number;
  question: string;
  answers: Array<TSurveyAnswers>;
}

export const CareerSurveyData: ISurveyData[] = [
  {
    id: 1,
    question: 'Are you 18 or older?',
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
    question: 'How satisfied are you with your current job overall?',
    answers: [
      {
        id: 1,
        text: 'Satisfied 👍',
        styleVariant: 'success',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Neutral 😐',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Dissatisfied 👎',
        styleVariant: 'danger',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 3,
    question: 'In which industry do you currently work?',
    answers: [
      {
        id: 1,
        text: 'Healthcare 🏥',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Finance 🏦',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Education 📚',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Retail 🛍️',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 5,
        text: 'Technology 🧑‍💻',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 6,
        text: 'Other',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 4,
    question: 'Which factor is the most important to you in a career?',
    answers: [
      {
        id: 1,
        text: 'Salary 💰',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Work-life balance ⚖️',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Job security 🔓',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Career growth 📈',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 5,
    question: 'Which skill do you think is the most important for success?',
    answers: [
      {
        id: 1,
        text: 'Technical skills 🧑‍💻',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Communication 🗣️',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Flexibility 🤗',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Leadership 💪',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 5,
        text: 'Other',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 6,
    question: 'How do you stay current with developments and trends?',
    answers: [
      {
        id: 1,
        text: 'Workshops 💼',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: 'Reading 📚',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Webinars 🧑‍💻',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 4,
        text: 'Networking 🗣️',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 5,
        text: 'Other',
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 7,
    question: 'How important is work-life balance to you?',
    answers: [
      {
        id: 1,
        text: 'Important 👍',
        styleVariant: 'success',
        leadsTo: 'nextQuestion',
      },
      {
        id: 2,
        text: "I don't care 😐",
        styleVariant: 'primary',
        leadsTo: 'nextQuestion',
      },
      {
        id: 3,
        text: 'Not important 👎',
        styleVariant: 'danger',
        leadsTo: 'nextQuestion',
      },
    ],
  },
  {
    id: 8,
    question: 'Are you ready for a career change right now?',
    answers: [
      {
        id: 1,
        text: 'Yes 👍',
        styleVariant: 'success',
        leadsTo: 'thankYou',
      },
      {
        id: 2,
        text: "I don't know 😐",
        styleVariant: 'primary',
        leadsTo: 'thankYou',
      },
      {
        id: 3,
        text: 'No 👎',
        styleVariant: 'danger',
        leadsTo: 'thankYou',
      },
    ],
  },
];
