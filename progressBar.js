
let progreesBarIntervalId = 0;


function startTimer() {
    const bar = document.getElementsByClassName('progress-bar')[0];

    const duration = bar.getAttribute('data-time');

    let timer = -1;

    bar.setAttribute('data-label', duration.toString() + ':000');

    progreesBarIntervalId = setInterval(() => {
        const computedStyle = getComputedStyle(bar);
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;

        bar.style.setProperty('--width', width + 100 / (200 * duration));
        timer++;

        if(bar.style.getPropertyValue('--width') >= 100) {
            clearInterval(progreesBarIntervalId);

            cCounter++;
            updateScore(pCounter, cCounter);
            resetTimer();
            showPopup("Time's Up Puter wins")
        }

        bar.setAttribute('data-label', numberToTimer(timer * 5));

        console.log(bar.style.getPropertyValue('--width'));

    }, 5)
}

function resetTimer() {
    const bar = document.getElementsByClassName('progress-bar')[0];

    if(progreesBarIntervalId != 0) {
        clearInterval(progreesBarIntervalId);
        bar.style.setProperty('--width', 0);
    }
}


function numberToTimer(num) {
    const seconds = parseInt(num / 1000);
    const miliseconds = num % 1000;

    return seconds.toString() + ':' + miliseconds.toString().padStart(3, '0');
}
