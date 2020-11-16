started = false;
timer = 60;
score = 0;
function startWhacka(){
    squareArray = document.getElementsByName("square")
    squareArray = Array.from(squareArray);
    startTime = new Date().getTime();
    if (!started){
        setInterval(intervaleronie, 1000);
        intervaleronie();
        started = true;
    }

}
function intervaleronie(){
    currentsquare = squareArray[Math.floor(Math.random() * 16)];
    currentsquare.innerHTML = '<img class="mole"src="resources/mole.png" height="40%">'
    timer = timer-1;
    document.getElementById("timerp").innerHTML = `Timer: ${timer}`
}