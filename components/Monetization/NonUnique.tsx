'use client';
import exitZones from '@app/(defaultSurvey)/Exits';
import { getExitLinkFromBackend } from '@utils/ipp/getExitLinkFromBackend';
import { hasCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { initBack } from './InitBack';

const NonUnique = () => {
  const router = useRouter();
  const nonUnique = hasCookie('nonUnique');
  const nonUniqueAutoExit = hasCookie('autoExit');
  const nonUniqueTeen = hasCookie('nonUniqueTeen');

  useEffect(() => {
    if (!nonUnique && !nonUniqueAutoExit && !nonUniqueTeen) {
      return;
    } else {
      if (nonUniqueTeen) {
        const initNonUniqueTeen = async () => {
          const nonUniqueTeenIpp = exitZones.ipp_not_unique_teen;
          const url = await getExitLinkFromBackend(nonUniqueTeenIpp);
          initBack(exitZones.onclick_back_zone);
          window.open(url, '_blank');
          router.replace(url);
        };
        initNonUniqueTeen();
      } else {
        const initNonUnique = async () => {
          const nonUniqueIpp = exitZones.ipp_not_unique[Math.floor(Math.random() * exitZones.ipp_not_unique.length)];
          const url = await getExitLinkFromBackend(nonUniqueIpp);
          initBack(exitZones.onclick_back_zone);
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
