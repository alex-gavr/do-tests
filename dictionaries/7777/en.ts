export const dictionary = {
  welcome: {
    heading: 'which country has higher population?',
    ScoresContainer: {
      score: 'score',
      hintsAvailable: 'hints available',
    },
    Countries: {
      CountryCard: {
        positiveFeedback: [
          'Great job!',
          'You got it right!',
          'Correct answer!',
          'Well done!',
          "You're absolutely right!",
          "That's the correct answer!",
          'Nice!',
          'You nailed it! ',
          'Well played!',
          'Excellent!',
          'Your answer is correct!',
          'Spot on!',
          'You got it!',
          'Brilliant!',
          "That's the right answer!",
          'Nice work!',
          "You're on fire!",
        ],
        lost: 'incorrect 😢',
        instructions: 'pick top or bottom country',
        secondsLeft: 'seconds left',
      },
      Button: {
        nothingPicked: 'select a country',
        answerIsCorrect: 'next pair',
        confirmCountry: 'confirm',
      },
      HintButton: {
        hintShown: 'hope it helps',
        noHintAvailable: 'no hint credits left',
        getHint: 'get hint',
      },
    },
  },
  gameOver: {
    heading: 'Final Score',
    header: {
      leaderboardButton: 'leaderboard',
      topScore: 'top score',
      moreHintsButton: ' hints',
      hintsAvailable: 'hints available',
    },
    footer: {
      finish: 'finish',
      playAgain: 'play again',
    },
    roundScoreFeedback: {
      greatScore: [
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
      ],
      mediumScore: [
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
      ],
      zeroScore: [
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
      ],
    },
    topScoreFeedback: {
      biggerPhrases: [
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
      ],
      newBest: [
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
      ],
    },
    positiveFeedback: {
      text: [
        `Just a bit more to get the {{reachTarget}} position`,
        `Keep pushing to get {{reachTarget}} place!`,
        `A little more effort and you'll reach the {{reachTarget}} position!`,
        `Just a few more points to secure {{reachTarget}} place!`,
        `Keep going for that {{reachTarget}} position!`,
        `You're within reach of {{reachTarget}} place! Keep your focus! `,
        `You're on the verge of {{reachTarget}} position! Don't give up now! `,
        `So close! Aim higher for the {{reachTarget}} position!`,
        `{{reachTarget}} place is within sight! Keep pushing! `,
      ],
      nearTopThree: [
        `You're on the leaderboard's doorstep! Go for {{reachTarget}} position!`,
        `You're close to the top! {{reachTarget}} place awaits you!`,
      ],
    },
  },
  leaderboard: {
    heading: 'Leaderboard',
    paragraph: 'TOP 10 Legends of the game',
    totalPlayers: 'Total Players',
    playerCard: {
      you: 'you',
      topScore: 'Top Score',
      hints: 'Hints',
    },
    buttons: {
      back: 'back',
      playAgain: 'play again',
    }
  },
};

export default dictionary;

export type THigherLowerGameDictionary = typeof dictionary;
