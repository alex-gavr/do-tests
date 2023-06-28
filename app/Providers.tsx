'use client';
import AutoExit from '@components/Monetization/AutoExit';
import NonUnique from '@components/Monetization/NonUnique';
import Reverse from '@components/Monetization/Reverse';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import React, { useEffect } from 'react';
import { hasCookie, setCookie } from 'cookies-next';
import production from '@utils/isProd';
import { AppProvider } from '@context/Context';
import debug from '@utils/isDebug';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { TGameEventProperties, sendEvent } from '@utils/sendEvent';
import { GameEvents, TrackEvents } from 'types/TrackEvents';
import { usePathname } from 'next/navigation';

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  const { offerId } = useClientSearchParams();
  const pathname = usePathname();
  const beenHere = hasCookie('beenHere');
  const beenHome = hasCookie('beenHome');
  const beenGameOver = hasCookie('beenGameOver');
  const beenLeaderboard = hasCookie('beenLeaderboard');
  const nonUnique = hasCookie('nonUnique');

  useEffect(() => {
    if (offerId === 10702 && production && !debug && !beenHome) {
      const eventData: TGameEventProperties = {
        track: GameEvents.firstTimeGame,
        offerId: 'populations-game',
      };
      sendEvent('game', eventData);
      setCookie('beenHome', true, { maxAge: 60 * 60 * 24 * 365 });
    }

    if (pathname === '/game-over' && production && !debug && !beenGameOver) {
      const eventData: TGameEventProperties = {
        track: GameEvents.firstTimeGameOver,
        offerId: 'populations-game',
      };
      sendEvent('game', eventData);
      setCookie('beenGameOver', true, { maxAge: 60 * 60 * 24 * 365 });
    }

    if (pathname === '/leaderboard' && production && !debug && !beenLeaderboard) {
      const eventData: TGameEventProperties = {
        track: GameEvents.firstTimeLeaderboard,
        offerId: 'populations-game',
      };
      sendEvent('game', eventData);
      setCookie('beenLeaderboard', true, { maxAge: 60 * 60 * 24 * 365 });
    }

    if (production && !debug) {
      if (beenHere && !nonUnique) {
        const eventData = {
          track: TrackEvents.loadedAgain,
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }

      if (offerId !== 'default') {
        // Cookie to track if user has been here before within 30 minutes
        setCookie('beenHere', 1, { path: '/', maxAge: 60 * 30 });
        const eventData = {
          track: TrackEvents.loaded,
          offerId: offerId,
        };
        sendEvent('offer', eventData);
      }
    }
  }, [pathname]);

  return (
    <AppProvider>
      {production && !debug && <AutoExit />}
      {/* {production && !debug && <Reverse />} */}
      {/* {production && !debug && <NonUnique />} */}
      <LazyMotion features={async () => (await import('@utils/domAnimation')).default}>
        <AnimatePresence>{children}</AnimatePresence>
      </LazyMotion>
    </AppProvider>
  );
};
export default Providers;
