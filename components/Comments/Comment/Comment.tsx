import EmojiReaction from './EmojiReaction/EmojiReaction';
import { ICommentData } from '../types';
import { AppContext } from '@context/Context';
import { useContext } from 'react';
import makeExitUrl from '@utils/makeExitUrl';
import { useRouter } from 'next/navigation';
import production from '@utils/isProd';
import debug from '@utils/isDebug';
import { useClientSearchParams } from '@hooks/useClientSearchParams';
import { sendEvent } from '@utils/sendEvent';

const Comment = ({ img, name, comment, emojis, time }: Omit<ICommentData, 'id'>) => {
  const { state } = useContext(AppContext);
  const { offerId } = useClientSearchParams();
  const router = useRouter();
  const handleClick = () => {
    if (production && !debug) {
      const eventData = {
        track: 'Photo Exit',
        offerId: offerId,
        imgId: img,
      };
      sendEvent(eventData);
    }
    const url = makeExitUrl(state.exits.photoExit);
    window.open(url, '_black');
    router.replace(url);
  };

  return (
    <div className='relative flex min-w-[280px] flex-col items-center justify-start gap-4 rounded-2xl bg-neutral-100 p-4'>
      <p className='absolute right-4 top-4 text-xs italic'>{time}</p>
      <div className='grid grid-cols-2 items-center gap-4'>
        <button
          type='button'
          className='relative h-28 w-28 self-start overflow-hidden rounded-lg'
          onClick={handleClick}
        >
          <img src={`${img}`} alt='reviewer' loading='lazy' className='bg-center' />
        </button>
        <h2 className='flex-1 text-xl font-bold capitalize'>{name}</h2>
      </div>
      <div className='flex w-full flex-col items-start justify-center gap-4'>
        <p className='text-xs tracking-widest'>{comment}</p>
        <div className='flex flex-row items-center justify-center gap-4'>
          {emojis.map((emoji) => (
            <EmojiReaction key={emoji.id} emoji={emoji.emoji} count={emoji.count} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
