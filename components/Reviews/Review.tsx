import LikeButton from '@components/LikeButton/LikeButton';
import { StarIcon } from '@heroicons/react/20/solid';
import { cn } from '@utils/cn';
import Image from 'next/image';
import ReviewImages from './ReviewImages';

interface IReview {
  id: number;
  title: string;
  text: string;
  likes: number;
  rating: number;
  personImage: string;
  personName: string;
  winImages?: Array<string>;
}
interface IReviewProps {
  review: IReview;
}

const Review = ({ review }: IReviewProps) => {
  return (
    <div key={review.id} className='relative flex flex-col rounded-md bg-neutral-100 p-2 sm:flex-row mr-1'>
      <LikeButton likes={review.likes} />
      <div className='flex items-center sm:flex-col sm:items-start'>
        <Image
          src={review.personImage}
          alt={`${review.personName}.`}
          width={600}
          height={600}
          className='h-12 w-12 rounded-full object-cover'
        />

        <div className='ml-4 sm:ml-0 sm:mt-4'>
          <p className='text-sm text-gray-900'>{review.personName}</p>
          <div className='mt-1 flex items-center'>
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={cn(
                  review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                  'h-5 w-5 flex-shrink-0',
                )}
                aria-hidden='true'
              />
            ))}
          </div>
        </div>
      </div>

      <div className='mt-6 sm:ml-4 sm:mt-0'>
        <h3 className='text-sm font-medium text-gray-900'>{review.title}</h3>
        <p className='sr-only'>{review.rating} out of 5 stars</p>

        <div className='mt-2 flex flex-col gap-2 text-sm text-gray-600 sm:pr-10'>
          <p>{review.text}</p>{' '}
          <div className='flex flex-row justify-start gap-2 mb-2'>
            {review.winImages &&
              review.winImages.length > 0 &&
              review.winImages.map((image, i) => <ReviewImages key={i} image={image} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
