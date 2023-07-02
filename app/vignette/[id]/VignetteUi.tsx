'use client';
import getVignetteData from '@utils/Vignette/getVignetteData';
import Image from 'next/image';
import { use } from 'react';
import Buttons from './Buttons';
import SendImpression from './SendImpression';
import ButtonForProxy from './ButtonForProxy';
import production from '@utils/isProd';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { GameEvents } from 'types/TrackEvents';
import { useAppContext } from '@context/Context';

interface IVignetteProps {
  id: string;
}
export interface IVignette {
  banner_id: number;
  title: string;
  text: string;
  icon: string;
  click: string;
  impression_url: string;
}

const VignetteUi = ({ id }: IVignetteProps) => {
  const vignetteData = use(getVignetteData(id)) as IVignette;

  const { gameState: state } = useAppContext();

  if (vignetteData === undefined) {
    return <ButtonForProxy />;
  }

  const handleImageClick = () => {
    if (production) {
      const eventData: TGameEventProperties = {
        track: GameEvents.clickedOnVignetteImage,
        offerId: 'populations-game',
        userId: state.user.uuid,
        playerName: state.user.playerName,
        country: state.user.country,
        topScore: state.user.topScore,
        hintsAvailable: state.user.hintsAvailable,
        roundsPlayed: state.user.roundsPlayed,
      };
      sendEvent('game', eventData);
    }
  };

  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <div className=' flex min-w-[280px] max-w-sm flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-2xl'>
          <div className='flex w-full flex-row items-center justify-start gap-4'>
            <div className='flex-shrink-0 overflow-hidden rounded-lg' onClick={handleImageClick}>
              <Image src={vignetteData.icon} alt='ad' width={192} height={192} className='h-16 w-16 bg-black object-contain' />
            </div>
            <div className='flex flex-col justify-start'>
              <h2 className='text-lg leading-6'>{vignetteData.title}</h2>
              <p className='text-sm'>{vignetteData.text}</p>
            </div>
          </div>
          <div className='flex w-full flex-row justify-between gap-4'>
            <Buttons link={vignetteData.click} />
          </div>
        </div>
      </div>
      <SendImpression url={vignetteData.impression_url} />
    </>
  );
};

export default VignetteUi;
