"use strict"
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    timerStyle: document.querySelector('.timer'),
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}
let timerId;


refs.timerStyle.style.display = 'flex'
refs.timerStyle.style.gap = '30px'
refs.timerStyle.style.fontSize = '70px'
refs.timerStyle.style.justifyContent = 'center'
refs.timerStyle.style.color = 'lightgreen'

refs.input.addEventListener('input', onInputTime);
refs.startBtn.addEventListener('click', onClickBtn);
refs.startBtn.disabled = true;

function onClickBtn () {
  timerId = setInterval(() => {
  const timerTime = Date.parse(refs.input.value) - new Date().getTime();
  convertMs(timerTime);
  }, 1000);
  refs.startBtn.disabled = true;
  
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    onClose(selectedDates) {
      if(selectedDates[0] <= new Date()) {
        refs.startBtn.disabled = true;
        Notiflix.Notify.failure('Please choose a date in the future');
      };
    },
  };

function onInputTime () {
    refs.startBtn.disabled = false;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    const d = refs.days.textContent = `${days}`;
    const h = refs.hours.textContent = `${hours}`;
    const m = refs.minutes.textContent = `${minutes}`;
    const s = refs.seconds.textContent = `${seconds}`;
    if(d + h + m +s === '00000000'){
      clearInterval(timerId)
    }
    
  };
  
flatpickr(refs.input, options)