'use client';
import triggerImpression from '@utils/Vignette/triggerImpression';
import { useEffect } from 'react';

interface ISendImpressionProps {
  url: string;
}

const SendImpression = ({ url }: ISendImpressionProps) => {
  useEffect(() => {
    triggerImpression(url);
  }, []);

  return null;
};

export default SendImpression;
