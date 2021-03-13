'use strict';

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const display = document.querySelector('#display');
const resetBtn = document.querySelector('.reset-btn');

let intervalId = 0,
    minutes = 0,
    seconds = 0,
    displayArr = display.innerText.split(':');

function startBtnHandler() {
  startBtn.addEventListener('click', () =>{
    startBtn.hidden = true;
    intervalId = setInterval(() => {
      if (!parseInt(displayArr[1])) {
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        display.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds}`;
      } else {
        seconds = parseInt(displayArr[1]);
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        display.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds}`;
      }
    }, 1000)
})
}

function stopBtnHandler() {
  stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    startBtn.hidden = false;
  })
  minutes = parseInt(displayArr[0]);
  seconds = parseInt(displayArr[1]);
}

function resetBtnHandler() {
  resetBtn.addEventListener('click', () => {
    startBtn.hidden = false;
    display.innerText = `00:00`;
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    
  })
}

function init() {
  startBtnHandler();
  stopBtnHandler();
  resetBtnHandler();
}

init();
