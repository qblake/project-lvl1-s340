import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';
import { runGame } from '..';

const hasDivisorWithZeroRemainder = (number, divisor) => {
  if (divisor === 1) {
    return false;
  }
  if (number % divisor === 0) {
    return true;
  }
  return hasDivisorWithZeroRemainder(number, divisor - 1);
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  return !hasDivisorWithZeroRemainder(number, Math.floor(number / 2));
};

const primeGame = () => ({
  getDescription: 'Is this number prime?',

  getQuiz: () => {
    const number = getRandomNumber(100);
    return cons(number, isPrime(number) ? 'yes' : 'no');
  },
});

const runPrimeGame = () => {
  runGame(primeGame());
};

export default runPrimeGame;
