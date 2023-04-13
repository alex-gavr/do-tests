'use client';
import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import React, { useContext } from 'react';

interface IButton {
  type: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'agree' | 'disagree';
  children?: React.ReactNode;
  disabled?: boolean;
}
const Button = ({ children, type, variant, disabled }: IButton) => {
  const { state, dispatch } = useContext(AppContext);
  const baseClassName =
    'flex flex-row items-center justify-center rounded px-4 py-4 cursor-pointer focus:outline-none focus:ring text-xs sm:text-base';

  const variantClassName =
    variant === 'primary'
      ? 'bg-neutral-800 text-slate-50 hover:bg-cyan-500'
      : variant === 'secondary'
      ? 'border border-neutral-800 bg-transparent text-gray-950 hover:bg-neutral-800 hover:text-slate-50'
      : variant === 'agree'
      ? 'bg-emerald-600 text-neutral-50 hover:bg-emerald-300 hover:text-neutral-900'
      : variant === 'disagree'
      ? 'bg-red-700 text-neutral-50 hover:bg-red-600 hover:text-neutral-50'
      : null;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: ActionsType.incrementStep });
  };

  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        disabled={disabled}
        className={`${baseClassName} ${variantClassName}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
