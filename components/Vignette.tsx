'use client';

import { useAppContext } from '@context/Context';
import { VignetteActionTypes } from '@context/vignette/vignetteActionsType';
import getVignetteData from '@utils/Vignette/getVignetteData';
import triggerImpression from '@utils/Vignette/triggerImpression';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

interface IVignetteProps {}

const Vignette = ({}: IVignetteProps) => {
  const { vignetteState, vignetteDispatch } = useAppContext();

  useEffect(() => {
    if (vignetteState.impression_url !== null && vignetteState.isOpen === true) {
      // trigger impression event
      triggerImpression(vignetteState.impression_url);
    }
  }, [vignetteState.isOpen, vignetteState.impression_url]);

  const handleClose = async () => {
    // handle close modal
    vignetteDispatch({ type: VignetteActionTypes.closeVignette });

    // reset data
    vignetteDispatch({ type: VignetteActionTypes.resetVignetteData });

    // fetch new data
    const newData = await getVignetteData();
    if (newData !== undefined) {
      // set data to state if we got new data
      vignetteDispatch({ type: VignetteActionTypes.setVignetteData, payload: newData });
    }
  };

  return (
    <>
      {vignetteState.icon !== null &&
        vignetteState.text !== null &&
        vignetteState.title !== null &&
        vignetteState.click !== null &&
        vignetteState.impression_url !== null &&
        vignetteState.isOpen === true && (
          // overlay
          <div className='fixed bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-4'>
            {/* card */}
            <div className=' flex min-w-[280px] max-w-sm flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-xl'>
              <div className='flex flex-row items-center justify-start gap-4 w-full' >
                <div className='flex-shrink-0 overflow-hidden rounded-lg'>
                  <Image
                    src={vignetteState.icon}
                    alt='ad'
                    width={192}
                    height={192}
                    className='h-16 w-16 bg-black object-contain'
                  />
                </div>
                <div className='flex flex-col justify-start'>
                  <h2 className='text-lg leading-6'>{vignetteState.title}</h2>
                  <p className='text-sm'>{vignetteState.text}</p>
                </div>
              </div>
              <div className='flex w-full flex-row justify-between gap-4'>
                <button
                  type='button'
                  className='cursor-pointer rounded-lg border border-gray-400 bg-transparent px-4 py-2 text-sm tracking-wider focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 disabled:pointer-events-none disabled:opacity-50'
                  onClick={handleClose}
                >
                  Close
                </button>
                <Link
                  href={vignetteState.click}
                  target='_blank'
                  rel='noreferrer'
                  onClick={handleClose}
                  className='flex-1 cursor-pointer rounded-lg border border-slate-400 bg-blue-500 px-6 py-3 text-center text-sm tracking-wider text-white'
                >
                  Continue
                </Link>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Vignette;
