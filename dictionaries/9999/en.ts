import CountDown from "dictionaries/countDown/en";
import NotInterested from "dictionaries/notInterested/en";

const dictionary = {
  welcome: {
    title: 'Win a Dream Trip to Singapore!',
    button: 'Begin',
    paragraph: 'Complete our survey to get a chance to win a <strong>unforgettable</strong> trip',
  },
  thankYou: {
    title: 'Thank you!',
    description:
      'The guaranteed slot with an 8.74% chance of winning the luxury trip to Singapore is available below 👇',
    button: 'CLAIM',
  },
  countDown: CountDown,
  notInterested: NotInterested,
};

export default dictionary;

export type TTravelSurveyDictionary = typeof dictionary;
