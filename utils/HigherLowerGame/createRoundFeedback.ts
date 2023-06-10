import { randomIntFromInterval } from '@utils/randomInt';
import { replaceTexts } from '@utils/replaceTexts';
import { THigherLowerGameDictionary } from 'dictionaries/7777/en';

export const createRoundFeedback = (
  roundScore: number,
  topScore: number,
  position: number,
  roundScoreFeedbackTexts: THigherLowerGameDictionary['gameOver']['roundScoreFeedback'],
  topScoreFeedbackTexts: THigherLowerGameDictionary['gameOver']['topScoreFeedback'],
  positiveFeedbackTexts: THigherLowerGameDictionary['gameOver']['positiveFeedback'],
) => {
  let roundScoreFeedback = '';
  let topScoreFeedback = '';

  // New Top Score
  if (roundScore === topScore) {
    const rInt = randomIntFromInterval(0, roundScoreFeedbackTexts.greatScore.length - 1);
    const rInt2 = randomIntFromInterval(0, topScoreFeedbackTexts.newBest.length - 1);
    roundScoreFeedback = roundScoreFeedbackTexts.greatScore[rInt];
    topScoreFeedback = topScoreFeedbackTexts.newBest[rInt2];
  }

  if (roundScore === 0) {
    const rInt = randomIntFromInterval(0, roundScoreFeedbackTexts.zeroScore.length - 1);
    const rInt2 = randomIntFromInterval(0, topScoreFeedbackTexts.biggerPhrases.length - 1);
    roundScoreFeedback = roundScoreFeedbackTexts.zeroScore[rInt];
    topScoreFeedback = topScoreFeedbackTexts.biggerPhrases[rInt2];
  }
  if (roundScore > 0 && roundScore < 5) {
    const rInt = randomIntFromInterval(0, roundScoreFeedbackTexts.mediumScore.length - 1);
    const rInt2 = randomIntFromInterval(0, topScoreFeedbackTexts.biggerPhrases.length - 1);
    roundScoreFeedback = roundScoreFeedbackTexts.mediumScore[rInt];
    topScoreFeedback = topScoreFeedbackTexts.biggerPhrases[rInt2];
  }
  if (position === 1) {
    const rInt = randomIntFromInterval(0, roundScoreFeedbackTexts.greatScore.length - 1);
    roundScoreFeedback = roundScoreFeedbackTexts.greatScore[rInt];
    topScoreFeedback = 'You are the best! Great Job, Legend!';
  }
  if (roundScore >= 5) {
    const rInt = randomIntFromInterval(0, roundScoreFeedbackTexts.greatScore.length - 1);
    // const rInt2 = randomIntFromInterval(0, positionMessage());
    roundScoreFeedback = roundScoreFeedbackTexts.greatScore[rInt];
    topScoreFeedback = positionMessage(position, positiveFeedbackTexts);
  }

  return {
    roundScoreFeedback,
    topScoreFeedback,
  };
};

const positionMessage = (
  position: number,
  positiveFeedbackTexts: THigherLowerGameDictionary['gameOver']['positiveFeedback'],
) => {
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

      console.log(position, reachTarget);
      
  const variants: string[] = replaceTexts(
    { reachTarget: reachTarget.toString() },
    positiveFeedbackTexts.text,
  );

  const nearTopThree: string[] = replaceTexts(
    { reachTarget: reachTarget.toString() },
    positiveFeedbackTexts.nearTopThree,
  );

  // const text = [
  //   `Just a bit more to get the ${reachTarget} position`,
  //   `Keep pushing to get ${reachTarget} place!`,
  //   `A little more effort and you'll reach the ${reachTarget} position!`,
  //   `Just a few more points to secure ${reachTarget} place!`,
  //   `Keep going for that ${reachTarget} position!`,
  //   `You're within reach of ${reachTarget} place! Keep your focus! `,
  //   `You're on the verge of ${reachTarget} position! Don't give up now! `,
  //   `So close! Aim higher for the ${reachTarget} position!`,
  //   `${reachTarget} place is within sight! Keep pushing! `,
  // ];

  if (reachTarget < 10) {
    const rInt = randomIntFromInterval(0, positiveFeedbackTexts.nearTopThree.length - 1);
    return nearTopThree[rInt];
  } else {
    const rInt = randomIntFromInterval(0, positiveFeedbackTexts.text.length - 1);
    return variants[rInt];
  }
};
