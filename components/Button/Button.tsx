'use client';
import { useAppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { IButtonExits } from '@context/stateTypes';
import React, { ButtonHTMLAttributes } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@utils/cn';
import debug from '@utils/isDebug';
import getPrevParams from '@utils/getPrevParams';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import getIppIfErrorGetOnclick from '@utils/ipp/getIppIfErrorGetOnclick';
import { getExitLinkFromBackend } from '@utils/ipp/getExitLinkFromBackend';
import { getRandomZone } from '@utils/monetizationHelpers/getRandomZone';
import production from '@utils/isProd';

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
        luxury: 'bg-purple-900 text-slate-50 border border-purple-700 hover:bg-purple-800 hover:border-purple-600 hover:shadow-xl',
        luxurySecondary: 'border border-purple-800 text-slate-900 hover:bg-purple-900 hover:text-slate-50',
        backButton: 'border border-red-300 bg-neutral-900 text-gray-200 hover:bg-gray-950 hover:text-gray-100',
        lazada: 'bg-gradient-to-r from-red-600 to-amber-500 text-neutral-100 border border-neutral-400',
        lazadaSecondary: 'border bg-gradient-to-r from-sky-200 to-indigo-200 border-slate-500 text-neutral-900 uppercase',
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
      router.push(`/survey${oldSearchParams}`);
    }
    if (to === 'nextQuestion') {
      dispatch({ type: ActionsType.incrementStep });
    }
    if (to === 'teenExit') {
      // ONLY FOR SHOPPING SURVEY TESTING
      if (offerId === 9998) {
        const teenZoneMain = getRandomZone(state.exits.financeExits.ipp_teen);

        const teenExit = getExitLinkFromBackend(teenZoneMain);
        const teenPops = getExitLinkFromBackend(state.exits.financeExits.ipp_teen_pops);

        const [url, urlPops] = await Promise.all([teenExit, teenPops]);

        window.open(url, '_blank');
        window.location.replace(urlPops);
      } else {
        const teenExit = getIppIfErrorGetOnclick(state.exits.teenExitIpp, state.exits.teenExit);
        const teenPops = getIppIfErrorGetOnclick(state.exits.teenPopsIpp, state.exits.teenPops);

        const [url, urlPops] = await Promise.all([teenExit, teenPops]);

        window.open(url, '_blank');
        window.location.replace(urlPops);
      }
    }
    if (to === 'thankYou') {
      router.replace(`/thank-you${oldSearchParams}`);
    }

    if (to === 'mainExit') {
      if (offerId === 9998) {
        if (typeof window !== 'undefined' && production) {
          const url = new URL(window.location.href);
          const subId = url.searchParams.get('s');
          const conversionUrl = `https://ad.propellerads.com/conversion.php?visitor_id=${subId}`;
          if (navigator.sendBeacon) {
            navigator.sendBeacon(conversionUrl);
          } else {
            fetch(conversionUrl, { method: 'POST', keepalive: true });
          }
        } else {
          console.log(`conversion`);
        }
        const mainExitZone = getRandomZone(state.exits.financeExits.ipp_main_exit);

        const mainExit = getExitLinkFromBackend(mainExitZone);
        const mainPops = getExitLinkFromBackend(state.exits.financeExits.ipp_main_exit_pops);

        const [url, urlPops] = await Promise.all([mainExit, mainPops]);

        const WEEK = 60 * 60 * 24 * 7;
        !debug && setCookie('nonUnique', 'true', { path: '/', maxAge: WEEK, secure: true });
        window.open(url, '_blank');
        router.replace(urlPops);
      } else {
        const mainExit = getIppIfErrorGetOnclick(state.exits.mainExitIpp, state.exits.mainExit);
        const mainPops = getIppIfErrorGetOnclick(state.exits.mainPopsIpp, state.exits.mainPops);

        const [url, urlPops] = await Promise.all([mainExit, mainPops]);

        const WEEK = 60 * 60 * 24 * 7;
        !debug && setCookie('nonUnique', 'true', { path: '/', maxAge: WEEK, secure: true });
        window.open(url, '_blank');
        router.replace(urlPops);
      }
    }
  };

  return (
    <button type={type} onClick={handleClick} disabled={disabled} className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
