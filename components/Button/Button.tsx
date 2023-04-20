'use client';
import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { IButtonExits } from '@context/stateTypes';
import makeExitUrl from '@utils/makeExitUrl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useContext } from 'react';
import mixpanel from '@lib/mixpanel';
import { setCookie } from 'cookies-next';

interface IButton {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  children?: React.ReactNode;
  disabled?: boolean;
  to: IButtonExits | 'beginSurvey' | 'nextQuestion' | 'thankYou';
}
const production = process.env.NODE_ENV === 'production';
const Button = ({ children, type, variant, disabled, to }: IButton) => {
  const { state, dispatch } = useContext(AppContext);
  const searchParams = useSearchParams();
  const param = searchParams.get('offer_id');
  const offerId = param ? `?offer_id=${param}` : '';

  const baseStyles =
    'min-w-[120px] flex flex-row items-center justify-center rounded px-4 py-4 cursor-pointer focus:outline-none focus:ring text-xs sm:text-base tracking-widest';

  const variantStyles = {
    primary: 'bg-indigo-800 text-slate-50 hover:bg-cyan-500',
    secondary:
      'border bg-indigo-50 border-neutral-800 bg-transparent text-gray-950 hover:bg-neutral-800 hover:text-slate-50',
    success: 'bg-emerald-600 text-neutral-50 hover:bg-emerald-300 hover:text-neutral-900',
    danger: 'bg-red-700 text-neutral-50 hover:bg-red-600 hover:text-neutral-50',
  };

  const variantStyle =
    variant === 'primary'
      ? variantStyles.primary
      : variant === 'secondary'
      ? variantStyles.secondary
      : variant === 'success'
      ? variantStyles.success
      : variant === 'danger'
      ? variantStyles.danger
      : null;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to === 'nextQuestion') {
      dispatch({ type: ActionsType.incrementStep });
      production &&
        mixpanel.track('question section', {
          step: state.currentStep,
          totalSteps: state.surveyLength,
          buttonText: children,
        });
    }
  };

  const handleClickLink = () => {
    if (to === 'beginSurvey') {
      production && mixpanel.track('Begin survey');
    }
    if (to === 'thankYou') {
      production &&
        mixpanel.track('question section', {
          step: state.currentStep,
          totalSteps: state.surveyLength,
          buttonText: children,
        });
    }
    if (to === 'mainExit') {
      production && mixpanel.track('lead');
      const WEEK = 60 * 60 * 24 * 7;
      setCookie('nonUnique', 'true', { path: '/', maxAge: WEEK, secure: true });
      const url = makeExitUrl(state.exits.mainExit);
      window.open(url, '_blank');
    }
    if (to === 'teenExit') {
      production && mixpanel.track('teenLead');
      const url = makeExitUrl(state.exits.teenExit);
      window.open(url, '_blank');
    }
  };
  const hrefPops =
    to === 'beginSurvey'
      ? `/survey${offerId}`
      : to === 'thankYou'
      ? `/thank-you${offerId}`
      : to === 'mainExit'
      ? makeExitUrl(state.exits.mainPops)
      : makeExitUrl(state.exits.teenPops);

  return (
    <>
      {to === 'nextQuestion' ? (
        <button
          type={type}
          onClick={handleClick}
          disabled={disabled}
          className={`${baseStyles} ${variantStyle}`}
        >
          {children}
        </button>
      ) : (
        <Link className={`${baseStyles} ${variantStyle}`} href={hrefPops} onClick={handleClickLink}>
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;
