export default class SimonGame {
  
  constructor() {
    this.sequence = [];
    this.position = 0;
  }

  addElement() {
    this.sequence.push(Math.floor(Math.random() * 4));
  }

  display() {
    const colors = ["red", "yellow", "green", "blue"];
    return this.sequence.map(el => colors[el]);
  }

  check(seqEl, index = 0) {
    return this.sequence[index] === seqEl;
  }
}