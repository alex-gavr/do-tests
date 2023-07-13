import Redirect from './Redirect';

interface IPageProps {}

const Page = ({}: IPageProps) => {
  return (
    <>
      <Redirect />
      <div className='flex flex-col min-h-screen justify-center items-center'>
        <h1 className='text-3xl'>Please wait while redirecting...</h1>
      </div>
    </>
  );
};

export default Page;
