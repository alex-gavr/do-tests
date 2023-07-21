'use client';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import production from '@utils/isProd';
import { AppProvider, useAppContext } from '@context/Context';
import debug from '@utils/isDebug';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
// import WebVitals from '@utils/WebVitals';
// import AutoExit from '@components/Monetization/AutoExit';
// import InitPush from '@components/Monetization/InitPush';
// import CookieChecker from '@components/CookiesChecker/CookiesChecker';
// import Reverse from '@components/Monetization/Reverse';
// import NonUnique from '@components/Monetization/NonUnique';
import dynamic from 'next/dynamic';
import Script from 'next/script';

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
// const WebVitals = dynamic(() => import('@utils/WebVitals'), {
//   ssr: false,
// });

interface IProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProps) => {
  const { offerId, vignette } = useClientSearchParams();

  const offerGame = offerId === 10702;

  const adult = vignette === '0' && offerGame;
  const adultSocial = vignette === '2' && offerGame;
  const anime = vignette === '3' && offerGame;
  const movies = vignette === '4' && offerGame;
  const social = vignette === '5' && offerGame;
  const socialNoAlertsNoSoftwareNoAdsWithSound = vignette === '6' && offerGame;
  const socialNoErotics = vignette === '7' && offerGame;
  const socialNoGambling = vignette === '8' && offerGame;
  const sportStreaming = vignette === '9' && offerGame;
  const videohosts = vignette === '10' && offerGame;

  const handleError = (error: Error) => {
    console.error(error);
  };

  return (
    <AppProvider>
      {/* <SubId /> */}
      {production && !debug && offerId !== 10702 && <NonUnique />}
      {production && !debug && <CookieChecker />}
      {production && !debug && <InitPush />}
      {production && !debug && <AutoExit />}
      {production && !debug && offerId !== 10702 && <Reverse />}

      <LazyMotion features={async () => (await import('@utils/domAnimation')).default}>
        <AnimatePresence>{children}</AnimatePresence>
      </LazyMotion>

      {adult && <Script src='/adsterra/adult.js' strategy='lazyOnload' async onError={handleError} />}
      {adultSocial && <Script src='/adsterra/adultSocial.js' strategy='lazyOnload' async onError={handleError} />}
      {anime && <Script src='/adsterra/anime.js' strategy='lazyOnload' async onError={handleError} />}
      {movies && <Script src='/adsterra/movies.js' strategy='lazyOnload' async onError={handleError} />}
      {social && <Script src='/adsterra/social.js' strategy='lazyOnload' async onError={handleError} />}
      {socialNoAlertsNoSoftwareNoAdsWithSound && (
        <Script src='/adsterra/socialNoAlertsNoSoftwareNoAdsWithSound.js' strategy='lazyOnload' async onError={handleError} />
      )}
      {socialNoErotics && <Script src='/adsterra/socialNoErotics.js' strategy='lazyOnload' async onError={handleError} />}
      {socialNoGambling && <Script src='/adsterra/socialNoGambling.js' strategy='lazyOnload' async onError={handleError} />}
      {sportStreaming && <Script src='/adsterra/sportStreaming.js' strategy='lazyOnload' async onError={handleError} />}
      {videohosts && <Script src='/adsterra/videohosts.js' strategy='lazyOnload' async onError={handleError} />}

      {/* {production && !debug && <WebVitals offer={offerId} />} */}
    </AppProvider>
  );
};
export default Providers;
