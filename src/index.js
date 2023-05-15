import { molesHole, btnPlay, btnStop } from "./elements.js";
import Controls from "./controls.js";
const controls = Controls({
  molesHole,
  btnPlay,
  btnStop,
  molesAppear
});
let timerInterval;
let whackedMole = 0;

//Events
btnPlay.onclick = () => controls.startGame();
btnStop.onclick = () => controls.reset(timerInterval);

//Functions
const whackAMole = () => {
  const randomHole = Math.round(Math.random() * 11);
  let randomMole = molesHole.item(`${randomHole}`);

  randomMole.classList.add("animated");

  let containsAnimated = randomMole.classList.contains("animated");

  let timeOut = setTimeout(() => {
    randomMole.classList.remove("animated");
    clearTimeout(timeOut);
    containsAnimated = false;
  }, 800);

  randomMole.addEventListener("click", () => {
    if (containsAnimated) {
      randomMole.classList.add("catched");
      whackedMole++;
    }
  });
};
function molesAppear() {
  let whackAttempts = 0;
  timerInterval = setInterval(function () {
    whackAMole();
    playerWinOrLose(whackedMole, whackAttempts, timerInterval);
    whackAttempts++;
  }, 2800);
}
const playerWinOrLose = (nWhackedMoles, nWhackAttempts, timerInterval) => {
  if (!nWhackedMoles && nWhackAttempts >= 3) {
    controls.reset(timerInterval);
    alert(`Que pena, você não acertou. Tente de novo!`);
    whackedMole = 0;
    return;
  } else if (nWhackedMoles <= 1 && nWhackAttempts >= 3) {
    controls.reset(timerInterval);
    alert(
      `Que pena, você acertou só ${nWhackedMoles} toupeira. Tente de novo!`
    );
    whackedMole = 0;
    return;
  } else if (nWhackedMoles >= 2 && nWhackAttempts >= 3) {
    alert(`Parabéns ! Você acertou ${nWhackedMoles} toupeiras.`);
    controls.reset(timerInterval);
    whackedMole = 0;
    return;
  }
};
