// Set start date
const startDate = new Date(2022, 9, 5, 7, 0, 0);

//
let countdown = setInterval(showTime, 1000);

function showTime() {
    // Current Date
    let currentDate = new Date();

    // Time difference between the current Date and the start Date
    let timeDifference = startDate - currentDate;

    //Convert the single time parts 
    let dayCount = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hourCount = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuteCount = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let secondCount = Math.floor((timeDifference % (1000 * 60)) / 1000);

    let days = document.getElementById('days');
    let houre = document.getElementById('houre');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    days.innerHTML = `${fillUpNumber(dayCount, 2)}`;
    houre.innerHTML = `${fillUpNumber(hourCount, 2)}`;
    minutes.innerHTML = `${fillUpNumber(minuteCount, 2)}`;
    seconds.innerHTML = `${fillUpNumber(secondCount, 2)}`;

    if (timeDifference < 0) {
        clearInterval(countdown);
        const timer = document.getElementById('timer-box');
        timer.classList.add('d-none');
        let message = document.getElementById('message');
        message.innerHTML = 'Los gehts!';
    }
}


function fillUpNumber(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}