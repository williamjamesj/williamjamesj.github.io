// removes non-alphanumeric characters and returns string
function sanitiseInput(splittext) {
    cleanArray = [];
    for (i = 0; i < splittext.length; i++) {
        // regex string used in the .replace() is from www.regexr.com, filters for most newline characters, then filters for any non-alphabetic or whitespace characters
        splittext[i].replace("/\r\n|\n|\r/gm","");
        if (!(splittext[i].match("([a-z]|[A-Z]|[ ])"))){
            console.log("Invalid Character Detected");
        }
        // special case for space as it will be ignored later in the process
        else if (splittext[i]==" ") {
            cleanArray.push("SPACE");
        }
        else {
            cleanArray.push(splittext[i]);
        }
    }
    return(cleanArray);
}
//handles the onClick event of the encrypt
function clickCaesarCipher(){
    // retrieve values
    text = document.getElementById("cs-plaintext").value;
    key = document.getElementById("cs-key").value;
    // make sure its not over 26 or non-existent
    if (key>26 || key<0 || key==null || key==""){
        alert("Please enter a number between 0 and 26");
        // shut it down, nothing happens to the return
        return("noopaloop");
    }
    // split the text into a string and then sanitise it for encoding
    splittext = text.split("");
    splittext = sanitiseInput(splittext);
    // make sure the input isn't empty
    if (splittext.length == 0) {
        alert("Please enter a value");
        // leave
        return("noop")
    }
    newArray = [];
    // iterate through changing the characters by the number defined by the key
    for (i = 0; i < splittext.length; i++) {
        newArray.push(shiftChar(splittext[i],parseInt(key)))
    }
    // display this to the user
    document.getElementById("cs-output").innerHTML = `${text} is encrypted as ${newArray.join("")}`;
}
function shiftChar(character, key) {
    characterCode = parseInt(character.charCodeAt(0));
    encryptedCode = characterCode+key;
    if (character == "SPACE"){
        return(" ");
    }
    // goes back to the start of the alphabet if the unicode would be outside of the alphabet, also checks for either case
    if (character == character.toUpperCase()){
        if (encryptedCode>90) {
            encryptedCode = encryptedCode-26;
        }
    }
    else {
        if (encryptedCode>122) {
        encryptedCode = encryptedCode-26;
        }
    }
    // turns it back into letters
    return(String.fromCharCode(encryptedCode));
}
// handles the onClick event of the decrypt
function decryptCaesarCipher(){
    // retrieve values
    text = document.getElementById("cs-ciphertext").value;
    key = parseInt(document.getElementById("cs-decrypt-key").value);
    if (key>26 || key<0){
        alert("Please enter a number between 0 and 26");
        // shut it down, nothing happens to the return
        return("noopaloop");
    }
    // split it into an array
    splittext = text.split("");
    splittext = sanitiseInput(splittext);
    if (splittext.length == 0) {
        alert("Please enter a value");
        // leave
        return("noop")
    }
    outputBox = document.getElementById("cs-combinations")
    if (key == 0) {
        // brute forces all 26 options
        outputBox.innerHTML = tryAllCS(splittext).join("<br>");
    }
    else {
        // just decrypts a single string
        outputBox.innerHTML = `${text} is decrypted to become: ${decryptCS(splittext,key)}`;
    }
}
function tryAllCS(textArray) {
    attemptArray = [];
    // loops through and outputs all of the potential options for the user to select from
    for (counterino=0;counterino<26;counterino++) {
        attemptArray.push(`Key: ${counterino} - ${decryptCS(textArray,counterino)}`);
    }
    return(attemptArray);
}
// this function is for a single array
function decryptCS(textArray,key){
    newArray=[];
    for (count=0;count<textArray.length;count++){
        // gets the code as unicode
        characterCode = parseInt(textArray[count].charCodeAt(0));
        encryptedCode = characterCode-key;
        // handles spaces
        if (textArray[count] == "SPACE"){
            newArray.push(" ");
            continue;
        }
        // goes back to the start of the alphabet if the unicode would be outside of the alphabet, also checks for either case
        if (textArray[count] == textArray[count].toUpperCase()){
            console.log("uppercaseshift")
            console.log(encryptedCode);
            if (encryptedCode<65) {
                encryptedCode = encryptedCode+26;
                console.log("uppercaseshift")
                console.log(encryptedCode);
            }
        }
        else {
            if (encryptedCode<97) {
            encryptedCode = encryptedCode+26;
            }
        }
        console.log(encryptedCode);
        newArray.push(String.fromCharCode(encryptedCode));
    }
    newArray = newArray.join("");
    return(newArray);
}