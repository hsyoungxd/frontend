function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        days = Math.floor(timer / 86400);
        hours = Math.floor((timer % 86400) / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        days = days.toString().padStart(2, '0');
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');

        display.textContent = `${parseInt(days)} Days ${parseInt(hours)}:${minutes}:${seconds}`;

        if (--timer < 0) {
            timer = duration;//start again
        }
    }, 1000);
}

window.onload = function () {
    const display = document.querySelector('#timer');
    const duration = 604800; // 7 days

    startTimer(duration, display);
};