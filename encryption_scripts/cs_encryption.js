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
    encryptedCode = characterCode+key;
    if (encryptedCode>122) {
        encryptedCode = encryptedCode-26
    }


    return(String.fromCharCode(encryptedCode));
}
function decryptCaesarCipher(){
    text = document.getElementById("cs-ciphertext").value.toLowerCase();
    key = parseInt(document.getElementById("cs-decrypt-key").value);
    if (key>26 || key<0){
        alert("Please enter a number between 0 and 26");
        // shut it down
        return("noopaloop");
    }
    splittext = text.split("");
        // www.regexr.com (for when i can't understand what i wrote)
    for (i = 0; i < splittext.length; i++) {
        if (!(splittext[i].match("([a-z])"))){
            alert("Please only enter letters")
            // kill it with fire
            return("noopaloop")
        }   
    }
    outputBox = document.getElementById("cs-combinations")
    if (key == 0) {
        outputBox.innerHTML = +tryAllCS(splittext).join("<br>");
        outputBox.style.border = "thick solid #0000FF";
    }
    else {
        outputBox.innerHTML = decryptCS(splittext,key);
        outputBox.style.border = "";
    }
}
function tryAllCS(textArray) {
    attemptArray = [];
    for (counterino=0;counterino<26;counterino++) {
        attemptArray.push(`Key: ${counterino} - ${decryptCS(textArray,counterino)}`);
    }
    return(attemptArray);
}
function decryptCS(textArray,key){
    newArray=[];
    for (count=0;count<textArray.length;count++){
        characterCode = parseInt(textArray[count].charCodeAt(0));
        encryptedCode = characterCode-key;
        if (encryptedCode<97) {
            encryptedCode = encryptedCode+26
        }
        newArray.push(String.fromCharCode(encryptedCode));
    }
    newArray = newArray.join("")
    return(newArray);
}