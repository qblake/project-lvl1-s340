import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = () => readlineSync.question('Your answer: ');

const sayHelloToUser = () => {
  const name = getUserName();
  console.log(`Hello, ${name}!`);
};

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const showWelcomeMessage = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
};

const runGame = (game) => {
  showWelcomeMessage(game.getDescription);

  const name = getUserName();
  console.log(`Hello, ${name}!`);
  console.log('');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const quiz = game.getQuiz();
    const question = car(quiz);
    const answer = cdr(quiz);
    askQuestion(question);
    if (answer === getUserAnswer()) {
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

export {
  sayHelloToUser, runGame,
};
