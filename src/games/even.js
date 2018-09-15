import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';
import { runGame } from '..';

const isEven = n => n % 2 === 0;

const evenGame = () => ({
  getDescription: () => 'Answer "yes" if number even otherwise answer "no".',

  getQuiz: () => {
    const number = getRandomNumber(100);
    return cons(number, isEven(number) ? 'yes' : 'no');
  },
});

const runEvenGame = () => {
  runGame(evenGame());
};

export default runEvenGame;
