//function startQuiz()
//var startQuiz = document.getElementById(start-button);
//var timeEl = document.getElementById("timer");
//var secondsRemaining = 75;

//startQuiz.addEventListener("click",startQuiz);

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