//tabs 

const clockBtn = document.querySelector(".selectfirst");
const stopwatchBtn = document.querySelector(".selectsecond");
const timerBtn = document.querySelector(".selectthird");
const panelClock = document.querySelector(".clock");
const panelStopwatch = document.querySelector(".stopwatch");
const panelTimer = document.querySelector(".timer");

clockBtn.addEventListener("click", function() {
    clockBtn.classList.add('active');
    stopwatchBtn.classList.remove('active');
    timerBtn.classList.remove('active');
    showBox()
})
stopwatchBtn.addEventListener("click", function() {
    stopwatchBtn.classList.add('active');
    clockBtn.classList.remove('active');
    timerBtn.classList.remove('active');
    showBox()
})
timerBtn.addEventListener("click", function() {
    timerBtn.classList.add('active');
    stopwatchBtn.classList.remove('active');
    clockBtn.classList.remove('active');
    showBox()
})

function showBox() {
    if (clockBtn.classList.contains('active')) {
        panelClock.style.display = "block";
        panelStopwatch.style.display = "none";
        panelTimer.style.display = "none";
    } else if (stopwatchBtn.classList.contains('active')) {
        panelClock.style.display = "none";
        panelStopwatch.style.display = "block";
        panelTimer.style.display = "none";
    } else if (timerBtn.classList.contains('active')) {
        panelClock.style.display = "none";
        panelStopwatch.style.display = "none";
        panelTimer.style.display = "block";
    }
}

//Clock

function clockTimer() {
    const currentDate = new Date();
    const time = [currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds()];
    if(time[0] < 10) {
        time[0] = "0"+ time[0];
    };
    if(time[1] < 10) {
        time[1] = "0"+ time[1];
    };
    if(time[2] < 10) {
        time[2] = "0"+ time[2];
    };
    const currentTime = [time[0],time[1],time[2]].join(':');
    const clock = document.getElementById("clock");
    clock.innerHTML = currentTime;
    let month = document.querySelector(".month");
    let day = document.querySelector(".day");
    let year = document.querySelector(".year");
    let week = document.querySelector(".week");
    const monthArray = ["January","February","March","April,","May","June","July","August","September","October","November","December"];
    const dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    month.innerHTML = monthArray[currentDate.getMonth()];
    day.innerHTML = currentDate.getDate();
    year.innerHTML = currentDate.getFullYear();
    week.innerHTML = dayOfWeek[currentDate.getDay()]
    
    setTimeout(clockTimer, 1000);
}
    clockTimer()

//stopwatch

const buttonStart = document.getElementById('start');
const buttonStop = document.getElementById('stop');
const buttonReset = document.getElementById('reset');
let sec = 00;
let min = 00;
let tens = 00;
let int;

let appendMinutes = document.getElementById("minutes");
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");

buttonStart.addEventListener("click", function() {
    clearInterval(int);
    int = setInterval(startStopwatch, 10);
});

buttonStop.addEventListener("click", function() {
    clearInterval(int);
});

buttonReset.addEventListener("click", function() {
    clearInterval(int);
    tens = "00";
    sec = "00";
    min = "00";
    appendMinutes.innerHTML = min;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = sec;
});


function startStopwatch() {
    tens++; 
    if (tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
        appendTens.innerHTML = tens;
    } 
    if (tens > 99) {
        sec++;
        appendSeconds.innerHTML = "0" + sec;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    if (sec <= 9) {
        appendSeconds.innerHTML = "0" + sec;
    }
    if (sec > 9){
        appendSeconds.innerHTML = sec;
    }
    if (sec > 99){
        min++;
        appendMinutes.innerHTML = "0" + min;
        sec = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if (min <= 9) {
        appendMinutes.innerHTML = "0" + min;
    }
    if (min > 9){
        appendMinutes.innerHTML = sec;
    }
}

//timer

const timerInput = document.getElementById("specified_time"); 
const buttonRun = document.getElementById("timerBtn");
let innerMinutes = document.getElementById("timer-minutes");
let innerHours = document.getElementById("timer-hours");
let innerSeconds = document.getElementById("timer-seconds");

let secondsRemaining;
let intervalHandle;
const timeContent = document.getElementById("timer_content");

function doTick(){
	let timerMin = Math.floor(secondsRemaining / 60);
	let timerSec = secondsRemaining - (timerMin * 60);
    if (timerSec < 10) {
		timerSec = "0" + timerSec;
	}
	let message = timerMin.toString() + ":" + timerSec;
	timeContent.innerHTML = message;
	if (secondsRemaining === 0){
		alert("Done!");
		clearInterval(intervalHandle);
        timeContent.innerHTML = "0:00";

	}
	secondsRemaining--;
}

function startTimer(){
	let userMinutes = timerInput.value;
	
	if (isNaN(userMinutes)){
		alert("Please enter a number");
		return; 
	}
	secondsRemaining = userMinutes * 60;
	intervalHandle = setInterval(doTick, 1000);
}

buttonRun.onclick = function(){
    startTimer();
};