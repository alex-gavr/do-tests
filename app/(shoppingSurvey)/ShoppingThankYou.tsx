import Button from '@components/Button/Button';
import ThumbUp from '@components/ThumbUp';
import { ValidLocale, getTranslator } from 'i18n';
import Image from 'next/image';

interface IShoppingThankYouProps {
  language: ValidLocale;
}

const ShoppingThankYou = async ({ language }: IShoppingThankYouProps) => {
  const t = await getTranslator(language as ValidLocale);

  return (
    <>
      <ThumbUp />
      <div className='z-20'>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl'>{t.ShoppingSurvey.thankYou.title}</h1>
        <p className='mt-2 text-center'>{t.ShoppingSurvey.thankYou.paragraph}</p>
      </div>
      <Button to='mainExit' variant='lazada' className='font-bold z-30'>
        {t.ShoppingSurvey.thankYou.button}
      </Button>
      <Image
        src='/images/board.svg'
        alt='whatever'
        className='absolute bottom-0 w-80 sm:w-96'
        width={500}
        height={300}
      />
    </>
  );
};

export default ShoppingThankYou;
