interface IDebugProps {
  debug: boolean;
}

const Debug = ({ debug }: IDebugProps) => {
  return (
    <>
      {debug && (
        <p className='fixed right-2 top-2 rounded border border-red-500 bg-slate-900 px-4 py-2 text-xs text-emerald-300'>
          You are in a debug mode
        </p>
      )}
    </>
  );
};

export default Debug;
