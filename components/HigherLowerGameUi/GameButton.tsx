'use client';

import { cn } from '@utils/cn';
import { ButtonHTMLAttributes } from 'react';

interface IGameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

const GameButton = ({ type, className, children, disabled, variant, onClick }: IGameButtonProps) => {
  const defaultStyles =
    'active:scale-95 p-4 tracking-widest min-w-[250px] inline-flex items-center justify-center rounded-md text-xs sm:text-sm transition-colors duration-500 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none disabled:bg-gray-500';

  const primaryStyle = 'bg-cyan-300 text-neutral-900';
  const secondaryStyle = 'border border-cyan-300 text-neutral-100';

  const activeVariant = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(defaultStyles, activeVariant, className)}
    >
      {children}
    </button>
  );
};

export default GameButton;
