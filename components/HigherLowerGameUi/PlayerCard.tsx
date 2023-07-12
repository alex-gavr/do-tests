import { TrophyIcon } from '@heroicons/react/24/solid';
import { cn } from '@utils/cn';
import { THigherLowerGameDictionary } from '@i18n/10702/en';

interface IPlayerStatsProps {
  name: string;
  country: string;
  highestScore: number;
  hintsAvailable: number;
  playerName: string;
  place: number;
  playerCardTexts: THigherLowerGameDictionary['leaderboard']['playerCard'];
}

const PlayerCard = ({
  name,
  country,
  highestScore,
  hintsAvailable,
  playerName,
  place,
  playerCardTexts,
}: IPlayerStatsProps) => {
  const n = name.toLocaleLowerCase();
  const p = playerName.toLocaleLowerCase();
  const user = n === p ? true : false;

  return (
    <div
      className={cn(
        'flex w-full max-w-2xl flex-row items-center justify-between gap-1 rounded-sm bg-neutral-800 px-2 py-2 capitalize',
        user && 'bg-neutral-50',
        // index === 0 && 'bg-yellow-300',
        // index === 1 && 'bg-slate-300',
        // index === 2 && 'bg-amber-900',
      )}
    >
      <div className='flex flex-row items-center justify-center'>
        <span
          className={cn(
            place !== 1 && 'ml-1 mr-3 rounded-md bg-slate-950 px-2 py-1 text-xs text-white',
            place === 1 && 'ml-1 mr-2',
            place === 2 && 'bg-slate-300 text-black',
            place === 3 && 'bg-amber-900',
          )}
        >
          {place === 1 ? <TrophyIcon className=' h-7 w-7 text-yellow-300' /> : place}
        </span>
        <div className='flex flex-col items-start justify-start gap-1'>
          <p className={cn('text-xs text-white', user && 'text-black')}>
            {user ? name + ` (${playerCardTexts.you})` : name}
          </p>
          <p className={cn('text-xs text-neutral-400', user && 'text-neutral-500')}>{country}</p>
        </div>
      </div>
      <div className='flex flex-col items-end justify-end gap-1'>
        <p className={cn('text-xs text-green-400', user && 'text-green-600')}>
          {playerCardTexts.topScore}: {highestScore}
        </p>
        <p className={cn('text-[0.7rem] text-neutral-400', user && 'text-neutral-500')}>
          {playerCardTexts.hints}: {hintsAvailable}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
