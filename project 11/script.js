const startTimer = document.getElementById("start");
const stopTimer = document.getElementById("stop");
const timerDisplay = document.getElementById("timer");

let timerId;
let newTime = 10;

function myTimer() {
    timerDisplay.textContent = newTime;
    newTime--;

    if (newTime < 0) {
        clearInterval(timerId);
        timerId = null;
    }
}

startTimer.addEventListener("click", () => {
    if (!timerId) { // käynnistä vain jos ei jo käynnissä
        if (newTime <= 0) {
            newTime = 10; // resetoi alusta jos haluat uuden startin
        }
        timerId = setInterval(myTimer, 1000);
    }
});

stopTimer.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
});
