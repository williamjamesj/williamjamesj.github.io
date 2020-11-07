// receives the input
function clickVC() {
    plaintext = document.getElementById("vc-plaintext").value.toLowerCase();
    key = document.getElementById("vc-key").value.toLowerCase();
    plainsplit = plaintext.split("");
    keysplit = key.split("");
    plainsplit = sanitiseInput(plainsplit);
    keysplit = sanitiseInput(keysplit);
    // uses the sanitiseInput() function from the caesar cipher
    keysplit = sanitiseInput(keysplit);
    plainsplit = sanitiseInput(plainsplit);
    // doubles the keysplit size until it is longer than plainsplit, allows the code to expand for as long as it needs
    while (keysplit.length<plainsplit.length){
        keysplit=keysplit.concat(keysplit);
    }
    alert(keysplit);
    alert(plainsplit);
    newArray = [];
    for (i=0;i<plainsplit.length;i++) {
        newArray.push(shiftChar(plainsplit[i],keysplit[i].charCodeAt(0)));
    }
    console.log(newArray);
}
