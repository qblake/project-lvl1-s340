import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';

function CalcGame() {
  this.getDescription = () => 'What is the result of the expression?';

  this.getQuiz = () => {
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
  };
}

export default CalcGame;
