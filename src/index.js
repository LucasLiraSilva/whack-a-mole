import {  
  molesHole,
  btnPlay,
  btnStop,
} from './elements.js';
import Controls from './controls.js';

let timerInterval
const controls = Controls({
  molesHole,
  btnPlay,
  btnStop,
  molesAppear
});

//Functions
function molesAppear() {
  let attempts = 0;
  let whackedMole = 0;

  timerInterval = setInterval(() => {
    if (whackedMole === 0 && attempts >= 3) {
      controls.reset(timerInterval);
      alert(`Que pena, não acertou. Tente de novo!`);
      return;
    } else if (attempts >= 3 && whackedMole <= 1) {
      controls.reset(timerInterval);
      alert(`Que pena, acertou só ${whackedMole} toupeira. Tente de novo!`);
      return;
    };

    const randomHole = Math.round(Math.random() * 11);
    molesHole.item(`${randomHole}`).classList.add("animated");

    function whackAMole() {
      let containsAnimated = molesHole.item(`${randomHole}`).classList.contains("animated");
      let timeOut = setTimeout(() => {
        molesHole.item(`${randomHole}`).classList.remove("animated");
        clearTimeout(timeOut);
        containsAnimated = false;
      }, 800);

      molesHole.item(`${randomHole}`).addEventListener("click", () => {
        if (containsAnimated) {
          molesHole.item(`${randomHole}`).classList.add("catched");
          whackedMole++;
        };
      });
      verifyAttempts(whackedMole, attempts, timerInterval);
    };

    whackAMole();
    attempts++;
  }, 2800);
};

function verifyAttempts(whackedMole, attempts, timerInterval) {
  if (whackedMole >= 2 && attempts >= 3) {
    alert(`Parabéns ! Acertou ${whackedMole} toupeiras.`);
    controls.reset(timerInterval);
    return;
  };
};

//Events
btnPlay.onclick = () => {
  controls.startGame();
};
btnStop.onclick = () => {
  controls.reset(timerInterval);
};