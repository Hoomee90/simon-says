import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimonGame from './simon';

window.addEventListener("load", () => {
  document.querySelectorAll("input[type='radio']").forEach((el) => {
    el.addEventListener("click", playerButtonPress);
  });
});

function playerButtonPress(e) {
  simonButtonAction(e.target)
}

function simonButtonAction(button) {
  setTimeout(() => button.checked = false, 200);
}