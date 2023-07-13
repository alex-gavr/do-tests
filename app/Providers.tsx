'use client';
import AutoExit from '@components/Monetization/AutoExit';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import production from '@utils/isProd';
import { AppProvider } from '@context/Context';
import debug from '@utils/isDebug';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import CookieChecker from '@components/CookiesChecker/CookiesChecker';
import InitPush from '@components/Monetization/InitPush';
import exitZones from './(defaultSurvey)/Exits';
import { WebVitals } from '@utils/WebVitals';
import Reverse from '@components/Monetization/Reverse';
import NonUnique from '@components/Monetization/NonUnique';

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  const { offerId, language, country } = useClientSearchParams();

  const zone = offerId === 0 ? exitZones.push_zone[Math.floor(Math.random() * exitZones.push_zone.length)] : 5893057;

  return (
    <AppProvider>
      {/* <SubId /> */}
      {production && !debug && <NonUnique />}
      {production && !debug && <CookieChecker />}
      {production && !debug && <InitPush zone={zone} />}
      {production && !debug && <AutoExit />}
      {!production && !debug && <Reverse />}
      <LazyMotion features={async () => (await import('@utils/domAnimation')).default}>
        <AnimatePresence>{children}</AnimatePresence>
      </LazyMotion>
      {production && !debug && <WebVitals language={language} geo={country} offer={offerId} />}
    </AppProvider>
  );
};
export default Providers;


