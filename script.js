document.getElementById('generate-btn').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-number').innerHTML = randomNumber;
});
