var clickCount = 0;

document.getElementById('generate-btn').addEventListener('click', function() {
    var button = document.getElementById('generate-btn');
    button.classList.add('loading');

    setTimeout(function() {
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        document.getElementById('random-number').innerHTML = randomNumber;
        button.classList.remove('loading');

        clickCount++;
        document.getElementById('click-counter').innerHTML = 'Button clicks: ' + clickCount;
    }, 3000);
});
