import { HandThumbUpIcon } from '@heroicons/react/24/solid';

interface IThumbUpProps {}

const ThumbUp = ({}: IThumbUpProps) => {
  return (
    <div className='absolute top-10'>
      <div className='relative flex h-44 w-44 content-center items-center'>
        <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' className='absolute h-full w-full -rotate-45'>
          <defs>
            <linearGradient x1='50%' y1='92.034%' x2='50%' y2='7.2%' id='a'>
              <stop offset='0%' stopColor='#6366f1' />
              <stop offset='100%' stopColor='#ec4899' />
            </linearGradient>
          </defs>
          <path
            fill='url(#a)'
            // className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            d="M31.2,-49.2C43.3,-47,57.9,-44.4,60.4,-36.2C63,-27.9,53.5,-14,49.4,-2.3C45.4,9.3,46.8,18.6,46.5,30.7C46.2,42.9,44.2,57.9,36.1,63.4C28.1,68.9,14,64.9,1.2,62.9C-11.7,60.9,-23.5,60.9,-32.4,55.9C-41.2,50.9,-47.2,40.8,-53.7,30.7C-60.1,20.5,-66.9,10.2,-65.7,0.7C-64.6,-8.9,-55.5,-17.9,-48.2,-26.5C-40.9,-35.2,-35.5,-43.6,-27.7,-48.3C-20,-53,-10,-54,-0.2,-53.6C9.5,-53.2,19.1,-51.4,31.2,-49.2Z"
            transform='translate(100 100)'
          />
        </svg>
        <HandThumbUpIcon className='absolute left-0 right-0 z-10 ml-auto mr-auto h-6 w-6 text-center text-yellow-200 ' />
      </div>
    </div>
  );
};

export default ThumbUp;
