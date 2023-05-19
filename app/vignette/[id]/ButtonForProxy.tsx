'use client';
import { useAppContext } from '@context/Context';
import { TGameEventProperties } from '@utils/sendEvent';
import { sendEvent } from '@utils/sendEvent';
import { GameEvents } from 'types/TrackEvents';

interface IButtonForProxyProps {}

const ButtonForProxy = ({}: IButtonForProxyProps) => {
  const { gameState: state } = useAppContext();

  const handleClick = async () => {
    const eventData: TGameEventProperties = {
      track: GameEvents.vignetteProxy,
      offerId: 'populations-game',
      userId: state.user.uuid,
      playerName: state.user.playerName,
      country: state.user.country,
      topScore: state.user.topScore,
      hintsAvailable: state.user.hintsAvailable,
      roundsPlayed: state.user.roundsPlayed,
    };
    sendEvent('game', eventData);
    window.location.replace('https://google.com');
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <button
        type='button'
        className='cursor-pointer rounded-lg border border-slate-400 bg-blue-500 px-6 py-3 text-center text-sm tracking-wider text-white'
        onClick={handleClick}
      >
        Rare find! <br />
        Click to claim gift!
      </button>
    </div>
  );
};

export default ButtonForProxy;
