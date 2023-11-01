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
    this.playerGuesses.push(input);
    return this.sequence.every((element, index) => element === this.playerGuesses[index]);
    // return this.display()[index] === seqEl;
  }

  incrementPosition() {
    this.position++;
  }
}