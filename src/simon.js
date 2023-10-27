export default class SimonGame {
  
  constructor() {
    this.sequence = [];
  }

  addColor() {
    const options = [];
    this.sequence.push(Math.floor(Math.random() * 4));
  }
}