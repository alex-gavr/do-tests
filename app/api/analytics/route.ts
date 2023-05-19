export const runtime = 'edge';
import { NextRequest, NextResponse } from 'next/server';
import { UAParser } from 'ua-parser-js';
import {
  ICustomEventProperties,
  TDataVariant,
  TGameEventProperties,
  TOfferEventProperties,
  checkBodyData,
  gameDataSchema,
  offerDataSchema,
} from '@utils/sendEvent';

interface IBaseBody {
  token: string;
  browserName: string;
  browserVersion: string;
  osName: string;
  osVersion: string;
  deviceVendor: string;
  deviceType: string;
  deviceModel: string;
  url: string;
  ip: string;
}

export async function POST(request: NextRequest, response: NextResponse) {
  const { headers } = request;
  const auth = headers.get('Authorization');

  if (auth !== process.env.NEXT_PUBLIC_API_ROUTE_SECRET) {
    return NextResponse.json({ response: 'Unauthorized, fuck off', status: 401 });
  }

  const { ip } = request;

  const data: TOfferEventProperties | TGameEventProperties = await request.json();

  const dataVariant = headers.get('dataVariant') as TDataVariant;
  const url = headers.get('url');

  const customData = checkBodyData(dataVariant, data);

  if (customData === undefined) {
    return NextResponse.json({ response: 'Invalid Request', status: 401 });
  }

  // UA Parsing
  const UA = request.headers.get('user-agent') ?? undefined;
  const parser = UAParser(UA);

  const browserName = parser.browser.name;
  const browserVersion = parser.browser.version;
  const osName = parser.os.name;
  const osVersion = parser.os.version;
  const deviceVendor = parser.device.vendor;
  const deviceType = parser.device.type;
  const deviceModel = parser.device.model;

  const baseData: IBaseBody = {
    token: process.env.MIXPANEL_TOKEN,
    browserName: browserName ? browserName : '',
    browserVersion: browserVersion ? browserVersion : '',
    osName: osName ? osName : '',
    osVersion: osVersion ? osVersion : '',
    deviceVendor: deviceVendor ? deviceVendor : '',
    deviceType: deviceType ? deviceType : '',
    deviceModel: deviceModel ? deviceModel : '',
    url: url ? url : '',
    ip: ip ? ip : '',
  };

  // Should I DO IT LIKE THAT ?
  const body = createBody(baseData, dataVariant, customData);

  if (body === undefined) {
    return NextResponse.json({ response: 'Invalid Request', status: 401 });
  }

  const options = {
    method: 'POST',
    headers: { accept: 'text/plain', 'content-type': 'application/json' },
    body: JSON.stringify([
      {
        properties: body.bodyData,
        event: body.track,
      },
    ]),
  };

  const res = await fetch(`https://api-eu.mixpanel.com/track`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return NextResponse.json({ response: res, status: 200 });
}

const createBody = (
  baseData: IBaseBody,
  dataVariant: TDataVariant,
  additionalData: TOfferEventProperties | TGameEventProperties,
) => {
  const baseBody = {
    token: process.env.MIXPANEL_TOKEN,
    $browser: baseData.browserName,
    $browser_version: baseData.browserVersion,
    $os: baseData.osName,
    $os_version: baseData.osVersion,
    device_vendor: baseData.deviceVendor,
    device_type: baseData.deviceType,
    $device: baseData.deviceModel,
    $current_url: baseData.url,
    ip: baseData.ip,
  };

  if (dataVariant === 'offer') {
    const data = additionalData as TOfferEventProperties;
    const track = data.track;

    const bodyData = {
      ...baseBody,
      offerId: data.offerId,
      step: data.step,
      totalSteps: data.totalSteps,
      buttonText: data.buttonText,
      imgId: data.imgId,
    };

    return {
      bodyData,
      track,
    };
  } else if (dataVariant === 'game') {
    const data = additionalData as TGameEventProperties;
    const track = data.track;

    const bodyData = {
      ...baseBody,
      $distinct_id: data.userId,
      offerId: data.offerId,
      userId: data.userId,
      playerName: data.playerName,
      country: data.country,
      topScore: data.topScore,
      hintsAvailable: data.hintsAvailable,
      roundsPlayed: data.roundsPlayed,
    };

    return {
      bodyData,
      track,
    };
  }
};
