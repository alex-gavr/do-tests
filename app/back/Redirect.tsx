'use client';

import { useEffect } from 'react';

interface IRedirectProps {}

const Redirect = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const z = url.searchParams.get('z');
      const var1 = url.searchParams.get('var');
      const ymid = url.searchParams.get('ymid');
      const abtest = url.searchParams.get('ab2r') ? url.searchParams.get('ab2r') : 0;
      const os_version = url.searchParams.get('os_version') ? url.searchParams.get('os_version') : '';
      // var domain_onclick = url.searchParams.get('domain_onclick') ? url.searchParams.get('domain_onclick') : '';
      const oaid = url.searchParams.get('oaid') ? url.searchParams.get('oaid') : '';

      if (z) {
        window.location.replace(
          `${process.env.NEXT_PUBLIC_ONCLICK_DOMAIN}/${process.env.NEXT_PUBLIC_ONCLICK_CODE}/${z}/?var=${var1}&ymid=${ymid}&ab2r=${abtest}&os_version=${os_version}&oaid=${oaid}`,
        );
      } else {
        window.location.replace(
          `${process.env.NEXT_PUBLIC_ONCLICK_DOMAIN}/${process.env.NEXT_PUBLIC_ONCLICK_CODE}/4429639/&ab2r=${abtest}&os_version=${os_version}&oaid=${oaid}`,
        );
      }
    }
  }, []);

  return null;
};

export default Redirect;
