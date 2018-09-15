import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';
import { runGame } from '..';

const calcGame = () => ({
  getDescription: () => 'What is the result of the expression?',

  getQuiz: () => {
    const firstNumber = getRandomNumber(10);
    const secondNumber = getRandomNumber(10);

    const sign = getRandomNumber(3);
    let question = '';
    let answer = '';
    switch (sign) {
      case 0:
        question = `${firstNumber} + ${secondNumber}`;
        answer = String(firstNumber + secondNumber);
        break;
      case 1:
        question = `${firstNumber} - ${secondNumber}`;
        answer = String(firstNumber - secondNumber);
        break;
      case 2:
        question = `${firstNumber} * ${secondNumber}`;
        answer = String(firstNumber * secondNumber);
        break;
      default:
    }

    return cons(question, answer);
  },
});

const runCalcGame = () => {
  runGame(calcGame());
};

export default runCalcGame;
