'use client';

import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import createPopulationRange from '@utils/HigherLowerGame/createPopulationRange';
import getQuestionMarks from '@utils/HigherLowerGame/createQuestionMarks';
import { cn } from '@utils/cn';
import { randomIntFromInterval } from '@utils/randomInt';
import Image from 'next/image';
import { useContext, useState } from 'react';

interface ICountryCardProps {
  id: number;
  src: string;
  name: string;
  population: number;
  iso2: string;
  index: number;
  isWin: boolean | null;
}
//  Flag_of_Sao_Tome_and_Principe
const CountryCard = ({ id, index, src, name, population: p, iso2, isWin }: ICountryCardProps) => {
  const { state, dispatch } = useContext(AppContext);
  //   const [isPicked, setIsPicked] = useState<boolean>(false);
  // const [showPopulation, setShowPopulation] = useState<boolean>(false);
  const population = p.toLocaleString();
  const rangePercentage = randomIntFromInterval(50, 90);
  const range = createPopulationRange(p, rangePercentage);
  const isPicked = id === state.higherLowerGame.pickedCard?.id ? true : false;
  const isAnswerCorrect = state.higherLowerGame.isAnswerCorrect;

  const handleClick = () => {
    dispatch({
      type: ActionsType.setPickedCard,
      payload: {
        id,
        name,
        iso2,
        population: p,
      },
    });
  };

  const cardBaseStyles =
    'relative flex aspect-[17/9] w-72 items-center justify-center overflow-hidden rounded-lg border-4 object-contain sm:w-80';
  const nameBaseStyles =
    'rounded-md border border-gray-100 bg-cyan-900 bg-opacity-50 bg-clip-padding p-4 backdrop-blur-md backdrop-filter';

  const borderStyles =
    isPicked && isAnswerCorrect === null
      ? 'border-yellow-400'
      : isPicked && isAnswerCorrect === true
      ? 'border-green-400'
      : isPicked && isAnswerCorrect === false
      ? 'border-red-400'
      : '';

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div
        className={cn(
          cardBaseStyles,
          borderStyles,
          state.higherLowerGame.showAnswer && isWin === false ? 'pointer-events-none' : '',
        )}
        onClick={handleClick}
      >
        <Image width={400} height={300} className='absolute object-cover' src={src} alt='whatever' />
        <div className={cn(nameBaseStyles, borderStyles)}>
          <div className='flex h-full w-full items-center justify-center'>
            <p className='text-xs uppercase tracking-widest text-white text-center'>
              {state.higherLowerGame.showAnswer
                ? population
                : state.higherLowerGame.hint.showHint
                ? range[0].toLocaleString() + ' - ' + range[1].toLocaleString()
                : name}
            </p>
          </div>
        </div>
      </div>
      {index !== 1 && (
        <p className='text-xs uppercase tracking-widest text-white'>
          {isAnswerCorrect === true ? 'correct 👍' : isAnswerCorrect === false ? 'incorrect 😢' : 'vs'}
        </p>
      )}
    </div>
  );
};

export default CountryCard;
