const findGcd = (a, b) => {
  if (b) {
    return findGcd(b, a % b);
  }
  return a;
};

function GcdGame() {
  this.showWelcomeMessage = () => {
    console.log('Find the greatest common divisor of given numbers.');
    console.log('');
  };

  this.getQuestion = () => {
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;

    this.result = String(findGcd(firstNumber, secondNumber));

    return `${firstNumber} ${secondNumber}`;
  };

  this.isCorrectAnswer = answer => this.result === answer;
}

export default GcdGame;
