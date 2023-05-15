'use client';

import { useAppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface IFullScreenImageProps {}

const FullScreenImage = ({}: IFullScreenImageProps) => {
  const { surveyState: state, surveyDispatch: dispatch } = useAppContext();

  const handleClick = () => {
    dispatch({
      type: ActionsType.setImageFullScreen,
      payload: {
        visible: false,
        src: null,
      },
    });
  };

  return (
    <>
      {state.fullScreenImage.visible && (
        <div
          className=' fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-slate-950 bg-opacity-70'
          onClick={handleClick}
        >
          <XMarkIcon className='absolute bottom-2 right-2 z-40 h-8 w-8 rounded-sm bg-slate-950 text-white' />
          <img
            src={state.fullScreenImage.src!}
            alt='whatever'
            className='w-5/6 rounded-md sm:w-3/6 md:w-1/6'
          />
        </div>
      )}
    </>
  );
};

export default FullScreenImage;
