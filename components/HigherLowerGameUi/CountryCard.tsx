'use client';

import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import createPopulationRange from '@utils/HigherLowerGame/createPopulationRange';
import { cn } from '@utils/cn';
import { randomIntFromInterval } from '@utils/randomInt';
import Image from 'next/image';

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
  const { gameState: state, gameDispatch: dispatch } = useAppContext();
  //   const [isPicked, setIsPicked] = useState<boolean>(false);
  // const [showPopulation, setShowPopulation] = useState<boolean>(false);
  const population = p.toLocaleString();
  const rangePercentage = randomIntFromInterval(50, 90);
  const range = createPopulationRange(p, rangePercentage);
  const isPicked = id === state.pickedCard?.id ? true : false;
  const isAnswerCorrect = state.isAnswerCorrect;

  const handleClick = () => {
    dispatch({
      type: GameActionTypes.setPickedCard,
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
          state.showAnswer && isWin === false ? 'pointer-events-none' : '',
        )}
        onClick={handleClick}
      >
        <Image width={400} height={300} className='absolute object-cover' src={src} alt='whatever' />
        <div className={cn(nameBaseStyles, borderStyles)}>
          <div className='flex h-full w-full items-center justify-center'>
            <p className='text-xs uppercase tracking-widest text-white text-center'>
              {state.showAnswer
                ? population
                : state.hint.showHint
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
