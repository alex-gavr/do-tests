'use client'; // Error components must be Client components

import makeExitUrl from '@utils/makeExitUrl';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    const FALLBACK = 5812355;
    const url = makeExitUrl(FALLBACK);
    console.error(error);
    window.location.replace(url);
  }, [error]);

  return null;
}
