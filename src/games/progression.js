import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils/utils';
import { runGame } from '..';

const getArithmeticProgression = (number) => {
  const startValue = getRandomNumber(10);
  const delta = getRandomNumber(10);
  return Array.from(Array(number), (_, x) => startValue + x * delta);
};

const getQuestion = (progression, index) => progression.map((v, i) => ((i === index) ? '..' : v)).join(' ');

const progressionGame = () => ({
  getDescription: () => 'What number is missing in this progression?',

  getQuiz: () => {
    const progressionLength = 10;

    const progression = getArithmeticProgression(progressionLength);
    const hiddenElementIndex = getRandomNumber(progressionLength);

    const question = getQuestion(progression, hiddenElementIndex);
    const answer = String(progression[hiddenElementIndex]);

    return cons(question, answer);
  },
});

const runProgressionGame = () => {
  runGame(progressionGame());
};

export default runProgressionGame;
