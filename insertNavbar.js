testBlock = document.getElementById("navbar")
testBlock.innerHTML = '<nav class="navbararoni"><nav class="navbararoni navbar navbar-expand-sm bg-transparent"><a class="navbar-brand mainman" href="index.html">Article</a> <ul class="navbar-nav"> <div class="container-fluid">    <li class="nav-link hoveroveritem"><a href="types.html">Types of Hackers</a></li>  <li class="nav-link hoveroveritem"><a href="encryption.html" class="navbar-link">Encryption</a></li>    <li class="nav-link hoveroveritem"><a href="prevention.html" class="navbar-link">Hacking Types and Prevention</a></li>    <li class="nav-link hoveroveritem"><a href="biblio.html" class="navbar-link">References</a></li><li class="nav-link hoveroveritem"><a href="whackamole.html" class="navbar-link">Whack-a-mole</a></li>  </div></ul></nav></nav>'
// The Teacher-Tracker 2000
function teacher_tracker(pagename) {
    fetch(`https://maker.ifttt.com/trigger/teacher_tracker/with/key/bUKtrJ5T2fxVa-2oHwKD2B?value1=${pagename}`);
    console.log("Just completely ignore these errors that will eventually appear. I don't know why, and I don't know how.");
}