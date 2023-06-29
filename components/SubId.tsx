'use client';

import { useAppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import production from '@utils/isProd';
import { useCallback, useEffect } from 'react';

interface ISubIdProps {
  children: React.ReactNode;
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

const SubId = ({ children }: ISubIdProps) => {
  const { surveyDispatch, surveyState } = useAppContext();
  const { offerId, zone, requestVar, ymid, var3, abTest, osVersion, subId } = useClientSearchParams();

  const searchParams = `?offer_id=${offerId}&z=${zone}&request_var=${requestVar}&variable2=${ymid}&var_3=${var3}&ab2=${abTest}&os_version=${osVersion}`;
  const devUrl = `/track${searchParams}`;
  console.log('🚀 ~ var3:', var3)
  console.log('🚀 ~ requestVar:', requestVar)

  const prodUrl = `${process.env.NEXT_PUBLIC_MARKER_DOMAIN}/track${searchParams}`;
  const url = production ? prodUrl : devUrl;

  const fetchSubId = useCallback(async (url: string) => {
    try {
      const markerResponse = await fetch(url);
      const markerData = (await markerResponse.json()) as MarkerWithSubIdResponse;
      if (markerData.subId) {
        console.log('we received subId');
        surveyDispatch({ type: ActionsType.setSubId, payload: markerData.subId });
      }
    } catch (error) {
      console.log('error:', error);
    }
  }, []);

  useEffect(() => {
    if (surveyState.subId !== null) {
      console.log('subId is already in global state');
    }
    if (zone === '') {
      console.log('zone is not defined');
    }
    if (offerId !== 10702) {
      console.log('offer is not supported');
    }
    if (surveyState.subId === null && offerId === 10702) {
      if (subId.length > 1) {
        surveyDispatch({ type: ActionsType.setSubId, payload: subId });
      } else if (zone !== '') {
        fetchSubId(url);
      }
    }
  }, []);

  return <>{children}</>;
};

export default SubId;
