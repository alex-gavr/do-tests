import Countries from '@components/HigherLowerGameUi/Countries';
import Scores from '@components/HigherLowerGameUi/Scores';
import { IVignette } from '@context/vignette/vignetteStateType';
import countries from '@lib/countries';
import generateRandomName from '@utils/HigherLowerGame/generateRandomName';
import getInitialCountryPair from '@utils/HigherLowerGame/getRandomCountriesPair';
import getVignetteData from '@utils/Vignette/getVignetteData';
import { cookies } from 'next/dist/client/components/headers';
import { redirect } from 'next/navigation';

interface IPageProps {}


const countriesPair = getInitialCountryPair(countries);
const Page = async ({}: IPageProps) => {
  const cookiesList = cookies();
  const lost = cookiesList.has('lost');
  if (lost) {
    redirect('/game-over');
  }

  const vignetteData = await getVignetteData();

  const highestScore = cookiesList.get('highestScore')?.value ?? '0';
  const hints = cookiesList.get('hints')?.value ?? '5';
  const playerName = cookiesList.get('playerName')?.value ?? generateRandomName();
  // console.log(highestScore);

  return (
    <div className='flex min-h-screen flex-col items-center gap-4 bg-slate-900 py-4'>
      <Scores highestScore={highestScore} hints={hints} vignetteData={vignetteData} />
      <h1 className='text-center text-xl text-white sm:text-2xl md:text-3xl'>
        which country has higher population?
      </h1>
      <Countries
        initialCountries={countriesPair}
        highestScore={highestScore}
        hints={hints}
        playerName={playerName}
      />
    </div>
  );
};

export default Page;
