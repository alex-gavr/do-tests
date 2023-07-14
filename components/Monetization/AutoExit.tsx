'use client';
import { useAppContext } from '@context/Context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useEventListener } from 'usehooks-ts';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { setCookie } from 'cookies-next';
import production from '@utils/isProd';
import exitZones from '@app/(defaultSurvey)/Exits';
import { getExitLinkFromBackend } from '@utils/ipp/getExitLinkFromBackend';
import { initBack } from './InitBack';

const THIRTY_SECONDS = 30;
const FORTY_SECONDS = 40;

// WARNING: Autoexit works only in game.
const AutoExit = () => {
  const router = useRouter();
  const { offerId } = useClientSearchParams();
  const { surveyState: state } = useAppContext();
  const [count, setCount] = useState(FORTY_SECONDS);

  // AUTO-EXIT
  const updateCount = () => {
    setCount(THIRTY_SECONDS);
  };

  useEventListener('mousemove', updateCount);
  useEventListener('click', updateCount);
  useEventListener('scroll', updateCount);
  useEventListener('touchmove', updateCount);

  useEffect(() => {
    const interval = setInterval(() => {
      // update the state after 1000ms
      setCount((currentCount) => currentCount - 1);
    }, 1000);
    // when count is 0, Auto-Exit happens
    if (count === 0) {
      if (typeof window !== 'undefined') {
        const pathname = window.location.pathname;
        if (pathname === '/thank-you' && offerId === 0) {
          // IF thank-you page we still trigger conversion for pub
          if (production) {
            const url = new URL(window.location.href);
            const subId = url.searchParams.get('s');
            const conversionUrl = `https://ad.propellerads.com/conversion.php?visitor_id=${subId}`;
            if (navigator.sendBeacon) {
              navigator.sendBeacon(conversionUrl);
            } else {
              fetch(conversionUrl, { method: 'POST', keepalive: true });
            }
            // window.navigator.sendBeacon(conversionUrl);
            setCookie('nonUnique', 1, { maxAge: 60 * 60 * 24 * 7, path: '' });

            const triggerExit = async () => {
              const mainZone = exitZones.ipp_main_exit[Math.floor(Math.random() * exitZones.ipp_main_exit.length)];
              const mainPops = exitZones.ipp_main_exit_pops;

              const main = getExitLinkFromBackend(mainZone);
              const pops = getExitLinkFromBackend(mainPops);

              const [mainUrl, popsUrl] = await Promise.all([main, pops]);

              initBack(exitZones.onclick_back_zone);
              window.open(mainUrl, '_blank');
              window.location.replace(popsUrl);
            };
            triggerExit();
          } else {
            console.log(`autoexit conversion`);
          }
        } else {

          // Fin survey zones
          const zone = exitZones.onclick_autoexit[Math.floor(Math.random() * exitZones.onclick_autoexit.length)];
          const zonePops = exitZones.onclick_autoexit_pops[Math.floor(Math.random() * exitZones.onclick_autoexit_pops.length)];
          const url = makeExitUrl(zone, ExitType.onclick);
          const urlPops = makeExitUrl(zonePops, ExitType.onclick);
          if (state.exits.autoExit) {
            setCookie('autoExit', 1, { path: '/', maxAge: 60 * 30 });
            window.open(url, '_blank');
            router.replace(urlPops);
          }
        }
      }
    }

    return () => clearInterval(interval);
  }, [count, router]);

  return null;
};

export default AutoExit;
