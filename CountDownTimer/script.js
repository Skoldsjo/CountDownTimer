const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");

const skoldsjo = "3 April 2021";

function countdown() {
    const skoldsjoDate = new Date(skoldsjo);
    const currentDate = new Date();

    const totalseconds = (skoldsjoDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 ) / 24;
    const hours = Math.floor(totalseconds / 3600) % 24;
    const min = Math.floor(totalseconds / 60) % 60;
    const sec = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minEl.innerHTML = min;
    secEl.innerHTML = sec;

}


countdown();

setInterval(countdown, 1000);


