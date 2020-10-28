function clickCaesarCipher(){
    text = document.getElementById("cs-plaintext").value.toLowerCase();
    key = document.getElementById("cs-key").value;
    if (key>26 || key<0){
        alert("Please enter a number between 0 and 26");
        // shut it down
        return("noopaloop");
    }
    splittext = text.split("");
    newArray = [];
        // www.regexr.com (for when i can't understand what i wrote)
    for (i = 0; i < splittext.length; i++) {
        if (!(splittext[i].match("([a-z])"))){
            alert("Please only enter letters")
            // kill it with fire
            return("noopaloop")
        }   
    }
    for (i = 0; i < splittext.length; i++) {
        newArray.push(shiftChar(splittext[i],parseInt(key)))
    }
    document.getElementById("cs-output").innerHTML = `${text} is encrypted as ${newArray.join("")}`;
}
function shiftChar(character, key) {
    characterCode = parseInt(character.charCodeAt(0));
    console.log(characterCode);
    encryptedCode = characterCode+key;
    console.log(encryptedCode);
    if (encryptedCode>122) {
        encryptedCode = encryptedCode-26
    }


    return(String.fromCharCode(encryptedCode));
}
function decryptCaesarCipher(){
    text = document.getElementById("cs-plaintext").value.toLowerCase();
    key = document.getElementById("cs-key").value;
}