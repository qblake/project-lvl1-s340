import readlineSync from 'readline-sync';
import EvenGame from './games/evengame';
import CalcGame from './games/calcgame';
import GcdGame from './games/gcdgame';
import BalanceGame from './games/balancegame';

const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = () => readlineSync.question('Your answer: ');

const sayHelloToUser = () => {
  const name = getUserName();
  console.log(`Hello, ${name}!`);
};

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const runGame = (game) => {
  console.log('Welcome to the Brain Games!');

  game.showWelcomeMessage();

  const name = getUserName();
  console.log(`Hello, ${name}!`);
  console.log('');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    askQuestion(game.getQuestion());
    if (game.isCorrectAnswer(getUserAnswer())) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      correctAnswers = 0;
    }
  }
  console.log('');
  console.log(`Congratulations, ${name}!`);
};

const runEvenGame = () => {
  runGame(new EvenGame());
};

const runCalcGame = () => {
  runGame(new CalcGame());
};

const runGcdGame = () => {
  runGame(new GcdGame());
};

const runBalanceGame = () => {
  runGame(new BalanceGame());
};

export {
  sayHelloToUser, runEvenGame, runCalcGame, runGcdGame, runBalanceGame,
};
