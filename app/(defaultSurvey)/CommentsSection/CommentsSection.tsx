import { getDictionary } from '@i18n/i18n';
import { TValidLocale, TValidOffer } from 'config';
import makeCommentsForFinanceSurvey from './makeCommentsForFinanceSurvey';
import Comment from './Comment';
import UserInput from './UserInput';

interface ICommentsSectionProps {
  offer: TValidOffer;
  language: TValidLocale;
}

const CommentsSection = async ({ offer, language }: ICommentsSectionProps) => {
  const t = await getDictionary(offer, language);

  const comments = makeCommentsForFinanceSurvey(t.CommentSection.Comments);

  return (
    <section className='w-full max-w-4xl px-4 py-4'>
      <div className='flex flex-row items-center justify-between font-bold'>
        <h1 className='text-slate-100'>{t.CommentSection.title}</h1>
        <p className='text-xs text-slate-200'>{t.CommentSection.sortBy}</p>
      </div>
      <hr className='my-3 h-[2px] bg-slate-50' />
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          name={comment.name}
          comment={comment.comment}
          likes={comment.likes}
          timeAgo={comment.timeAgo}
          isSubComment={comment.isSubComment}
          likeWord={comment.likeWord}
        />
      ))}
      <UserInput userInput={t.CommentSection.UserInput} />
    </section>
  );
};

export default CommentsSection;
