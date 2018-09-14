import getRandomNumber from '../utils/utils';

function CalcGame() {
  this.getDescription = () => 'What is the result of the expression?';

  this.getQuestion = () => {
    const firstNumber = getRandomNumber(10);
    const secondNumber = getRandomNumber(10);

    const sign = getRandomNumber(3);
    switch (sign) {
      case 0:
        this.result = String(firstNumber + secondNumber);
        return `${firstNumber} + ${secondNumber}`;
      case 1:
        this.result = String(firstNumber - secondNumber);
        return `${firstNumber} - ${secondNumber}`;
      case 2:
        this.result = String(firstNumber * secondNumber);
        return `${firstNumber} * ${secondNumber}`;
      default:
        this.result = '';
    }

    return '';
  };

  this.isCorrectAnswer = answer => this.result === answer;
}

export default CalcGame;
