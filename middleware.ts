import { NextRequest, NextResponse } from 'next/server';

// run only on homepage
export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const country = geo?.country || 'RU';

  url.searchParams.set('country', country);

  return NextResponse.rewrite(url);
}
