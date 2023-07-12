import Button from '@components/Button/Button';
import ThumbUp from '@components/ThumbUp';
import { TLanguage, TValidLocale } from 'config';
import { TShoppingSurveyDictionary } from '@i18n/9998/en';
import { getDictionary } from '@i18n/i18n';
import Image from 'next/image';

interface IShoppingThankYouProps extends TLanguage {}

const ShoppingThankYou = async ({ language }: IShoppingThankYouProps) => {
  const d = await getDictionary(9998, language as TValidLocale) as TShoppingSurveyDictionary;

  return (
    <>
      <ThumbUp />
      <div className='z-20'>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl'>{d.thankYou.title}</h1>
        <p className='mt-2 text-center'>{d.thankYou.paragraph}</p>
      </div>
      <Button to='mainExit' variant='lazada' className='z-30 font-bold'>
        {d.thankYou.button}
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
