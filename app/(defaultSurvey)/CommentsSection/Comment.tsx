import { cn } from '@utils/cn';

interface ICommentProps {
    id: number;
    name: string;
    comment: string;
    likes: string;
    timeAgo: string;
    isSubComment: boolean;
    likeWord: string;
}

const Comment = ({ id, name, comment, likes, timeAgo, isSubComment, likeWord }: ICommentProps) => {
  return (
    <div className={cn('mt-2 flex flex-row items-start justify-start gap-4', isSubComment && 'ml-auto w-10/12')}>
      <img
        src={`/images/financeSurvey/people/person-${id}.webp`}
        width='40'
        height='40'
        alt='person'
        className='h-10 w-10 shrink-0 rounded-md'
        loading='lazy'
      />
      <div className='flex w-full flex-col items-start justify-start gap-1'>
        <div className='flex w-full flex-1 flex-col items-start justify-start gap-2 rounded-sm bg-neutral-600 p-2'>
          <h2 className='text-sm font-bold text-slate-100'>{name}</h2>
          <p className='text-xs text-slate-300'>{comment}</p>
        </div>
        <div className='flex w-full flex-row items-start justify-between gap-4 px-1'>
          <div className='flex flex-row items-center justify-center gap-2'>
            <p className='text-[0.6rem] tracking-wider text-slate-400'>{likeWord}</p>
            <p className='text-[0.6rem] tracking-wider text-slate-400'>{likes}</p>
          </div>
          <p className='text-[0.6rem] tracking-wider text-slate-400'>{timeAgo}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
