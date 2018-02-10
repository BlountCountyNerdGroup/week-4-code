var instrument = "piano";
console.log(instrument[2].charCodeAt());

function encrypt() {
    var originalMessage = document.getElementById('encrypt').value;
    var encryptedMessage = "";
    var letterNumber = 0;

    while(letterNumber < originalMessage.length) {
        var letter = originalMessage[letterNumber];

        var charCode = letter.charCodeAt();

        charCode = charCode * 5;

        var newLetter = String.fromCharCode(charCode);

        encryptedMessage += newLetter;

        letterNumber += 1;
    }

    console.log(encryptedMessage);
    document.getElementById('decrypt').innerHTML = encryptedMessage;
}
