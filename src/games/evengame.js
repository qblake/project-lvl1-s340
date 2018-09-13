const getRandomNumber = count => Math.floor(Math.random() * count);

const isEven = n => n % 2 === 0;

function EvenGame() {
  this.showWelcomeMessage = () => {
    console.log('Answer "yes" if number even otherwise answer "no".');
    console.log('');
  };

  this.getQuestion = () => {
    this.number = getRandomNumber(100);
    return this.number;
  };

  this.isCorrectAnswer = answer => (isEven(this.number) && answer === 'yes') || (!isEven(this.number) && answer === 'no');
}

export default EvenGame;
