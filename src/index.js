const molesHole = document.querySelectorAll(".moles-hole");
const btnPlay = document.querySelector(".play");
const btnStop = document.querySelector(".stop");
let timerInterval;

molesHole.item(0).classList.add("animated");

//Functions
function molesAppear() {
  let attempts = 0;
  let whackedMole = 0;

  timerInterval = setInterval(() => {
    if (whackedMole === 0 && attempts >= 3) {
      reset();
      alert(`Que pena, não acertou. Tente de novo!`);
      return;
    } else if (attempts >= 3 && whackedMole <= 1) {
      reset();
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
    };

    verifyAttempts(whackedMole, attempts);
    whackAMole();
    attempts++;
  }, 2800);
};

function startGame() {
  btnPlay.classList.add("hide");
  btnStop.classList.remove("hide");
  molesAppear();
};
function reset() {
  btnPlay.classList.remove("hide");
  btnStop.classList.add("hide");

  clearInterval(timerInterval);

  setTimeout(() => {
    molesHole.forEach((mole) => {
      mole.classList.remove("animated");
      mole.classList.remove("catched");
    });
  }, 500);
};
function verifyAttempts(whackedMole, attempts) {
  if (whackedMole >= 2 && attempts >= 3) {
    alert(`Parabéns ! Acertou ${whackedMole} toupeiras.`);
    reset();
    return;
  };
};

//Events
btnPlay.onclick = () => {
  startGame();
};
btnStop.onclick = () => {
  reset();
};