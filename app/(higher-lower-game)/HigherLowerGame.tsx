import { cookies } from 'next/dist/client/components/headers';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import ScoresSkeleton from '@components/HigherLowerGameUi/Skeletons/ScoresSkeleton';
import CountriesSkeleton from '@components/HigherLowerGameUi/Skeletons/CountriesSkeleton';
import { getDictionary } from 'i18n';
import { TLanguage, TValidLocale } from 'config';
import { THigherLowerGameDictionary } from 'dictionaries/7777/en';

const InitialCountries = dynamic(() => import('@components/HigherLowerGameUi/InitialCountries'), {
  ssr: false,
});
const ScoresContainer = dynamic(() => import('@components/HigherLowerGameUi/ScoresContainer'), {
  ssr: false,
  loading: () => <ScoresSkeleton />,
});
const Countries = dynamic(() => import('@components/HigherLowerGameUi/Countries'), {
  loading: () => <CountriesSkeleton />,
  ssr: false,
});
const CreateUser = dynamic(() => import('@components/HigherLowerGameUi/CreateUser'), { ssr: false });

interface IHigherLowerGameProps extends TLanguage {
  country: string;
}

const HigherLowerGame = async ({ country, language }: IHigherLowerGameProps) => {
  const cookiesList = cookies();
  const lost = cookiesList.has('lost');
  if (lost) {
    redirect('/game-over');
  }
  const d = (await getDictionary(7777, language as TValidLocale)) as THigherLowerGameDictionary;

  return (
    <>
      <InitialCountries country={country} />
      <div className='flex min-h-screen flex-col items-center justify-start gap-4 bg-slate-900 py-4'>
        <div className='absolute top-4 w-full max-w-2xl'>
          <ScoresContainer
            country={country}
            score={d.welcome.ScoresContainer.score}
            hintsAvailable={d.welcome.ScoresContainer.hintsAvailable}
          />
        </div>
        <h1 className='mt-16 text-center text-xl text-white sm:text-2xl md:text-3xl'>
          {d.welcome.heading}
        </h1>
        <Countries
          buttonTexts={d.welcome.Countries.Button}
          hintButtonTexts={d.welcome.Countries.HintButton}
          countryCardTexts={d.welcome.Countries.CountryCard}
        />
      </div>
      <CreateUser country={country} />
    </>
  );
};

export default HigherLowerGame;
