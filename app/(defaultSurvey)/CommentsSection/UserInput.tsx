import { TDefaultDictionary } from '@i18n/0/en';
import Image from 'next/image';

interface IUserInputProps {
  userInput: TDefaultDictionary['CommentSection']['UserInput'];
}

const UserInput = ({ userInput }: IUserInputProps) => {
  return (
    <div className='mt-4 flex w-full flex-row items-start justify-start gap-2'>
      <Image
        src='/images/financeSurvey/people/unnamed.webp'
        width='40'
        height='40'
        alt='person'
        className='h-10 w-10 shrink-0 rounded-md'
        loading='lazy'
      />
      <div className='flex w-full flex-col items-start justify-start gap-4'>
        <label htmlFor='nameInput' className='hidden'>
          {userInput.labelName}
        </label>
        <input
          type='text'
          name='nameInput'
          id='nameInput'
          placeholder={`${userInput.labelName}...`}
          className='h-8 w-full rounded-sm pl-2'
          aria-label='Name input'
        />
        <label htmlFor='commentTextarea' className='hidden'>
          {userInput.labelComment}
        </label>
        <textarea
          name='commentTextarea'
          id='commentTextarea'
          cols={30}
          rows={5}
          className='w-full rounded-sm p-2'
          placeholder={`${userInput.labelComment}...`}
          aria-label='Comment textarea'
        ></textarea>
        <div className='flex w-full flex-row items-center justify-between'>
          <div className='flex flex-row items-center justify-center gap-2'>
            <label htmlFor='checkboxInput' className='hidden'>
              {userInput.labelCheckBox}
            </label>
            <input type='checkbox' name='checkboxInput' id='checkboxInput' aria-label='Select option' className='h-4 w-4' />
            <p className='text-[0.6rem] text-slate-400'>{userInput.paragraph}</p>
          </div>
          <button type='button' className='rounded bg-neutral-300 px-4 py-1 text-sm text-slate-900'>
            {userInput.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
