import './howler.js';

const soundTick = new Howl({
    src: ['./files/tick.mp3'],
    html5: true,
    volume: 0.3,
    // loop: true
});



const alarmSound = new Howl({
    src: ['./files/alarm.mp3'],
    html5: true,
    volume: 1,

});

export const myTimer = {



    // timeMinut() {
    //     timeMinut = parseInt(timerInput.value) * 60
    // },

    start() {
        let timeMinut = parseInt(timerInput.value) * 60;
        soundTick.play()

        let timer = setInterval(function () {

            let millisecond = timeMinut % 1000
            let secundes = timeMinut / 60 % 60
            let minutes = timeMinut / 60 / 60 % 60
            console.log('sssssssssssssss', timeMinut);
            if (timeMinut < 0) {
                clearInterval(timer);
                console.log('NEWNEWNRW', timeMinut);
                pic.style = "display: block; width: 300px;";
                timerShow.innerHTML = `00:00:00`
                soundTick.stop()
                alarmSound.play()
                alarmSound.stop()
            } else {
                timerShow.innerHTML = strTimer
                strTimer = `${Math.trunc(minutes)}:${Math.trunc(secundes)}:${millisecond}`;
                timerShow.innerHTML = strTimer;
            }
            --timeMinut;
        }, 1000 / 60);


    },

    buttonStop() {
        timeMinut = 0;
        timerShow.innerHTML = "00:00";
        time.value = 0;
        clearInterval(timer);
        soundTick.stop()
        alarmSound.stop()
    },
}

let timerInput = document.getElementById("time");
let strTimer = "00:00";
let timeMinut;
let timerShow = document.getElementById("timer");
let time = document.getElementById("time");
let pic = document.querySelector(".pic")








// buttonStop.addEventListener('click', () => {
//     timeMinut = 0
//     timerShow.innerHTML = "00:00"
//     time.value = 0
// })











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