import LeaderboardSuspense from '@components/HigherLowerGameUi/Skeletons/LeaderboardSuspense';

interface ILoadingProps {}

const Loading = ({}: ILoadingProps) => {
  return <LeaderboardSuspense />;
};

export default Loading;
