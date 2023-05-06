import { NextRequest, NextResponse } from 'next/server';
import langParser from 'accept-language-parser';
import { locales, getLocalePartsFrom } from './i18n';
import { defaultLocale } from '@utils/defaultValues';

const findBestMatchingLocale = (acceptLangHeader: string) => {
  // parse the locales acceptable in the header, and sort them by priority (q)
  const parsedLangs = langParser.parse(acceptLangHeader);

  const filteredLangs = parsedLangs.map((lang) => {
    return { locale: lang.code };
  });

  const matchedLanguage = locales.find((locale) => {
    const { lang } = getLocalePartsFrom({ locale });
    return filteredLangs.find((filteredLang) => filteredLang.locale === lang);
  });

  if (matchedLanguage) {
    return matchedLanguage;
  } else {
    return defaultLocale;
  }
};

export function middleware(request: NextRequest) {
  const geoCookie = request.cookies.get('geo')?.value;
  const localeCookie = request.cookies.get('locale')?.value;


  if (localeCookie && geoCookie) {
    console.log('we have cookies');
    request.nextUrl.searchParams.set('locale', localeCookie);
    request.nextUrl.searchParams.set('country', geoCookie);
    return NextResponse.rewrite(request.nextUrl);
  } else {
    console.log('we set cookie');
    const { nextUrl: url, geo } = request;

    const country = geo?.country?.toLocaleLowerCase() ?? 'rs';

    const getLocale = () => {
      const matchedLocale = findBestMatchingLocale(request.headers.get('Accept-Language') || defaultLocale);
      return matchedLocale;
    };

    const locale = localeCookie ? localeCookie : getLocale();


    url.searchParams.set('country', country);
    url.searchParams.set('locale', locale);

    const res = NextResponse.rewrite(url);

    res.cookies.set({
      name: 'locale',
      value: locale,
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    res.cookies.set({
      name: 'geo',
      value: country,
      secure: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return res;
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
};
