const mole = document.querySelectorAll('.moles-hole')
const btnPlay = document.querySelector('.play')
const btnStop = document.querySelector('.stop')

let timerInterval
let ClearClass
let i = 0

const molesAppear = function(){
  timerInterval = setInterval(function(){
    let numberClass
    let numberMoles

    if(i >= 20){
      clearInterval(timerInterval)
      btnPlay.classList.remove('hide')
      btnStop.classList.add('hide')
      return
    }
    
    updateNumber(numberClass, numberMoles)

    console.log(`aqui${i}`)

    molesAppear()
    i++
  },3000)
}

function updateNumber(numberClass, numberMoles){
  numberClass = Math.round((Math.random()*11)+1)
  numberMoles = Math.round((Math.random()*11))

  mole[numberMoles].classList.add(`number-${numberClass}`)

  ClearClass = setInterval(function(){
    
    if(i>=20){
     clearInterval(ClearClass)
     return
    }
    mole[numberMoles].classList.remove(`number-${numberClass}`)
   
   },2000)
}

function reset(){
  clearInterval(timerInterval)
  clearInterval(ClearClass)
}

btnPlay.addEventListener('click', function(){
  btnPlay.classList.add('hide')
  btnStop.classList.remove('hide')
  molesAppear()
})
btnStop.addEventListener('click', function(){
  btnPlay.classList.remove('hide')
  btnStop.classList.add('hide')
  reset()
})