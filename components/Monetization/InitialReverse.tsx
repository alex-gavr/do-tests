// 'use client';
// import { AppContext } from '@context/Context';
// import { useGetParam } from '@hooks/useGetParam';
// import makeExitUrl from '@utils/makeExitUrl';
// import mixpanel from 'mixpanel-browser';
// import { useRouter } from 'next/navigation';
// import React, { useContext, useEffect } from 'react';

// const InitialReverse = () => {
//   const { state } = useContext(AppContext);
//   const { valueString: offerId } = useGetParam('offer_id');
//   const router = useRouter();

//   useEffect(() => {
//     const handleBeforeUnload = (event: any) => {
//       // Redirect the user to the desired link
//       event.preventDefault();
//       mixpanel.track('initialReverse', {
//         offerId,
//       });
//       if (state.exits.reverse) {
//         const url = makeExitUrl(state.exits.initialReverse);
//         router.push(url);
//       }
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, [router]);

//   return null;
// };
// export default InitialReverse;
