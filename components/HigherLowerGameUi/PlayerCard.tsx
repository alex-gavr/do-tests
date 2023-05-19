import { cn } from '@utils/cn';

interface IPlayerStatsProps {
  name: string;
  country: string;
  highestScore: number;
  hintsAvailable: number;
  playerName: string;
}

const PlayerCard = ({ name, country, highestScore, hintsAvailable, playerName }: IPlayerStatsProps) => {
  const n = name.toLocaleLowerCase();
  const p = playerName.toLocaleLowerCase();
  const user = n === p ? true : false;

  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-between gap-1 rounded-sm bg-neutral-800 px-2 py-2 capitalize max-w-2xl',
        user ? 'bg-neutral-50 ' : '',
      )}
    >
      <div className='flex flex-col items-start justify-start'>
        <p className={cn('text-sm text-white', user ? 'text-black' : '')}>{user ? name + ' (you)' : name}</p>
        <p className={cn('text-sm text-neutral-400', user ? 'text-neutral-500' : '')}>{country}</p>
      </div>
      <div className='flex flex-col items-start justify-end gap-1'>
        <p className={cn('text-sm text-green-400', user ? 'text-green-600' : '')}>
          Top Score: {highestScore}
        </p>
        <p className={cn('text-xs text-neutral-400', user ? 'text-neutral-500' : '')}>
          Hints Available: {hintsAvailable}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
