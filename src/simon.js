export default class SimonGame {
  
  constructor() {
    this.sequence = [];
    this.position = 0;
  }

  addColor() {
    const options = ["red", "yellow", "green", "blue"];
    this.sequence.push(options[Math.floor(Math.random() * 4)]);
  }
}