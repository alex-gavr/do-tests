import PlayerCard from '@components/HigherLowerGameUi/PlayerCard';
import { TrophyIcon } from '@heroicons/react/24/solid';
import { leaderboard } from '@lib/leaderboard';
import generateRandomName from '@utils/HigherLowerGame/generateRandomName';
import { randomIntFromInterval } from '@utils/randomInt';
import { cookies } from 'next/dist/client/components/headers';
import Link from 'next/link';

interface IPageProps {}

const players = [
  {
    id: 1,
    name: 'name',
    country: 'Nigeria',
    highestScore: 30,
    hintsAvailable: 50,
  },
  {
    id: 2,
    name: 'name2',
    country: 'Nigeria',
    highestScore: 30,
    hintsAvailable: 50,
  },
];

const Page = ({}: IPageProps) => {
  const cookie = cookies();
  const playerName = cookie.get('playerName')?.value ?? '?????';
  function generateData(): any[] {
    const countries = [
      'USA',
      'Canada',
      'Australia',
      'Brazil',
      'Mexico',
      'Thailand',
      'India',
      'South Africa',
      'Indonesia',
      'South Korea',
      'Nigeria',
      'Ghana',
      'Kenya',
      'Malaysia',
      'Philippines',
      'Vietnam',
    ];
    const data = [];

    for (let i = 1; i <= 50; i++) {
      const id = i;
      const name = generateRandomName();
      const country = countries[Math.floor(Math.random() * countries.length)];
      const highestScore = randomIntFromInterval(10, 102);
      const hintsAvailable = randomIntFromInterval(2, 40);

      const obj = { id, name, country, highestScore, hintsAvailable };
      data.push(obj);
    }

    data.sort((a, b) => b.highestScore - a.highestScore);
    return data;
  }

  console.log(generateData());

  return (
    <div className='flex min-h-screen flex-col items-center gap-4 bg-slate-900 px-2 py-4 relative'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <h1 className='text-center text-4xl text-cyan-300'>Leaderboard</h1>
        <TrophyIcon className='h-8 w-8 text-yellow-300' />
      </div>
      <p className='text-center text-lg text-neutral-200'>Legends of the game</p>
      {leaderboard.map((player) => (
        <PlayerCard
          key={player.id}
          name={player.name}
          country={player.country}
          highestScore={player.highestScore}
          hintsAvailable={player.hintsAvailable}
          playerName={playerName}
        />
      ))}
      <Link className='fixed bottom-2 left-2 text-neutral-200 bg-blue-700 z-10 px-3 py-2 text-xs rounded-md' href={'/game-over'}>back</Link>
    </div>
  );
};

export default Page;
