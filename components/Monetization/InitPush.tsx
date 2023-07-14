'use client';
import { useAppContext } from '@context/Context';
import { getRandomZone } from '@utils/monetizationHelpers/getRandomZone';
import pushMicroTagScript from '@utils/monetizationHelpers/pushMicroTagScript';
import { useEffect, useState } from 'react';

interface IInitPushProps {}

const InitPush = ({}: IInitPushProps) => {
  const [done, setDone] = useState<boolean>(false);
  const { surveyState: state } = useAppContext();

  useEffect(() => {
    if (state.exits.financeExits.push_zone && !done) {
      const zone = getRandomZone(state.exits.financeExits.push_zone);
      pushMicroTagScript({ pushZone: zone });
      setDone(true);
    }
  }, [done]);
  return null;
};

export default InitPush;
