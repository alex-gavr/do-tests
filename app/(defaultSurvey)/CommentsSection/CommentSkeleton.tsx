interface ICommentSkeletonProps {}

const CommentSkeleton = ({}: ICommentSkeletonProps) => {
  return (
    <div className='mt-[10px] flex flex-row items-start justify-start gap-4 w-full'>
      {/* Image */}
      <span className='h-10 w-10 shrink-0 rounded-md bg-slate-600 animate-pulse' />

      <div className='flex w-full flex-col items-start justify-start gap-1 '>
        <div className='flex w-full flex-1 flex-col items-start justify-start gap-2 rounded-sm bg-neutral-600 p-2 min-h-[60px]'>
          <span className='h-6 w-24 rounded-sm bg-slate-100 animate-pulse' />
          <span className='h-4 w-36 rounded-md bg-slate-300 animate-pulse' />
        </div>
        <div className='flex w-full flex-row items-start justify-between gap-4 px-1'>
          <div className='flex flex-row items-center justify-center gap-2'>
            <p className=' bg-slate-400 h-2 w-5 rounded-sm animate-pulse' />
            <p className=' bg-slate-400 h-2 w-5 rounded-sm animate-pulse' />
          </div>
          <p className=' bg-slate-400 h-2 w-16 rounded-sm animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default CommentSkeleton;
