'use client';

interface IButtonForProxyProps {}

const ButtonForProxy = ({}: IButtonForProxyProps) => {
  const handleClick = () => {
    window.location.replace('https://google.com');
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <button
        type='button'
        className='cursor-pointer rounded-lg border border-slate-400 bg-blue-500 px-6 py-3 text-center text-sm tracking-wider text-white'
        onClick={handleClick}
      >
        Rare find! <br />
        Click to claim gift!
      </button>
    </div>
  );
};

export default ButtonForProxy;
