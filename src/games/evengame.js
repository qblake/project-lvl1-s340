import getRandomNumber from '../utils/utils';

const isEven = n => n % 2 === 0;

function EvenGame() {
  this.getDescription = () => 'Answer "yes" if number even otherwise answer "no".';

  this.getQuestion = () => {
    this.number = getRandomNumber(100);
    return this.number;
  };

  this.isCorrectAnswer = answer => (isEven(this.number) && answer === 'yes') || (!isEven(this.number) && answer === 'no');
}

export default EvenGame;
