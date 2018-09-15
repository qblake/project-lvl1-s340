import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';
import { runGame } from '..';

const isBalanced = (numbers) => {
  let minNumeral = numbers[0];
  let maxNumeral = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    const numeral = numbers[i];
    if (numeral < minNumeral) {
      minNumeral = numeral;
    }
    if (numeral > maxNumeral) {
      maxNumeral = numeral;
    }
  }

  const distance = Math.abs(minNumeral - maxNumeral);
  return distance <= 1;
};

const balanceNumber = (array) => {
  const numbers = array;
  let minNumeralIndex = 0;
  let maxNumeralIndex = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    const numeral = numbers[i];
    if (numeral < numbers[minNumeralIndex]) {
      minNumeralIndex = i;
    }
    if (numeral > numbers[maxNumeralIndex]) {
      maxNumeralIndex = i;
    }
  }
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
