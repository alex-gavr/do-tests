'use client';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import production from '@utils/isProd';
import { AppProvider } from '@context/Context';
import debug from '@utils/isDebug';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import exitZones from './(defaultSurvey)/Exits';
import { WebVitals } from '@utils/WebVitals';
// import AutoExit from '@components/Monetization/AutoExit';
// import InitPush from '@components/Monetization/InitPush';
// import CookieChecker from '@components/CookiesChecker/CookiesChecker';
// import Reverse from '@components/Monetization/Reverse';
// import NonUnique from '@components/Monetization/NonUnique';
import dynamic from 'next/dynamic';

const AutoExit = dynamic(() => import('@components/Monetization/AutoExit'), {
  ssr: false,
});
const NonUnique = dynamic(() => import('@components/Monetization/NonUnique'), {
  ssr: false,
});
const Reverse = dynamic(() => import('@components/Monetization/Reverse'), {
  ssr: false,
});
const CookieChecker = dynamic(() => import('@components/CookiesChecker/CookiesChecker'), {
  ssr: false,
});
const InitPush = dynamic(() => import('@components/Monetization/InitPush'), {
  ssr: false,
});

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
      {production && !debug && <Reverse />}
      <LazyMotion features={async () => (await import('@utils/domAnimation')).default}>
        <AnimatePresence>{children}</AnimatePresence>
      </LazyMotion>
      {production && !debug && <WebVitals language={language} geo={country} offer={offerId} />}
    </AppProvider>
  );
};
export default Providers;


