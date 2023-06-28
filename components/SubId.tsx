'use client';

import { useAppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import production from '@utils/isProd';
import { TValidOffer } from 'config';
import { use, useEffect } from 'react';

interface ISubIdProps {
  offer: TValidOffer;
  zone: number;
}

type MarkerWithSubIdResponse = {
  browser: string;
  browser_version: string;
  city: string;
  device: string;
  geo: string;
  ip: string;
  os: string;
  os_version: string;
  proxy: string;
  subId?: string;
};

const getSubId = (url: string) => {
  return fetch(url)
    .then((res) => res.json() as Promise<MarkerWithSubIdResponse>)
    .catch((err) => {
      console.log(err);
      return null;
    });
};

const SubId = ({ offer, zone }: ISubIdProps) => {
  const { surveyDispatch, surveyState } = useAppContext();
  if (surveyState.subId !== null) {
    console.log('subId is already in global state:', surveyState.subId);
    return null;
  } else if (zone === 0) {
    console.log('zone is not defined');
    return null;
  } else if (offer !== 10702) {
    console.log('offer is not supported');
    return null;
  } else {
    const searchParams = `?offer_id=${offer}&z=${zone}`;
    const devUrl = `/track${searchParams}`;
    const prodUrl = `${process.env.NEXT_PUBLIC_MARKER_DOMAIN}/track${searchParams}`;
    const url = production ? prodUrl : devUrl;
    const trackRes = use(getSubId(url));

    useEffect(() => {
      if (trackRes !== null && trackRes.subId) {
        console.log('we got subId from backend:', trackRes.subId);
        surveyDispatch({ type: ActionsType.setSubId, payload: trackRes.subId });
      } else if (trackRes !== null && trackRes.subId === undefined) {
        console.log('You tracked the person:', trackRes);
      }
    }, [trackRes]);

    return null;
  }
};

export default SubId;
