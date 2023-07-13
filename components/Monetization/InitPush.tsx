'use client';
import pushMicroTagScript from '@utils/monetizationHelpers/pushMicroTagScript';
import { useEffect, useState } from 'react';

interface IInitPushProps {
  zone: number;
}

const InitPush = ({ zone }: IInitPushProps) => {
  const [done, setDone] = useState<boolean>(false);
  // const pushZone = exitZones.push_zone[Math.floor(Math.random() * exitZones.push_zone.length)];

  useEffect(() => {
    if (zone && !done) {
      pushMicroTagScript({ pushZone: zone });
      setDone(true);
    }
  }, [done]);
  return null;
};

export default InitPush;
