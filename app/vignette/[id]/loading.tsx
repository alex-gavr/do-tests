interface ILoadingProps {}

const Loading = ({}: ILoadingProps) => {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-black/60 px-4'>
      <div className=' flex h-48 min-w-[300px] max-w-sm animate-pulse flex-col items-center justify-center gap-4 rounded-lg bg-white p-4 shadow-2xl' />
    </div>
  );
};

export default Loading;
