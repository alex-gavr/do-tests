'use client';

import { useAppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import production from '@utils/isProd';
import { TValidOffer } from 'config';
import { useCallback, useEffect } from 'react';

interface ISubIdProps {
  offer: TValidOffer;
  zone: number;
}

export type MarkerWithSubIdResponse = {
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

const SubId = ({ offer, zone }: ISubIdProps) => {
  const { surveyDispatch, surveyState } = useAppContext();

  const searchParams = `?offer_id=${offer}&z=${zone}`;
  const devUrl = `/track${searchParams}`;
  const prodUrl = `${process.env.NEXT_PUBLIC_MARKER_DOMAIN}/track${searchParams}`;
  const url = production ? prodUrl : devUrl;

  const fetchSubId = useCallback(async (url: string) => {
    try {
      const markerResponse = await fetch(url);
      const markerData = (await markerResponse.json()) as MarkerWithSubIdResponse;
      if (markerData.subId) {
        console.log('we received subId', markerData.subId);
        surveyDispatch({ type: ActionsType.setSubId, payload: markerData.subId });
      }
    } catch (error) {
      console.log('fetchSubId error:', error);
    }
  }, []);

  useEffect(() => {
    if (surveyState.subId !== null) {
      console.log('subId is already in global state:', surveyState.subId);
    }
    if (zone === 0) {
      console.log('zone is not defined');
    }
    if (offer !== 10702) {
      console.log('offer is not supported');
    }
    if (surveyState.subId === null) {
      fetchSubId(url);
    }
  }, []);

  return null;
};

export default SubId;
