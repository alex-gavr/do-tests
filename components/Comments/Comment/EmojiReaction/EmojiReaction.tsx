'use client';
import React, { useState } from 'react';
import { IEmojis } from '@components/Comments/types';

const EmojiReaction = ({ count, emoji }: Omit<IEmojis, 'id'>) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [reactionCount, setReactionCount] = useState(count);
  const baseClassName =
    'flex flex-row justify-center items-center gap-2 border border-gray-300 rounded-md p-2 cursor-pointer transition duration-1000 ease-in-out';
  const variantClassName =
    clicked && emoji === '👍'
      ? 'bg-green-500'
      : clicked && emoji === '👎'
      ? 'bg-red-500'
      : clicked && emoji === '😁'
      ? 'bg-purple-500'
      : null;

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      setReactionCount((prev) => prev + 1);
    } else if (clicked) {
      setClicked(false);
      setReactionCount((prev) => prev - 1);
    }
  };

  return (
    <button type='button' className={`${baseClassName} ${variantClassName}`} onClick={handleClick}>
      <span role='img' aria-label='emoji'>
        {emoji}
      </span>
      <span
        className={
          clicked ? 'text-slate-50 transition duration-1000' : 'text-gray-950 transition duration-1000'
        }
      >
        {reactionCount}
      </span>
    </button>
  );
};

export default EmojiReaction;
