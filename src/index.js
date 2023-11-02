import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimonGame from './simon';

window.addEventListener("load", () => {
  document.querySelector("button#game-start").addEventListener("click", handleGameInit);
});

function handleGameInit() {
  let simon = new SimonGame();
  const gameButtons = document.querySelectorAll("input[name='simon-btn']");
  handleSimonTurn(simon);
  document.querySelector("#game-buttons").addEventListener("click", (event) => handleInput(event, simon));
  // gameButtons.forEach(element => element.addEventListener("click", (event) => handleInput(event, simon)));
}

function buttonAction(button) {
  button.checked = true;
  sleep(200).then(() => button.checked = false);
}

function handleInput(event, simon) {
  if (event.target.tagName === "INPUT") {
    buttonAction(event.target);
    if (simon.receiveInput(event.target.id)) {
      console.log("correct");
    }
  }
}

function handleSimonTurn(simonObj) {
  simonObj.addElement();
  simonObj.position = 0;
  console.log(simonObj.sequence);
  handleSimonDisplay(simonObj);
}

function handleSimonDisplay(simonObj) {
  buttonAction(document.querySelector(`#${simonObj.sequence[simonObj.position]}`));
  simonObj.incrementPosition();
  if (simonObj.position < simonObj.sequence.length) {
    sleep(500).then(() => handleSimonDisplay(simonObj));
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}