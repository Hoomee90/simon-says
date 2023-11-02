export default class SimonGame {
  constructor() {
    this.sequence = [];
    this.playerGuesses = [];
    this.position = 0;
  }

  addElement() {
    const colors = ["red", "yellow", "green", "blue"]
    this.sequence.push(colors[Math.floor(Math.random() * 4)]);
  }
  
  receiveInput(input) {
    let guessLength = this.playerGuesses.push(input);
    return input === this.sequence[guessLength - 1];
    // every((element, index) => element === this.playerGuesses[index]);
  }

  checkInputComplete() {
    if (this.playerGuesses.length === this.sequence.length) {
      this.playerGuesses = [];
      this.position = 0;
      return true;
    } else {
      return false;
    }
  }

  incrementPosition() {
    this.position++;
  }
}