function generateRandomNumber() {
    var min = 1;
    var max = parseInt(document.getElementById('max').value);
    var rand = Math.floor(Math.random()* (max - min + 1)) + min;
    document.getElementById('display').innerText = rand
}