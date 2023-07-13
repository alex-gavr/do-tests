interface IHeaderProps {}

const Header = ({}: IHeaderProps) => {
  return (
    <header className='w-full p-4 md:p-8'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <img className='h-7 w-7' alt='logo' src='/images/financeSurvey/icon-survey.svg' />
        <span className='text-sm text-slate-200 sm:text-base md:text-lg lg:text-xl'>Online Test $$$</span>
      </div>
    </header>
  );
};

export default Header;
