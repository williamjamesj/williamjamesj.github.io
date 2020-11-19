testBlock = document.getElementById("navbar")
testBlock.innerHTML = '<nav class="navbararoni"><nav class="navbararoni navbar navbar-expand-sm bg-transparent"><a class="navbar-brand mainman" href="index.html">Article</a> <ul class="navbar-nav"> <div class="container-fluid">    <li class="nav-link hoveroveritem"><a href="types.html">Types of Hackers</a></li>  <li class="nav-link hoveroveritem"><a href="encryption.html" class="navbar-link">Encryption</a></li>    <li class="nav-link hoveroveritem"><a href="prevention.html" class="navbar-link">Hacking Types and Prevention</a></li>    <li class="nav-link hoveroveritem"><a href="biblio.html" class="navbar-link">References</a></li><li class="nav-link hoveroveritem"><a href="whackamole.html" class="navbar-link">Whack-a-Zac</a></li> <button class="partybutton"onclick="party();">Party Time</button> </div></ul></nav></nav>'
// The Teacher-Tracker 2000, sends an email every time a webpage is loaded
function teacher_tracker(pagename) {
    return("not today");
    fetch(`https://maker.ifttt.com/trigger/teacher_tracker/with/key/bUKtrJ5T2fxVa-2oHwKD2B?value1=${pagename}`);
    console.log("Just completely ignore these errors that will eventually appear. I don't know why, and I don't know how.");
}
/* allows you to save the state of the party button to toggle it on AND off */
partying = false;
function party(){
    partyList = document.getElementsByClassName("textblock");
    partyArray = Array.from(partyList);
    if (!partying){
        
        for (i=0;i<partyArray.length;i++){
            classesnameroni = partyArray[i].className;
            partyArray[i].className = classesnameroni+" animatedbanner";
        }
        partying = true;

    }
    else {
        for (i=0;i<partyArray.length;i++){
            classesnameroni = partyArray[i].className;
            partyArray[i].className = classesnameroni.replace("animatedbanner","");
        }
        partying = false;
    }
}