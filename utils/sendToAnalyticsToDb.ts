import { Metric } from 'web-vitals';

interface IProps {
  metric: Metric;
  geo: string;
  pathname: string;
  language: string;
  offer: number;
}

function sendToAnalyticsToDb({ metric, geo, pathname, language, offer }: IProps) {
  const data = {
    id: metric.id,
    geo: geo,
    pathname: pathname,
    offer: `${offer}`,
    name: metric.name,
    value: Math.round(metric.value),
    rating: metric.rating,
    delta: Math.round(metric.delta),
    navigationType: metric.navigationType,
    lang: language,
  };

  try {
    fetch('/api/web-vitals', {
      method: 'POST',
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
}
export default sendToAnalyticsToDb;
