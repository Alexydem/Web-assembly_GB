import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";


const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}


//switcher
let buttonL = document.querySelector(".buttonL")
let buttonR = document.querySelector(".buttonR")
let dateCalc = document.querySelector(".dateCalc")
let blockTimer = document.querySelector(".timer")

buttonL.addEventListener('click', () => {
    dateCalc.style.display = 'block';
    blockTimer.style.display = 'none';
    buttonL.style.background = 'red';
    buttonR.style.background = 'white';
});

buttonR.addEventListener('click', () => {
    dateCalc.style.display = 'none';
    blockTimer.style.display = 'block';
    buttonL.style.background = 'white';
    buttonR.style.background = 'red';
});






////////////////   TIMER   //////////////////////////////////////////////////////////////////////////////////////////////////////
import { myTimer } from './timer.js'

let buttonRun = document.getElementById("button");
let buttonStop = document.getElementById("stopButton");

// buttonRun.addEventListener('click', function () {  //это когда-то работало
//     timeMinut = parseInt(timerInput.value) * 60
// })

buttonRun.addEventListener('click', () => { myTimer.start() })
buttonStop.addEventListener('click', () => { myTimer.buttonStop() });



//ORIGINAL
// let timerInput = document.getElementById("time");
// let buttonRun = document.getElementById("button");
// let buttonStop = document.getElementById("stopButton");
// let timerShow = document.getElementById("timer");
// let time = document.getElementById("time");
// let pic = document.querySelector(".pic")
// let timeMinut;
// let strTimer = "00:00";

// buttonRun.addEventListener('click', function () {
//     timeMinut = parseInt(timerInput.value) * 60
// })

// const timer = setInterval(function () {

//     let millisecond = timeMinut % 1000 // Получаем секунды
//     let secundes = timeMinut / 60 % 60 // Получаем минуты
//     let minutes = timeMinut / 60 / 60 % 60 // Получаем часы
//     // Условие если время закончилось то...
//     if (timeMinut == 0) {
//         // Таймер удаляется
//         clearInterval(timer);
//         // strTimer.innerHTML = ''
//         // Выводит сообщение что время закончилось
//         pic.style = "display: block; width: 300px;";
//     } else { // Иначе
//         timerShow.innerHTML = strTimer
//         strTimer = `${Math.trunc(minutes)}:${Math.trunc(secundes)}:${millisecond}`;
//         timerShow.innerHTML = strTimer;
//     }
//     --timeMinut; // Уменьшаем таймер
// }, 1000 / 60)

// buttonStop.addEventListener('click', () => {
//     timeMinut = 0
//     timerShow.innerHTML = "00:00"
//     time.value = 0
// })


