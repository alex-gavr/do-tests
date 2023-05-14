import { randomIntFromInterval } from '@utils/randomInt';
import { adjectives, nouns } from './adjAndNouns';

const generateRandomName = (): string => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomNum = randomIntFromInterval(1, 999);
  return `${adjective}-${noun}${randomNum}`;
};

export default generateRandomName;
