import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';
import { runGame } from '..';

const isBalanced = (numbers) => {
  const minNumeral = Math.min(...numbers);
  const maxNumeral = Math.max(...numbers);
  const distance = Math.abs(minNumeral - maxNumeral);
  return distance <= 1;
};

const balanceNumber = (array) => {
  const numbers = array;
  const minNumeral = Math.min(...numbers);
  const maxNumeral = Math.max(...numbers);

  const minNumeralIndex = numbers.indexOf(minNumeral);
  const maxNumeralIndex = numbers.indexOf(maxNumeral);

  numbers[minNumeralIndex] += 1;
  numbers[maxNumeralIndex] -= 1;
  return numbers;
};

const findBalancedNumber = (number) => {
  let result = String(number).split('').map(Number);
  while (!isBalanced(result)) {
    result = balanceNumber(result);
  }
  result = result.sort();
  return result.join('');
};

const balanceGame = () => ({
  getDescription: () => 'Balance the given number.',

  getQuiz: () => {
    const number = getRandomNumber(100);
    const balancedNumber = findBalancedNumber(number);
    return cons(number, balancedNumber);
  },
});

const runBalanceGame = () => {
  runGame(balanceGame());
};

export default runBalanceGame;
