import { NextRequest, NextResponse } from 'next/server';

// run only on homepage
export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;

  // accept-language: 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
  
  const country = geo?.country || 'RU';

  url.searchParams.set('country', country);

  return NextResponse.rewrite(url);
}
