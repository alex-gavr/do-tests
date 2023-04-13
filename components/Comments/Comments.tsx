'use client';
import { useHorizontalScroll } from '@hooks/useHorizontalScroll';
import Comment from './Comment/Comment';
import { ICommentData } from './types';

interface IProps {
  comments: ICommentData[];
}
const Comments = ({ comments }: IProps) => {
  const ref = useHorizontalScroll<HTMLDivElement>();
  return (
    <div className='flex w-full flex-row items-start justify-start gap-4 overflow-x-scroll py-4' ref={ref}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          img={comment.img}
          name={comment.name}
          emojis={comment.emojis}
          comment={comment.comment}
          time={comment.time}
        />
      ))}
    </div>
  );
};

export default Comments;
