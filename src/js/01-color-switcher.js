const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')
}


refs.startBtn.addEventListener('click', getRandomHexColor)
refs.stopBtn.addEventListener('click', onStopChangeColor)
refs.stopBtn.disabled = true;
let timerId;
function getRandomHexColor() {
   timerId = setInterval(() =>{document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;}, 1000);
   refs.startBtn.disabled = true;
   refs.stopBtn.disabled = false;
  }
function onStopChangeColor() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    
}
  