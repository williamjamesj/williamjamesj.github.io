started = false;
timer = 60;
score = 0;
intervaleroniesoni = null;
skilltime = 0;
function startWhacka(skill){
    // change the timer so it adapts to the frequency at which the interval will be executed
    skilltime = skill/1000;
    squareArray = document.getElementsByName("square")
    squareArray = Array.from(squareArray);
    startTime = new Date().getTime();
    if (!started){
        // go faster or slower depending on user's skill selection
        intervaleroniesoni = setInterval(intervaleronie, skill);
        timer = 60;
        intervaleronie();
        // stops the user from starting the game whilst it is already started
        started = true;
    }

}
function intervaleronie(){
    if (timer == 1) {
        clearInterval(intervaleroniesoni);
        stoperoni();
        started = false;
        timer = 0;
        return('sleepnow')
    }
    currentsquarenumber = Math.floor(Math.random() * 16);
    currentsquare = squareArray[currentsquarenumber];
    currentsquare.innerHTML = `<img class="mole"src="resources/mole.png" onclick="whackaclicked(${currentsquarenumber});" height="40%">`
    timer = timer-skilltime;
    document.getElementById("timerp").innerHTML = `Timer: ${Math.floor(timer)}`
    document.getElementById("scorep").innerHTML = `Score: ${score}`
}
function whackaclicked(currentsquarenumber) {
    currentsquare = squareArray[currentsquarenumber];
    currentsquare.innerHTML = '<img src="resources/repeated-square.png" height="40%">';
    score++;
    // create an audio object then call the play function of the audio object
    audiones = new Audio("resources/smack.mp3");
    audiones.play();
    document.getElementById("scorep").innerHTML = `Score: ${score}`
}
function stoperoni() {
    window.alert(`Congratulations you scored ${score} points!`)
    for (var i;i<squareArray.length;i++) {
        squareArray[i].innerHTML == '<img src="resources/repeated-square.png" height="40%">';
    }
}