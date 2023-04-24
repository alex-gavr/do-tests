import { NextRequest, NextResponse } from 'next/server';

import langParser from 'accept-language-parser';

import { defaultLocale, locales, getLocalePartsFrom } from './i18n';

const findBestMatchingLocale = (acceptLangHeader: string) => {
  // parse the locales acceptable in the header, and sort them by priority (q)
  const parsedLangs = langParser.parse(acceptLangHeader);
  
  const filteredLangs = parsedLangs.map((lang) => {
    return { locale: lang.code };
  });
  

  // find the first locale that matches a locale in our list
  for (let i = 0; i < filteredLangs.length; i++) {
    const filteredLang = filteredLangs[i];

    const matchedLanguage = locales.find((locale) => {
      const { lang } = getLocalePartsFrom({ locale });
      return filteredLang.locale === lang;
    });

    if (matchedLanguage) {
      return matchedLanguage;
    } else {
      return defaultLocale;
    }
  }
};

export function middleware(request: NextRequest) {
  const matchedLocale = findBestMatchingLocale(request.headers.get('Accept-Language') || defaultLocale);

  const locale = matchedLocale === undefined ? 'en' : matchedLocale.toLowerCase().split('-', 1);

  request.nextUrl.searchParams.set('locale', `${locale[0]}`);

  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
};
