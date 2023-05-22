'use client';
import { useAppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { IButtonExits } from '@context/stateTypes';
import makeExitUrl from '@utils/makeExitUrl';
import React, { ButtonHTMLAttributes } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@utils/cn';
import debug from '@utils/isDebug';
import getPrevParams from '@utils/getPrevParams';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { sendEvent } from '@utils/sendEvent';
import production from '@utils/isProd';
import { TrackEvents } from 'types/TrackEvents';
import getExitLinkWithMediation from '@utils/ipp/getExitLinkWithMediation';

const buttonVariants = cva(
  'active:scale-95 tracking-widest min-w-[120px] inline-flex items-center justify-center rounded-md text-xs sm:text-base transition-colors duration-500 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-slate-900 text-white hover:bg-slate-800',
        primary: 'bg-indigo-800 text-slate-50 hover:bg-cyan-500',
        secondary: 'border bg-indigo-50 border-neutral-800 bg-transparent text-gray-950',
        success: 'bg-emerald-600 text-neutral-50 hover:bg-emerald-300 hover:text-neutral-900',
        successSecondary: 'border border-emerald-600 text-neutral-900',
        danger: 'bg-red-700 text-neutral-50 hover:bg-red-600 hover:text-neutral-50',
        luxury:
          'bg-purple-900 text-slate-50 border border-purple-700 hover:bg-purple-800 hover:border-purple-600 hover:shadow-xl',
        luxurySecondary: 'border border-purple-800 text-slate-900 hover:bg-purple-900 hover:text-slate-50',
        backButton:
          'border border-red-300 bg-neutral-900 text-gray-200 hover:bg-gray-950 hover:text-gray-100',
        lazada: 'bg-gradient-to-r from-red-600 to-amber-500 text-neutral-100 border border-neutral-400',
        lazadaSecondary: 'border bg-neutral-100 border-slate-500 text-neutral-900',
      },
      size: {
        default: 'p-4',
        sm: 'p-2',
        lg: 'px-6 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type IButtonStyles = VariantProps<typeof buttonVariants>;
export type IButtonVariants = IButtonStyles['variant'];
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  to: IButtonExits | 'beginSurvey' | 'nextQuestion' | 'thankYou';
  isLoading?: boolean;
}

const Button = ({ children, type, variant, disabled, size, className, to, ...props }: IButtonProps) => {
  const { surveyState: state, surveyDispatch: dispatch } = useAppContext();
  const router = useRouter();
  const { offerId } = useClientSearchParams();
  const oldSearchParams = getPrevParams();

  const handleClick = async () => {
    if (to === 'beginSurvey') {
      if (production && !debug) {
        const eventData = {
          track: TrackEvents.beginSurveys,
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }
      router.push(`/survey${oldSearchParams}`);
    }
    if (to === 'nextQuestion') {
      dispatch({ type: ActionsType.incrementStep });

      if (production && !debug) {
        const eventData = {
          track: TrackEvents.questionSection,
          step: state.currentStep,
          totalSteps: state.surveyLength,
          buttonText: children?.toString(),
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }
    }
    if (to === 'teenExit') {
      if (production && !debug) {
        const eventData = {
          track: TrackEvents.teenLead,
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }
      const teenExit = getExitLinkWithMediation(state.exits.teenExitIpp, state.exits.teenExit);
      const teenPops = getExitLinkWithMediation(state.exits.teenPopsIpp, state.exits.teenPops);

      const [url, urlPops] = await Promise.all([teenExit, teenPops]);

      // const url = makeExitUrl(state.exits.teenExit);
      // const urlPops = makeExitUrl(state.exits.teenPops);
      window.open(url, '_blank');
      window.location.replace(urlPops);
    }
    if (to === 'thankYou') {
      if (production && !debug) {
        const eventData = {
          track: TrackEvents.questionSection,
          step: state.currentStep,
          totalSteps: state.surveyLength,
          buttonText: children?.toString(),
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }

      router.replace(`/thank-you${oldSearchParams}`);
    }
    if (to === 'mainExit') {
      if (production && !debug) {
        const eventData = {
          track: TrackEvents.lead,
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }
      const mainExit = getExitLinkWithMediation(state.exits.mainExitIpp, state.exits.mainExit);
      const mainPops = getExitLinkWithMediation(state.exits.mainPopsIpp, state.exits.mainPops);

      const [url, urlPops] = await Promise.all([mainExit, mainPops]);

      // console.log(url, urlPops);

      const WEEK = 60 * 60 * 24 * 7;
      !debug && setCookie('nonUnique', 'true', { path: '/', maxAge: WEEK, secure: true });
      // const url = makeExitUrl(state.exits.mainExit);
      // const urlPops = makeExitUrl(state.exits.mainPops);
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
