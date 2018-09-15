import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';
import { runGame } from '..';

const isEven = n => n % 2 === 0;

function EvenGame() {
  this.getDescription = () => 'Answer "yes" if number even otherwise answer "no".';

  this.getQuiz = () => {
    const number = getRandomNumber(100);
    return cons(number, isEven(number) ? 'yes' : 'no');
  };
}
const runEvenGame = () => {
  runGame(new EvenGame());
};

export default runEvenGame;
