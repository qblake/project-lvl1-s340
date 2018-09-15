import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';
import { runGame } from '..';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1 && num !== 0;
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
