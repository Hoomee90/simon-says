import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimonGame from './simon';

window.addEventListener("load", () => {
  document.querySelector("button#game-start").addEventListener("click", handleGame);
});

function simonButtonAction(button) {
  setTimeout(() => button.checked = false, 200);
}

function handleGame() {
  let simon = new SimonGame();

  document.querySelector(".btn-group-vertical").addEventListener("click", (e) => {
      simonButtonAction(e.target)
  });
}