interface IReviewsContainerProps {
  children: React.ReactNode;
  title?: string;
}

const ReviewsContainer = ({ children, title = 'Latest winners!' }: IReviewsContainerProps) => {
  return (
    <section className='flex w-full flex-col gap-2 max-w-3xl'>
      <h1 className='text-2xl tracking-wider'>{title}</h1>
      <div className='flex max-h-[350px] w-full flex-col gap-4 overflow-y-auto px-1 py-2'>{children}</div>
    </section>
  );
};

export default ReviewsContainer;
