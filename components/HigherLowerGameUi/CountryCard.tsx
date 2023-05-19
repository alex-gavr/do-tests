'use client';

import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { cn } from '@utils/cn';
import { randomIntFromInterval } from '@utils/randomInt';
import { hasCookie, setCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';

const cheers = [
  'Great job!',
  'You got it right!',
  'Correct answer!',
  'Well done!',
  "You're absolutely right!",
  "That's the correct answer!",
  'Nice!',
  'You nailed it! ',
  'Well played!',
  'Excellent!',
  'Your answer is correct!',
  'Spot on!',
  'You got it!',
  'Brilliant!',
  "That's the right answer!",
  'Nice work!',
  "You're on fire!",
];
interface ICountryCardProps {
  id: number;
  flag: string;
  name: string;
  population: number;
  iso2: string;
  index: number;
  isWin: boolean | null;
  range: Array<number>;
}
//  Flag_of_Sao_Tome_and_Principe
const CountryCard = ({ id, index, flag, name, population: p, iso2, isWin, range }: ICountryCardProps) => {
  const { gameState: state, gameDispatch: dispatch } = useAppContext();

  const population = p.toLocaleString();
  // const rangePercentage = randomIntFromInterval(50, 90);
  // const range = createPopulationRange(p, rangePercentage);
  const isPicked = id === state.pickedCard?.id ? true : false;
  const isAnswerCorrect = state.isAnswerCorrect;

  const handleClick = () => {
    if (!state.timerToAnswer.enabled) {
      dispatch({ type: GameActionTypes.setSecondsToAnswerEnabled, payload: true });
    }
    dispatch({
      type: GameActionTypes.setPickedCard,
      payload: {
        id,
        name,
        iso2,
        population: p,
        flag,
      },
    });
  };

  const cardBaseStyles =
    'relative flex aspect-[17/9] w-72 items-center justify-center overflow-hidden rounded-lg border-2 object-contain sm:w-80';
  const nameBaseStyles =
    'rounded-md border border-gray-100 bg-cyan-900 bg-opacity-50 bg-clip-padding p-4 backdrop-blur-md backdrop-filter';

  const borderStyles =
    isPicked && isAnswerCorrect === null
      ? 'border-4 border-yellow-400'
      : isPicked && isAnswerCorrect === true
      ? 'border-4 border-green-400'
      : isPicked && isAnswerCorrect === false
      ? 'border-4 border-red-400'
      : '';

  const n = useMemo(() => {
    return randomIntFromInterval(0, cheers.length - 1);
  }, []);
  const positiveFeedBack = cheers[n];

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div
        className={cn(cardBaseStyles, borderStyles, state.showAnswer ? 'pointer-events-none' : '')}
        onClick={handleClick}
      >
        <Image width={400} height={300} className='absolute object-cover' src={flag} alt='whatever' />
        <div className={cn(nameBaseStyles, borderStyles)}>
          <div className='flex h-full w-full items-center justify-center'>
            <p className='text-center text-xs uppercase tracking-widest text-white'>
              {state.showAnswer
                ? population
                : state.showHint
                ? range[0].toLocaleString() + ' - ' + range[1].toLocaleString()
                : name}
            </p>
          </div>
        </div>
      </div>
      {index !== 1 && (
        <p className='rounded-xl bg-emerald-300 px-4 py-2 text-xs  uppercase tracking-widest text-black'>
          {isAnswerCorrect === true
            ? positiveFeedBack
            : isAnswerCorrect === false
            ? 'incorrect 😢'
            : state.user.roundsPlayed <= 2
            ? 'pick top or bottom country ' + state.timerToAnswer.time
            : state.timerToAnswer.time}
        </p>
      )}
    </div>
  );
};

export default CountryCard;
