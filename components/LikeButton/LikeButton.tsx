'use client';

import { HandThumbUpIcon } from '@heroicons/react/20/solid';
import { cn } from '@utils/cn';
import { useState } from 'react';

interface ILikeButtonProps {
  likes: number;
}

const LikeButton = ({ likes }: ILikeButtonProps) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(likes);

  const handleClick = () => {
    setClicked((prev) => !prev);
    if (clicked) {
      setLikeCount((prev) => prev - 1);
    }
    if (!clicked) {
      setLikeCount((prev) => prev + 1);
    }
  };

  return (
    <div
      className='absolute bottom-4 right-2 flex flex-row items-center justify-center gap-1'
      onClick={handleClick}
    >
      <HandThumbUpIcon className={cn(clicked ? 'text-green-600' : 'text-slate-500', 'w-4, clicked h-4 ')} />
      <p className='text-xs text-gray-900'>{likeCount}</p>
    </div>
  );
};

export default LikeButton;
