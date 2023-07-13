'use client';
import { useReportWebVitals } from 'next/web-vitals';
import { Metric } from 'web-vitals';
import sendToAnalyticsToDb from './sendToAnalyticsToDb';
import { getCookie } from 'cookies-next';

interface IProps {
  offer: number;
}

const WebVitals = ({ offer }: IProps) => {
  //   onTTFB((metric) => sendToAnalyticsToDb(metric, pathname, language, geo, offer));

  const languageCookie = getCookie('locale');
  const geoCookie = getCookie('geo');

  useReportWebVitals((metric: Metric) => {
    const url = new URL(window.location.href);
    const pathname = url.pathname;
    const geo = geoCookie ? geoCookie.toString() : '??';
    const language = languageCookie ? languageCookie.toString() : '??';

    sendToAnalyticsToDb({ metric, pathname, language, geo, offer });
  });

  return null;
};

export default WebVitals;
