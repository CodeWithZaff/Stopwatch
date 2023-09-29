let minutes = 0;
let seconds = 0;
let tens = 0;
let interval;
let isRunning = false;

let getMinutes =document.querySelector('.minutes')
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.start-btn');
let btnStop = document.querySelector('.stop-btn');
let btnReset = document.querySelector('.reset-btn');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');


btnStart.addEventListener('click' ,() =>{
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () =>{
     clearInterval(interval);
     
})

btnReset.addEventListener('click', () =>{
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    getMinutes.innerHTML =seconds
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
})


function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }

    if(seconds > 60){
        minutes++;
        getMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }

    if(minutes > 9){
        getSeconds.innerHTML = minutes;

    }
}