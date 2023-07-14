'use client';
// import { getDictionary } from '@i18n/i18n';
// import { TValidLocale, TValidOffer } from 'config';
import MainExitButton from './MainExitButton';
import { TDefaultDictionary } from '@i18n/0/en';

interface IDefaultThankYouProps {
  t: TDefaultDictionary;
}

const DefaultThankYou = ({ t }: IDefaultThankYouProps) => {
  return (
    <>
      <div
        className={
          ' z-20 flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-4 md:gap-8 rounded-md bg-neutral-900 px-2 py-4'
        }
      >
        <h1 className={'text-2xl font-bold uppercase tracking-widest md:text-4xl text-slate-100'}>{t.Offer.Title}</h1>
        <p className={' text-center text-sm sm:text-base md:text-xl text-slate-300'}>
          {t.Offer.result.p1}
          <span className={'uppercase text-emerald-400'}> {t.Offer.result.p2} </span>
          {t.Offer.result.p3}
        </p>
        <div className={'flex flex-col items-start justify-start gap-4'}>
          <p className={'text-sm sm:text-base md:text-lg text-slate-300'}>
            {t.Offer.p1.p1}
            <span className={'uppercase text-emerald-400'}> {t.Offer.p1.p2} </span>
            {t.Offer.p1.p3}
          </p>
          <p className={' text-sm sm:text-base md:text-lg text-slate-300'}>
            {t.Offer.p2.p1}
            <span className={'text-emerald-400'}> {t.Offer.p2.p2} </span>
            {t.Offer.p2.p3}
          </p>
          <p className={' text-sm sm:text-base md:text-lg text-slate-300'}>{t.Offer.p3}</p>
          <p className={' text-sm sm:text-base md:text-lg text-slate-300'}>
            I{t.Offer.p4.p1}
            <span className={'text-emerald-400'}>{t.Offer.p4.p2}</span>
            {t.Offer.p4.p3}
          </p>
          <p className={' text-sm sm:text-base md:text-lg text-slate-300'}>{t.Offer.p5}</p>
        </div>
        <MainExitButton text={t.Offer.button} />
      </div>
      <div className='rain' />
    </>
  );
};

export default DefaultThankYou;
