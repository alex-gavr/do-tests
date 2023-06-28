'use client';
import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { cn } from '@utils/cn';
import { randomIntFromInterval } from '@utils/randomInt';
import { useMemo } from 'react';
import { ImageWithSkeleton } from '@components/ImageWithSkeleton';
import { THigherLowerGameDictionary } from 'dictionaries/10702/en';

interface ICountryCardProps {
  id: number;
  flag: string;
  name: string;
  population: number;
  iso2: string;
  index: number;
  isWin: boolean | null;
  range: Array<number> | undefined;
  countryCardTexts: THigherLowerGameDictionary['welcome']['Countries']['CountryCard'];
}
//  Flag_of_Sao_Tome_and_Principe
const CountryCard = ({
  id,
  index,
  flag,
  name,
  population: p,
  iso2,
  isWin,
  range = [567834, 34523951],
  countryCardTexts,
}: ICountryCardProps) => {
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
    return randomIntFromInterval(0, countryCardTexts.positiveFeedback.length - 1);
  }, []);
  const positiveFeedBack = countryCardTexts.positiveFeedback[n];

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div
        className={cn(cardBaseStyles, borderStyles, state.showAnswer ? 'pointer-events-none' : '')}
        onClick={handleClick}
      >
        <ImageWithSkeleton
          className='pointer-events-none absolute object-cover'
          src={flag}
          alt='whatever'
          priority
        />
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
        <p className='rounded-xl bg-emerald-300 px-4 py-2 text-center  text-xs uppercase tracking-widest text-black'>
          {isAnswerCorrect === true
            ? positiveFeedBack
            : isAnswerCorrect === false
            ? countryCardTexts.lost
            : state.user.roundsPlayed < 2
            ? countryCardTexts.instructions
            : state.timerToAnswer.time}
          <br />
          {state.user.roundsPlayed < 2 &&
            isAnswerCorrect === null &&
            `${countryCardTexts.secondsLeft}: ` + state.timerToAnswer.time}
        </p>
      )}
    </div>
  );
};

export default CountryCard;
