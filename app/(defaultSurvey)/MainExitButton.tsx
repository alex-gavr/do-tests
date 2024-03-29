'use client';

import { getExitLinkFromBackend } from '@utils/ipp/getExitLinkFromBackend';
import { setCookie } from 'cookies-next';
import production from '@utils/isProd';
import { initBack } from '@components/Monetization/InitBack';
import { getRandomZone } from '@utils/monetizationHelpers/getRandomZone';
import { useAppContext } from '@context/Context';

interface IMainExitButtonProps {
  text: string;
}

const MainExitButton = ({ text }: IMainExitButtonProps) => {
  const { surveyState: state } = useAppContext();

  const handleClick = async () => {
    if (production) {
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        const subId = url.searchParams.get('s');
        const conversionUrl = `https://ad.propellerads.com/conversion.php?visitor_id=${subId}`;
        if (navigator.sendBeacon) {
          navigator.sendBeacon(conversionUrl);
        } else {
          fetch(conversionUrl, { method: 'POST', keepalive: true });
        }
        // window.navigator.sendBeacon(conversionUrl);
        setCookie('nonUnique', 1, { maxAge: 60 * 60 * 24 * 7 });
      }

      const mainZone = getRandomZone(state.exits.financeExits.ipp_main_exit);
      const mainPops = state.exits.financeExits.ipp_main_exit_pops;

      const main = getExitLinkFromBackend(mainZone);
      const pops = getExitLinkFromBackend(mainPops);

      const [mainUrl, popsUrl] = await Promise.all([main, pops]);

      initBack(state.exits.financeExits.onclick_back_zone);
      window.open(mainUrl, '_blank');
      window.location.replace(popsUrl);
    } else {
      console.log('button click with conversion');
    }
  };

  return (
    <button onClick={handleClick} className='mt-2 w-full max-w-sm rounded-md bg-yellow-500 px-10 py-4 font-bold uppercase tracking-widest'>
      {text}
    </button>
  );
};

export default MainExitButton;
