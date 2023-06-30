'use client';
import { useAppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import debug from '@utils/isDebug';
import production from '@utils/isProd';
import makeExitUrl, { ExitType } from '@utils/makeExitUrl';
import { sendEvent } from '@utils/sendEvent';
import { m } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { TrackEvents } from 'types/TrackEvents';

const Notification = () => {
  const router = useRouter();
  const { surveyState: state, surveyDispatch: dispatch } = useAppContext();
  const { offerId } = useClientSearchParams();

  const handleYes = () => {
    if (production && !debug) {
      const eventData = {
        track: TrackEvents.motivated,
        offerId: offerId,
        step: state.currentStep
      };
      sendEvent('offer',eventData);
    }

    const url = makeExitUrl(state.exits.motivatedYes, ExitType.onclick);
    const urlPops = makeExitUrl(state.exits.motivatedYesPops, ExitType.onclick);
    window.open(url, '_blank');
    router.replace(urlPops);
  };

  const handleNo = () => {
    if (production && !debug) {
      const eventData = {
        track: TrackEvents.notMotivated,
        offerId: offerId,
        step: state.currentStep
      };
      sendEvent('offer',eventData);
    }

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
