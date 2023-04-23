import { NextRequest, NextResponse } from 'next/server';

// run only on homepage
export const config = {
  matcher: '/',
};

export async function middleware(req: NextRequest) {
  
  const search = req.nextUrl.search ? req.nextUrl.search : '';

  const acceptLanguage = req.headers.get('accept-language');
  const preferredLanguage = acceptLanguage ? acceptLanguage.split(",")[0] : "en"; 

  return NextResponse.redirect(
    new URL(`/${preferredLanguage}/${search}`, req.url)
  )
}
