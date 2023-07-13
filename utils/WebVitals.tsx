'use client';
import { useReportWebVitals } from 'next/web-vitals';
import { Metric } from 'web-vitals';
import sendToAnalyticsToDb from './sendToAnalyticsToDb';

interface IProps {
  language: string;
  geo: string;
  offer: number;
}

export function WebVitals({ language, geo, offer }: IProps) {
  //   onTTFB((metric) => sendToAnalyticsToDb(metric, pathname, language, geo, offer));
  useReportWebVitals((metric: Metric) => {
    const url = new URL(window.location.href);
    const pathname = url.pathname;

    sendToAnalyticsToDb({ metric, pathname, language, geo, offer });
  });
  return null;
}
