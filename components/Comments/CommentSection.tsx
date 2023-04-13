import React from 'react';
import CareerComments from './CommentsData';
import Comments from './Comments';

const CommentSection = () => {
  return (
    <section className='w-full max-w-2xl overflow-x-hidden'>
      <h2 className='text-base sm:text-lg md:text-2xl'>What other people say</h2>
      <Comments comments={CareerComments} />
    </section>
  );
};

const MemoizedCommentSection = React.memo(CommentSection);

export default MemoizedCommentSection;
