'use client'; // Error components must be Client components

import production from '@utils/isProd';
import makeExitUrl from '@utils/makeExitUrl';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
    if (production) {
      const FALLBACK = 5812355;
      const url = makeExitUrl(FALLBACK);
      window.location.replace(url);
    }
  }, [error]);

  return null;
}
