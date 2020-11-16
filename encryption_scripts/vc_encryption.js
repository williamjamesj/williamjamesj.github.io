// receives the input
function clickVC() {
    plaintext = document.getElementById("vc-plaintext").value;
    key = document.getElementById("vc-key").value.toLowerCase();
    if (plaintext.match("([0-9])")){
        alert("Please enter a string WITHOUT numbers!");
        return(0);
    }
    plainsplit = plaintext.split("");
    keysplit = key.split("");
    plainsplit = sanitiseInput(plainsplit);
    keysplit = sanitiseInput(keysplit);
    // uses the sanitiseInput() function from the caesar cipher
    // doubles the keysplit size until it is longer than plainsplit, allows the code to expand for as long as it needs
    while (keysplit.length<plainsplit.length){
        keysplit=keysplit.concat(keysplit);
    }
    newArray = [];
    for (i=0;i<plainsplit.length;i++) {
        newArray.push(shiftChar(plainsplit[i],keysplit[i].charCodeAt(0)-97));
    }
    document.getElementById("vc-encrypted").innerHTML = `${plaintext} is encrypted with the key of "${key}" to become: ${newArray.join("")}`;
}
function decryptVC() {
    // get values
    ciphertext = document.getElementById("vc-ciphertext").value;
    key = document.getElementById("vc-cipherkey").value;
    // split and sanitise
    ciphersplit = ciphertext.split("");
    keysplit = key.split("");
    keysplit = sanitiseInput(keysplit);
    ciphersplit = sanitiseInput(ciphersplit);
    // double the keysplit until its big enough
    while (keysplit.length<ciphersplit.length){
        keysplit=keysplit.concat(keysplit);
    }
    console.log(keysplit);
    console.log(ciphersplit);
    newArray = [];
    for (count=0;count<ciphersplit.length;count++) {
        // retain spaces for readability
        if (ciphersplit[count]=="SPACE"){
            newArray.push("SPACE");
            continue;
        }
        if (ciphersplit[count] == ciphersplit[count].toUpperCase()){
            key=keysplit[count].toUpperCase().charCodeAt(0)-65;
            encryptedCode=ciphersplit[count].charCodeAt(0)-key;
            if (parseInt(encryptedCode)<65) {
                encryptedCode = encryptedCode+26;
                console.log("uppercaseshifting");
            }
        }
        else {
            key=keysplit[count].charCodeAt(0)-97;
            encryptedCode=ciphersplit[count].charCodeAt(0)-key;
            console.log(encryptedCode);
            if (parseInt(encryptedCode)<97) {
                encryptedCode = encryptedCode+26;
                console.log("lowercaseshifting");
            }
        }
        newArray.push(encryptedCode);
    }
    newNewArray = []
    for (i=0;i<newArray.length;i++){
        if (newArray[i]=="SPACE"){
            newNewArray.push(" ");
        }
        else {
            newNewArray.push(String.fromCharCode(newArray[i]));
        }
    }
    document.getElementById("vc-decrypted").innerHTML = newNewArray.join("");
}
