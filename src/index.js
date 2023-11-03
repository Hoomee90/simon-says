import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimonGame from './simon';

window.addEventListener("load", () => {
  document.querySelector("button#game-start").addEventListener("click", handleGameInit);
});

function handleGameInit() {
  document.querySelector("button#game-start").innerText = `Reset`;
  refreshGame(true);
  let simon = new SimonGame();
  handleSimonTurn(simon);
}

function buttonAction(button, isSimon = false) {
  if (isSimon) {
    button.checked = true;
  }
  sleep(200).then(() => button.checked = false);
}

function handleInput(event, simonObj) {
  let simon = simonObj;
  if (event.target.tagName === "INPUT") {
    buttonAction(event.target, false);
    if (simon.receiveInput(event.target.id)) {
    console.log("correct");
      if (simon.checkInputComplete()) {
        sleep(700).then(() => {
          console.log(`round complete!`);
          changeScore(false);
          refreshGame(false);
          handleSimonTurn(simon);
        })
      }
    } else {
      changeScore(false)
      refreshGame(true);
    }
  }
}

function changeScore(gameOver) {
  const highRound = document.querySelector(`span#high`);
  const currentRound = document.querySelector(`span#current`);
  if (parseInt(currentRound.innerText) > parseInt(highRound.innerText)) {
    highRound.innerText = currentRound.innerText;
  }
  if (gameOver) {
    currentRound.innerText = 0;
  } else {
    currentRound.innerText = parseInt(currentRound.innerText) + 1
  }
}

function refreshGame(resetButtons) {
  if (resetButtons) {
    document.querySelectorAll("input[name='simon-btn']").forEach(btn => btn.checked = false);
  }
  let toRefresh = document.querySelector("#game-buttons")
  const refreshedNode = toRefresh.cloneNode(true);
  toRefresh.parentNode.replaceChild(refreshedNode, toRefresh);
}

function handleSimonTurn(simonObj) {
  let simon = simonObj;
  simon.addElement();
  console.log(simon.sequence);
  handleSimonDisplay(simon);
  document.querySelector("#game-buttons").addEventListener("click", (event) => handleInput(event, simon));
}

function handleSimonDisplay(simonObj) {
  let simon = simonObj;
  buttonAction(document.querySelector(`#${simon.sequence[simon.position]}`), true);
  simon.incrementPosition();
  if (simon.position < simon.sequence.length) {
    sleep(500).then(() => handleSimonDisplay(simon));
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}