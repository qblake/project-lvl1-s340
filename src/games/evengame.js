const isEven = n => n % 2 === 0;

function EvenGame() {
  this.showWelcomeMessage = () => {
    console.log('Answer "yes" if number even otherwise answer "no".');
    console.log('');
  };

  this.getQuestion = () => {
    this.number = Math.floor(Math.random() * 100);
    return this.number;
  };

  this.isCorrectAnswer = answer => (isEven(this.number) && answer === 'yes') || (!isEven(this.number) && answer === 'no');
}

export default EvenGame;
