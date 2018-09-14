import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';

const isEven = n => n % 2 === 0;

function EvenGame() {
  this.getDescription = () => 'Answer "yes" if number even otherwise answer "no".';

  this.getQuiz = () => {
    const number = getRandomNumber(100);
    return cons(number, isEven(number) ? 'yes' : 'no');
  };
}

export default EvenGame;
