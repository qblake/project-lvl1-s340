import readlineSync from 'readline-sync';

function getUserName() {
  return readlineSync.question('May I have your name? ');
}

const sayHelloToUser = () => {
  const name = getUserName();
  console.log(`Hello, ${name}!`);
};

const isEven = n => n % 2 === 0;

const runEvenGame = () => {
  const name = getUserName();
  console.log(`Hello, ${name}!`);
  console.log('');

  let correctAnswers = 0;
  while (correctAnswers < 3) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((isEven(number) && answer === 'yes') || (!isEven(number) && answer === 'no')) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      correctAnswers = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { sayHelloToUser, runEvenGame };
