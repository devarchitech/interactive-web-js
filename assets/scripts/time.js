let time = document.querySelector('#time');

const updateTime = function () {
    let now = new Date();
    const padZero = (num) => String(num).padStart(2, '0');

    let hours = now.getHours();

    let period = hours > 12 ? 'PM' : 'AM'

    hours = now.getHours() % 12;
    hours = hours ? hours : 0;

    let minutes = padZero(now.getMinutes());
    let seconds = padZero(now.getSeconds());

    let timestring = hours + ":" + minutes + ":" + seconds + " " + period;
    time.textContent = timestring;
}

setInterval(updateTime, 1000)
updateTime();

