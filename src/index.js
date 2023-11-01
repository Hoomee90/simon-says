import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimonGame from './simon';

window.addEventListener("load", () => {
  let simon = new SimonGame();
  document.querySelector("button#game-start").addEventListener("click", ()=> handleSimonTurn(simon));
});

function buttonAction(button) {
  button.checked = true;
  sleep(200).then(() => button.checked = false);
}

function handleSimonTurn(simonObj) {
  simonObj.addElement();
  simonObj.position = 0;
  console.log(simonObj.sequence);
  handleSimonDisplay(simonObj);
}

function handleSimonDisplay(simonObj) {
  buttonAction(document.querySelector(`#${simonObj.display()[simonObj.position]}`));
  simonObj.position++;
  if (simonObj.position < simonObj.sequence.length) {
    sleep(500).then(() => handleSimonDisplay(simonObj));
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}