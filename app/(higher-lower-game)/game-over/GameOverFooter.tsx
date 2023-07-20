'use client';
import GameButton from '@components/HigherLowerGameUi/GameButton';
import { useAppContext } from '@context/Context';
import { GameActionTypes } from '@context/higher-lower-game/gameActionsType';
import getIppIfErrorGetOnclick from '@utils/ipp/getIppIfErrorGetOnclick';
import production from '@utils/isProd';
import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import { THigherLowerGameDictionary } from '@i18n/10702/en';
import { useRouter } from 'next/navigation';

interface IGameOverFooterProps {
  footerTexts: THigherLowerGameDictionary['gameOver']['footer'];
}
const GameOverFooter = ({ footerTexts }: IGameOverFooterProps) => {
  const { gameDispatch: dispatch, surveyState } = useAppContext();
  const router = useRouter();

  const alreadyConverted = hasCookie('gameConversion');

  const handleFinish = async () => {
    const url = await getIppIfErrorGetOnclick(surveyState.exits.gameFinishIpp, surveyState.exits.mainExit);
    // Main Zone
    router.replace(url);
    // Pops
    window.open(url, '_blank');
  };

  const handlePlayAgain = () => {
    if (production) {
      if (surveyState.subId !== null && !alreadyConverted) {
        const url = new URL(window.location.href);
        const subId = url.searchParams.get('s');
        const conversionUrl = `https://ad.propellerads.com/conversion.php?visitor_id=${subId}`;
        if (navigator.sendBeacon) {
          navigator.sendBeacon(conversionUrl);
        } else {
          fetch(conversionUrl, { method: 'POST', keepalive: true });
        }
        setCookie('gameConversion', 1, { path: '/', maxAge: 60 * 60 * 24 * 7 });
        console.log('fired', surveyState.subId);
      }
    }
    if (typeof window !== 'undefined') {
      const params = window.location.search;
      deleteCookie('lost');
      router.replace(`/${params}`);
      dispatch({ type: GameActionTypes.setCurrentScore, payload: 0 });
      dispatch({ type: GameActionTypes.resetLostCountDown });
      dispatch({ type: GameActionTypes.setIsAnswerCorrect, payload: null });
      dispatch({ type: GameActionTypes.setShowAnswer, payload: false });
      dispatch({ type: GameActionTypes.setPickedCard, payload: null });
      dispatch({ type: GameActionTypes.setShowHint, payload: false });
      dispatch({ type: GameActionTypes.resetSecondsToAnswer });
    }
  };

  return (
    <div className='flex w-full flex-row items-start justify-between gap-4'>
      <GameButton variant='secondary' onClick={handleFinish} className='w-full min-w-0 max-w-[200px]'>
        {footerTexts.finish}
      </GameButton>
      <GameButton variant='primary' onClick={handlePlayAgain} className='w-full min-w-0 max-w-[200px]'>
        {footerTexts.playAgain}
      </GameButton>
    </div>
  );
};

export default GameOverFooter;
