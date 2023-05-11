export default function Controls({
  btnPlay,
  btnStop,
  molesAppear,
  molesHole
}){
    function startGame() {
      btnPlay.classList.add("hide");
      btnStop.classList.remove("hide");
      molesAppear();
    };
    function reset(timerInterval) {
      btnPlay.classList.remove("hide");
      btnStop.classList.add("hide");
    
      clearInterval(timerInterval)

      setTimeout(() => {
        molesHole.forEach((mole) => {
          mole.classList.remove("animated");
          mole.classList.remove("catched");
        });
      }, 500);

      return;
    };

  return{
    startGame,
    reset
  };
};