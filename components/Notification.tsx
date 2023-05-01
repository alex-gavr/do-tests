'use client';
import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { useGetParam } from '@hooks/useGetParam';
import makeExitUrl from '@utils/makeExitUrl';
import { m } from 'framer-motion';
import mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

const production = process.env.NODE_ENV === 'production';
const Notification = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(AppContext);
  const { valueString: offerId } = useGetParam('offer_id');

  const handleYes = () => {
    production &&
      mixpanel.track('motivated', {
        offerId: offerId,
        step: state.currentStep,
      });
    const url = makeExitUrl(state.exits.motivatedYes);
    const urlPops = makeExitUrl(state.exits.motivatedYesPops);
    window.open(url, '_blank');
    router.replace(urlPops);
  };

  const handleNo = () => {
    production &&
      mixpanel.track('notMotivated', {
        offerId: offerId,
        step: state.currentStep,
      });
    dispatch({
      type: ActionsType.setNotificationVisibility,
      payload: {
        visible: false,
      },
    });
  };

  return (
    <m.div
      className='fixed bottom-4 w-72 max-w-sm rounded-lg bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 sm:w-full md:right-4'
      initial={{ bottom: '-1rem', opacity: 0 }}
      animate={{ bottom: '1rem', opacity: 1 }}
      exit={{ bottom: '-1rem', opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='p-4'>
        <div className='flex items-start'>
          <div className='ml-3 w-0 flex-1'>
            <p className='mt-1 text-sm text-gray-100'>
              Have you been forced by someone to complete this survey?
            </p>
            <div className='mt-4 flex justify-center gap-4'>
              <button
                type='button'
                className='inline-flex w-16 items-center justify-center rounded-md bg-gray-700 px-2.5 py-1.5 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-green-300 hover:bg-gray-800'
                onClick={handleYes}
              >
                Yes
              </button>
              <button
                type='button'
                className=' inline-flex w-16 items-center justify-center rounded-md bg-gray-700 px-2.5 py-1.5 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-red-700 hover:bg-gray-800'
                onClick={handleNo}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Notification;