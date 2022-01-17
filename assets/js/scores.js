var questionsEl = document.querySelector("#questions"); 
var timeEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var startButton= document.getElementById("#startQuiz");
var secondsRemaining = 75;

startButton.addEventListener("click", startQuiz); 

document.querySelector("#startQuiz").onlick = function (event) {
    if (event === null){
        return; 
    }

choicesEl.onclick = questionsEl; 

choicesEl.appendChild(choices); 



function setTime() { 
    timerInterval = setInterval(function() {
        secondsRemaining--;
        if(!secondsRemaining > 0) {
            secondsRemaining = 0; 
        } 
        timeEl.textContent = "Time" + secondsRemaining.toString().padStart("0");
        checkTimeLeft();
    }, 1000);
//timerId = setInterval(secondsRemaining, 1000);()
