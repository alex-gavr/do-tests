'use client';
import { getExitLinkFromBackend } from '@utils/ipp/getExitLinkFromBackend';
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { initBack } from './InitBack';
import { getRandomZone } from '@utils/monetizationHelpers/getRandomZone';
import { useAppContext } from '@context/Context';

const NonUnique = () => {
  const router = useRouter();
  const { surveyState: state } = useAppContext();
  const nonUnique = hasCookie('nonUnique');
  const nonUniqueAutoExit = hasCookie('autoExit');
  const nonUniqueTeen = hasCookie('nonUniqueTeen');

  useEffect(() => {
    if (!nonUnique && !nonUniqueAutoExit && !nonUniqueTeen) {
      return;
    } else {
      if (nonUniqueTeen) {
        const initNonUniqueTeen = async () => {
          const nonUniqueTeenIpp = state.exits.financeExits.ipp_not_unique_teen;
          const url = await getExitLinkFromBackend(nonUniqueTeenIpp);
          initBack(state.exits.financeExits.onclick_back_zone);
          window.open(url, '_blank');
          router.replace(url);
        };
        initNonUniqueTeen();
      } else {
        const initNonUnique = async () => {
          const nonUniqueIpp = getRandomZone(state.exits.financeExits.ipp_not_unique);
          const url = await getExitLinkFromBackend(nonUniqueIpp);
          initBack(state.exits.financeExits.onclick_back_zone);
          window.open(url, '_blank');
          router.replace(url);
        };
        initNonUnique();
      }
    }
  }, []);
  return null;
};

export default NonUnique;
