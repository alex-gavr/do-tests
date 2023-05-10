// export const runtime = 'edge';
// import { NextRequest, NextResponse } from 'next/server';
// import { UAParser } from 'ua-parser-js';
// import { ICustomEventProperties } from '@utils/sendEvent';

// interface IReqBody extends ICustomEventProperties {
//   url: string;
// }

// export async function POST(request: NextRequest, response: NextResponse) {
//   const { ip } = request;
//   const { track, offerId, url: currentUrl, step, totalSteps, buttonText, imgId }: IReqBody = await request.json();

//   // UA Parsing
//   const UA = request.headers.get('user-agent') ?? undefined;
//   const parser = UAParser(UA);

//   const browserName = parser.browser.name;
//   const browserVersion = parser.browser.version;
//   const osName = parser.os.name;
//   const osVersion = parser.os.version;
//   const deviceVendor = parser.device.vendor;
//   const deviceType = parser.device.type;
//   const deviceModel = parser.device.model;

//   const options = {
//     method: 'POST',
//     headers: { accept: 'text/plain', 'content-type': 'application/json' },
//     body: JSON.stringify([
//       {
//         properties: {
//           token: process.env.MIXPANEL_TOKEN,
//           $browser: browserName,
//           $browser_version: browserVersion,
//           $os: osName,
//           $os_version: osVersion,
//           device_vendor: deviceVendor,
//           device_type: deviceType,
//           $device: deviceModel,
//           $current_url: currentUrl,
//           ip: ip,
//           offerId: offerId,
//           step: step,
//           totalSteps: totalSteps,
//           buttonText: buttonText,
//           imgId: imgId,
//         },
//         event: `${track}`,
//       },
//     ]),
//   };

//   const res = await fetch(`https://api-eu.mixpanel.com/track`, options)
//     .then((response) => response.json())
//     .catch((err) => console.error(err));

//   return NextResponse.json({ response: res });
// }
