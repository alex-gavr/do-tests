import { randomIntFromInterval } from '@utils/randomInt';

export const createRoundFeedback = (roundScore: number, topScore: number, position: number) => {
  let roundScoreFeedback = '';
  let topScoreFeedback = '';
  

  // New Top Score
  if (roundScore === topScore) {
    const rInt = randomIntFromInterval(0, greatScore.length - 1);
    const rInt2 = randomIntFromInterval(0, newBest.length - 1);
    roundScoreFeedback = greatScore[rInt];
    topScoreFeedback = newBest[rInt2];
  }

  if (roundScore === 0) {
    const rInt = randomIntFromInterval(0, zeroScore.length - 1);
    const rInt2 = randomIntFromInterval(0, biggerPhrases.length - 1);
    roundScoreFeedback = zeroScore[rInt];
    topScoreFeedback = biggerPhrases[rInt2];
  }
  if (roundScore > 0 && roundScore < 5) {
    const rInt = randomIntFromInterval(0, mediumScore.length - 1);
    const rInt2 = randomIntFromInterval(0, biggerPhrases.length - 1);
    roundScoreFeedback = mediumScore[rInt];
    topScoreFeedback = biggerPhrases[rInt2];
  }
  if (position === 1) {
    const rInt = randomIntFromInterval(0, greatScore.length - 1);
    roundScoreFeedback = greatScore[rInt];
    topScoreFeedback = 'You are the best! Great Job, Legend!';
  }
  if (roundScore >= 5) {
    const rInt = randomIntFromInterval(0, greatScore.length - 1);
    // const rInt2 = randomIntFromInterval(0, positionMessage());
    roundScoreFeedback = greatScore[rInt];
    topScoreFeedback = positionMessage(position);
  }

  return {
    roundScoreFeedback,
    topScoreFeedback,
  };
};

const greatScore = [
  'Bravo!',
  'Awesome!',
  'Impressive!',
  'Outstanding!',
  'Unbelievable!',
  'Spectacular!',
  'Phenomenal!',
  'Incredible!',
  'Superb!',
  'Fantastic!',
  'Great effort!',
  'Nice work!',
  'Excellent effort!',
];
const mediumScore = [
  'Keep trying!',
  "You've got this!",
  "Don't give up!",
  'Next time!',
  'Keep going!',
  'Practice makes perfect!',
  'One more try!',
  "You're improving!",
  'Stay determined!',
  'Push yourself!',
  "You're improving!",
  'Not bad!',
  'Almost there!',
];
const zeroScore = [
  'Keep your chin up!',
  'Stay positive!',
  'Every failure is a lesson!',
  "It's just the beginning!",
  'Rise from the ashes!',
  'Embrace the challenge!',
  'Your journey starts now!',
  "Don't let setbacks define you!",
  'Focus on progress, not perfection!',
  'Keep pushing forward!',
];

const biggerPhrases = [
  'Aim higher and beat your top score!',
  'Keep pushing and surpass your best!',
  "With practice, you'll reach new heights!",
  "One more try and you'll break your record!",
  'Challenge yourself to outdo your top score!',
  'Your next attempt will shatter your personal best!',
  'Your top score is within reach!',
  "You're on the right track!",
  'Surpass your highest score next time!',
  'Your determination will surpass your top score!',
  'Aim for the stars and beat your own record!',
];

const newBest = [
  'New record! Amazing job!',
  'Congratulations on surpassing your best!',
  'You outdid yourself! Well done!',
  "You've reached new heights! Awesome!",
  'Top score shattered! Keep it up!',
  "Incredible! You've set a new standard!",
  "Unbelievable! You've raised the bar!",
  'Breaking records! Keep pushing!',
  'Astonishing performance! Keep going!',
  "You're on fire! Best score yet!",
];

const positionMessage = (position: number) => {
  const reachTarget =
    position > 100
      ? 100
      : position > 50 && position <= 100
      ? 50
      : position > 25 && position <= 50
      ? 25
      : position > 20 && position <= 25
      ? 20
      : position > 15 && position <= 20
      ? 15
      : position > 10 && position <= 15
      ? 10
      : position > 5 && position <= 10
      ? 5
      : position > 3 && position <= 5
      ? 3
      : position === 3
      ? 2
      : 1;

  const variants = [
    `Just a bit more to get the ${reachTarget} position`,
    `Keep pushing to get ${reachTarget} place!`,
    `A little more effort and you'll reach the ${reachTarget} position!`,
    `Just a few more points to secure ${reachTarget} place!`,
    `Keep going for that ${reachTarget} position!`,
    `You're within reach of ${reachTarget} place! Keep your focus! `,
    `You're on the verge of ${reachTarget} position! Don't give up now! `,
    `So close! Aim higher for the ${reachTarget} position!`,
    `${reachTarget} place is within sight! Keep pushing! `,
  ];

  const nearTopThree = [
    `You're on the leaderboard's doorstep! Go for ${reachTarget} position!`,
    `You're close to the top! ${reachTarget} place awaits you!`,
  ];

  if (reachTarget < 10) {
    const rInt = randomIntFromInterval(0, nearTopThree.length - 1);
    return nearTopThree[rInt];
  } else {
    const rInt = randomIntFromInterval(0, variants.length - 1);
    return variants[rInt];
  }
};
