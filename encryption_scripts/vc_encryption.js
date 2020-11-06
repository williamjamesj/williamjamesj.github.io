// receives the input
function clickVC() {
    plaintext = document.getElementById("vc-plaintext").value.toLowerCase();
    key = document.getElementById("vc-key").value.toLowerCase();
    plainsplit = plaintext.split("");
    keysplit = key.split("");
    plainsplit = sanitiseInput(plainsplit);
    keysplit = sanitiseInput(keysplit);
    alert(keysplit);
    alert(plainsplit);
}