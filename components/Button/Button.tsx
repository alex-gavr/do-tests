'use client';
import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { IButtonExits } from '@context/stateTypes';
import makeExitUrl from '@utils/makeExitUrl';
import React, { ButtonHTMLAttributes, useContext } from 'react';
import mixpanel from '@lib/mixpanel';
import { setCookie } from 'cookies-next';
import { useGetParam } from '@hooks/useGetParam';
import { useRouter } from 'next/navigation';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@utils/cn';

const buttonVariants = cva(
  'active:scale-95 tracking-widest min-w-[120px] inline-flex items-center justify-center rounded-md text-xs sm:text-base transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-800',
        primary: 'bg-indigo-800 text-slate-50 hover:bg-cyan-500',
        secondary:
          'border bg-indigo-50 border-neutral-800 bg-transparent text-gray-950 hover:bg-neutral-800 hover:text-slate-50',
        success: 'bg-emerald-600 text-neutral-50 hover:bg-emerald-300 hover:text-neutral-900',
        danger: 'bg-red-700 text-neutral-50 hover:bg-red-600 hover:text-neutral-50',
        luxury:
          'bg-purple-900 text-slate-50 border border-purple-700 hover:bg-purple-800 hover:border-purple-600 hover:shadow-xl',
        luxurySecondary: 'border border-purple-800 text-slate-900 hover:bg-purple-900 hover:text-slate-50',
        backButton: 'border border-red-500 border-opacity-40 bg-gray-900 text-gray-400 hover:bg-gray-950'
      },
      size: {
        default: 'p-4',
        sm: 'p-2',
        lg: 'px-8 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  to: IButtonExits | 'beginSurvey' | 'nextQuestion' | 'thankYou';
  isLoading?: boolean;
}
const production = process.env.NODE_ENV === 'production';
const Button = ({ children, type, variant, disabled, size, className, to, ...props }: IButtonProps) => {
  const { state, dispatch } = useContext(AppContext);
  const { valueString: offerId, valueNumber } = useGetParam('offer_id');
  const router = useRouter();

  const offerIdLinkParam = valueNumber === 'default' ? '' : `?offer_id=${valueNumber}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (to === 'beginSurvey') {
      production &&
        mixpanel.track('Begin survey', {
          offerId: offerId,
        });
      router.push(`/survey${offerIdLinkParam}`);
    }
    if (to === 'nextQuestion') {
      dispatch({ type: ActionsType.incrementStep });
      production &&
        mixpanel.track('question section', {
          step: state.currentStep,
          totalSteps: state.surveyLength,
          buttonText: children,
          offerId: offerId,
        });
    }
    if (to === 'teenExit') {
      production &&
        mixpanel.track('teenLead', {
          offerId: offerId,
        });
      const url = makeExitUrl(state.exits.teenExit);
      const urlPops = makeExitUrl(state.exits.teenPops);
      window.open(url, '_blank');
      window.location.replace(urlPops);
    }
    if (to === 'thankYou') {
      production &&
        mixpanel.track('question section', {
          step: state.currentStep,
          totalSteps: state.surveyLength,
          buttonText: children,
          offerId: offerId,
        });
      router.replace(`/thank-you${offerIdLinkParam}`);
    }
    if (to === 'mainExit') {
      production &&
        mixpanel.track('lead', {
          offerId: offerId,
        });
      const WEEK = 60 * 60 * 24 * 7;
      setCookie('nonUnique', 'true', { path: '/', maxAge: WEEK, secure: true });
      const url = makeExitUrl(state.exits.mainExit);
      const urlPops = makeExitUrl(state.exits.mainPops);
      window.open(url, '_blank');
      router.replace(urlPops);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
