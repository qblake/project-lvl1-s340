import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';
import { runGame } from '..';

const findGcd = (a, b) => {
  if (b) {
    return findGcd(b, a % b);
  }
  return a;
};

const gcdGame = () => ({
  getDescription: 'Find the greatest common divisor of given numbers.',

  getQuiz: () => {
    const firstNumber = getRandomNumber(100) + 1;
    const secondNumber = getRandomNumber(100) + 1;
    const question = `${firstNumber} ${secondNumber}`;
    const answer = String(findGcd(firstNumber, secondNumber));
    return cons(question, answer);
  },
});

const runGcdGame = () => {
  runGame(gcdGame());
};

export default runGcdGame;
