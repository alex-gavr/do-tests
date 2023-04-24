import Button from '@components/Button/Button';
import { ValidLocale, getTranslator } from 'i18n';
import { ILanguage } from './TravelSurvey';

const TravelThankYou = async ({ language }: ILanguage) => {
  const t = await getTranslator(language as ValidLocale);

  return (
    <>
      <h1 className='text-4xl'>{t.ThankYou.title}</h1>
      <p className='text-center text-lg'>{t.ThankYou.description}</p>
      <Button to='mainExit' variant='luxury'>
        {t.ThankYou.button}
      </Button>
    </>
  );
};

export default TravelThankYou;
