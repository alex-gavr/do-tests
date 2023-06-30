'use client';
import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import { cn } from '@utils/cn';
import { ImageWithSkeleton } from '@components/ImageWithSkeleton';

interface ICountryCardProps {
  id: number;
  flag: string;
  name: string;
  population: number;
  iso2: string;
  range: Array<number> | undefined;
}
//  Flag_of_Sao_Tome_and_Principe
const CountryCard = ({
  id,
  flag,
  name,
  population: p,
  iso2,
  range = [567834, 34523951],
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
    </div>
  );
};

export default CountryCard;
