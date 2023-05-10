'use client';

import { AppContext } from '@context/Context';
import { ActionsType } from '@context/actionsTypes';
import Image from 'next/image';
import { useContext } from 'react';

interface IReviewImagesProps {
  image: string;
}

const ReviewImages = ({ image }: IReviewImagesProps) => {
  const { dispatch } = useContext(AppContext);

  const handleShowImage = (img: string) => {
    dispatch({
      type: ActionsType.setImageFullScreen,
      payload: {
        visible: true,
        src: img,
      },
    });
  };
  return (
    <div className='relative h-10 w-10 cursor-pointer rounded-sm' onClick={() => handleShowImage(image)}>
      <Image src={image} alt={'whatever'} fill className='object-cover' />
    </div>
  );
};

export default ReviewImages;
