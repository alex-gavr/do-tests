interface IFooterProps {}

const Footer = ({}: IFooterProps) => {
  return (
    <footer className='mt-5 flex w-full flex-col items-center justify-center gap-2 p-4'>
      <div className='flex flex-row items-center justify-center'>
        <a href='https://www.google.com/' className='border-r-[1px] border-slate-400 p-2 text-xs text-slate-300'>
          Privacy Policy
        </a>
        <a href='https://www.google.com/' className='border-l-[1px] border-slate-400 p-2 text-xs text-slate-300'>
          Cookie Policy
        </a>
      </div>
      <p className='text-xs text-slate-300'>@ 2023</p>
    </footer>
  );
};

export default Footer;
