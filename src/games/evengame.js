const isEven = n => n % 2 === 0;

class EvenGame {
  constructor() {
    this.welcomeMessage = 'Answer "yes" if number even otherwise answer "no".';
  }

  showWelcomeMessage() {
    console.log(this.welcomeMessage);
    console.log('');
  }

  getQuestion() {
    this.number = Math.floor(Math.random() * 100);
    return this.number;
  }

  isCorrectAnswer(answer) {
    return (isEven(this.number) && answer === 'yes') || (!isEven(this.number) && answer === 'no');
  }
}

export default EvenGame;
