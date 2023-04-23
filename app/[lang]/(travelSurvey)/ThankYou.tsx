import Button from '@components/Button/Button';
import { ILanguage } from './TravelSurvey';

const text = [
  {
    language: 'en',
    text: {
      title: 'Thank you!',
      description:
        'The guaranteed slot with an 8.74% chance of winning the luxury trip to Singapore is available below 👇',
      button: 'CLAIM',
    },
  },
  {
    language: 'id',
    text: {
      title: 'Terima kasih!',
      description:
        'Slot yang dijamin dengan peluang 8,74% untuk memenangkan perjalanan mewah ke Singapura tersedia di bawah 👇',
      button: 'KLAIM',
    },
  },
];

const TravelThankYou = ({ language }: ILanguage) => {
  
  const currentTexts = text.find((item) => item.language === language);

  return (
    <>
      <h1 className='text-4xl'>{currentTexts?.text.title}</h1>
      <p className='text-center text-lg'>{currentTexts?.text.description}</p>
      <Button to='mainExit' variant='luxury'>
        {currentTexts?.text.button}
      </Button>
    </>
  );
};

export default TravelThankYou;
