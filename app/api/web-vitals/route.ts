import { db } from '@db/connection';
import { TWebVitalsNext, webVitalsNext } from '@db/schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  const { headers } = request;
  const auth = headers.get('Authorization');

  if (auth !== process.env.NEXT_PUBLIC_API_ROUTE_SECRET) {
    return NextResponse.json({ response: 'Unauthorized, fuck off', status: 401 });
  }

  const webVitalsData = (await request.json()) as TWebVitalsNext;

  console.log(`web`, webVitalsData);

  try {
    const res = await db.insert(webVitalsNext).values({
      id: webVitalsData.id,
      geo: webVitalsData.geo,
      pathname: webVitalsData.pathname,
      offer: webVitalsData.offer,
      name: webVitalsData.name,
      value: webVitalsData.value,
      rating: webVitalsData.rating,
      delta: webVitalsData.delta,
      navigationType: webVitalsData.navigationType,
      lang: webVitalsData.lang,
    });

    return NextResponse.json({ msg: 'Success', status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Error on '/api/web-vitals': " + error, status: 400 });
  }
}
