class CalcGame {
  constructor() {
    this.welcomeMessage = 'What is the result of the expression?';
  }

  showWelcomeMessage() {
    console.log(this.welcomeMessage);
    console.log('');
  }

  getQuestion() {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);

    const sign = Math.floor(Math.random() * 3);
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
  }

  isCorrectAnswer(answer) {
    return this.result === answer;
  }
}

export default CalcGame;
