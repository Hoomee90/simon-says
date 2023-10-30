import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimonGame from './simon';

window.addEventListener("load", () => {
  const simon = new SimonGame();
  simon.sequence = [1, 2];
  console.log(simon.check(0));
}) 