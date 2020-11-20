// Whack-a-Zac, coded from scratch for the most authentic gaming experience.
// global variables to be used over multiple functions
started = false;
timer = 60;
score = 0;
intervaleroniesoni = null;
skilltime = 0;
goodbyeIntervals = [];
// initialise the localStorage object to be used to save high scores locally
storageronie = window.localStorage;
// load the scores when the page starts
loadScore();
scoreName = "";
function loadScore() {
    document.getElementById("Easy").innerHTML = storageronie.getItem('Easy');
    document.getElementById("Medium").innerHTML = storageronie.getItem('Medium');
    document.getElementById("Hard").innerHTML = storageronie.getItem('Hard');
    document.getElementById("VeryHard").innerHTML = storageronie.getItem('VeryHard');
    document.getElementById("Impossible").innerHTML = storageronie.getItem('Impossible');
}
function saveScore(score,type) {
    storageronie.setItem(score,type);
}
function startWhacka(skill, difficulty){
    // change the timer so it adapts to the frequency at which the interval will be executed
    scoreName = difficulty; // saves the difficulty, so that it can be used later for local storage
    score = 0;
    skilltime = skill/1000;
    squareArray = document.getElementsByName("square");
    squareArray = Array.from(squareArray);
    startTime = new Date().getTime();
    if (!started){
        // go faster or slower depending on user's skill selection
        intervaleroniesoni = setInterval(intervaleronie, skill);
        timer = 60;
        // makes sure that the game starts immediately, otherwise you would have to wait a second
        intervaleronie();
        // stops the user from starting the game whilst it is already started
        started = true;
    }

}
function intervaleronie(){
    if (timer < 0) {
        // stop the game from running any more
        clearInterval(intervaleroniesoni);
        // allow the user to start the game again
        started = false;
        timer = 0;
        // actually update the timer
        document.getElementById("timerp").innerHTML = `Timer: ${Math.floor(timer)}`;
        saveScore(scoreName,score);
        loadScore();
        stoperoni();
        // stop it from running the rest of the code
        return('sleepnow');
        
    }
    currentsquarenumber = Math.floor(Math.random() * 16); // random number between 1 and 16, Math.floor() just rounds the number to an integer
    currentsquare = squareArray[currentsquarenumber];
    if (Math.floor(Math.random()*4) == 1) { // provides a small chance to provide an alpaca which gives negative points instead 
        currentsquare.innerHTML = `<img class="mole"src="resources/notmole.png" onclick="wrongwhackaclicked(${currentsquarenumber});">`;
        // have it disappear after a skill-based time
        goodbyeIntervals.push(setInterval(goodbye,skilltime*2000, currentsquarenumber)); // makes the element disappear after 2x the skill amount so there are multiple elements in play
    }
    else {
        currentsquare.innerHTML = `<img class="mole"src="resources/mole.png" onclick="whackaclicked(${currentsquarenumber});">`;
        goodbyeIntervals.push(setInterval(goodbye,skilltime*2000, currentsquarenumber));
    }
    
    timer = timer-skilltime;
    document.getElementById("timerp").innerHTML = `Timer: ${Math.floor(timer)}`;
    document.getElementById("scorep").innerHTML = `Score: ${score}`;
}
function whackaclicked(currentsquarenumber) {
    currentsquare = squareArray[currentsquarenumber];
    currentsquare.innerHTML = '';
    score++;
    // create an audio object then call the play function of the audio object
    audiones = new Audio("resources/smack.mp3");
    audiones.play();
    document.getElementById("scorep").innerHTML = `Score: ${score}`;
}
function wrongwhackaclicked(currentsquarenumber) {
    currentsquare = squareArray[currentsquarenumber];
    currentsquare.innerHTML = '';
    score--;
    // create an audio object then call the play function of the audio object
    audiones = new Audio("resources/smack.mp3");
    audiones.play();
    document.getElementById("scorep").innerHTML = `Score: ${score}`;
}
function goodbye(currentsquarenumber) { // the goodbyeIntervals array contains all of the interval objects, so that interval can be stopped and the element cleared, only once
    currentsquare = squareArray[currentsquarenumber];
    currentsquare.innerHTML = ''; // clears the element
    clearInterval(goodbyeIntervals[0]); // clears the interval, which should always be at the front of the list, as it is the oldest interval
    goodbyeIntervals.shift(); // removes the first interval, which should be the oldest
}
// loop through and remove anything that remains
function stoperoni() {
    window.alert(`Congratulations you scored ${score} points!`);
    for (var i;i<squareArray.length;i++) {
        squareArray[i].innerHTML == ''; // removes everything
    }
}