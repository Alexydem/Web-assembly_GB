// export const strTimer = `${Math.trunc(minutes)}:${Math.trunc(secundes)}:${millisecond}`;

// let millisecond = timeMinut % 1000 // Получаем секунды
// let secundes = timeMinut / 60 % 60 // Получаем минуты
// let minutes = timeMinut / 60 / 60 % 60 // Получаем часы
// // this.strTimer = ''


export function timer() {

    let timerShow = document.getElementById("timer");
    let pic = document.querySelector(".pic")
    let timeMinut;


    const timer = setInterval(function () {
        let millisecond = timeMinut % 1000 // Получаем секунды
        let secundes = timeMinut / 60 % 60 // Получаем минуты
        let minutes = timeMinut / 60 / 60 % 60 // Получаем часы
        this.strTimer = ''
        // Условие если время закончилось то...
        if (timeMinut == 0) {
            // Таймер удаляется
            clearInterval(timer);
            // strTimer.innerHTML = ''
            // Выводит сообщение что время закончилось
            pic.style = "display: block; width: 300px;";
        } else { // Иначе
            let strTimer = `${Math.trunc(minutes)}:${Math.trunc(secundes)}:${millisecond}`;
            timerShow.innerHTML = strTimer;
        }
        --timeMinut; // Уменьшаем таймер
    }, 1000 / 60)
}