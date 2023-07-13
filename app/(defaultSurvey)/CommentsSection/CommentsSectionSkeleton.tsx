import CommentSkeleton from './CommentSkeleton';

interface ICommentsSectionSkeletonProps {}

const CommentsSectionSkeleton = ({}: ICommentsSectionSkeletonProps) => {
  return (
    <section className='w-full max-w-4xl px-4 py-4 mt-2'>
      <div className='flex flex-row items-center justify-between w-full'>
        <span className='h-4 w-32 animate-pulse bg-slate-400 rounded-md' />
        <span className='h-4 w-20 animate-pulse bg-slate-400 rounded-md' />
      </div>
      <hr className='my-3 w-full h-[2px] bg-slate-200' />
      {[0, 1, 2, 3, 4].map((_, index) => {
        return <CommentSkeleton key={index} />;
      })}
    </section>
  );
};

export default CommentsSectionSkeleton;
