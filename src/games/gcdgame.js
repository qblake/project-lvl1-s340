function findGcd(a, b) {
  if (b) {
    return findGcd(b, a % b);
  }
  return a;
}

class GcdGame {
  constructor() {
    this.welcomeMessage = 'Find the greatest common divisor of given numbers.';
  }

  showWelcomeMessage() {
    console.log(this.welcomeMessage);
    console.log('');
  }

  getQuestion() {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;

    this.result = String(findGcd(firstNumber, secondNumber));

    return `${firstNumber} ${secondNumber}`;
  }

  isCorrectAnswer(answer) {
    return this.result === answer;
  }
}

export default GcdGame;
