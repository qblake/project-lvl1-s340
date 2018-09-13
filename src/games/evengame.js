const isEven = n => n % 2 === 0;

class EvenGame {
  number;

  static showWelcomeMessage() {
    console.log('Answer "yes" if number even otherwise answer "no".');
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
