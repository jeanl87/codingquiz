var timeEl = document.getElementById("timer");
var secondsRemaining = 75;

function setTime() {
    timerInterval = setInterval(function() {
        secondsRemaining--;
        if(!secondsRemaining > 0) {
            secondsRemaining = 0; 
        } 
        timeEl.textContent = "Time" + secondsRemaining.toString().padStart(2,"0");
        checkTimeLeft();
    }, 1000);
}